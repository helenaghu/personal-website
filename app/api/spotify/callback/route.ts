import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code        = searchParams.get("code");
  const state       = searchParams.get("state");
  const spotifyError = searchParams.get("error");

  const cassetteUrl = new URL("/cassette", request.url);

  // User denied access on Spotify's side
  if (spotifyError) {
    cassetteUrl.searchParams.set("auth_error", "access_denied");
    return NextResponse.redirect(cassetteUrl);
  }

  // Validate state to prevent CSRF
  const storedState = request.cookies.get("spotify_auth_state")?.value;
  if (!code || !state || state !== storedState) {
    cassetteUrl.searchParams.set("auth_error", "state_mismatch");
    return NextResponse.redirect(cassetteUrl);
  }

  // Exchange authorization code for access + refresh tokens
  const credentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:   "authorization_code",
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    }),
    cache: "no-store",
  });

  if (!tokenRes.ok) {
    const body = await tokenRes.text();
    console.error("[Spotify callback] token exchange failed:", tokenRes.status, body);
    cassetteUrl.searchParams.set("auth_error", "token_exchange_failed");
    return NextResponse.redirect(cassetteUrl);
  }

  const tokens = await tokenRes.json();

  const response = NextResponse.redirect(cassetteUrl);

  // Clear the one-time state cookie
  response.cookies.delete("spotify_auth_state");

  // Store access token (Spotify access tokens last 1 hour)
  response.cookies.set("spotify_access_token", tokens.access_token, {
    httpOnly: true,
    maxAge: tokens.expires_in ?? 3600,
    path: "/",
    sameSite: "lax",
  });

  // Store refresh token (long-lived; use it to silently get new access tokens)
  if (tokens.refresh_token) {
    response.cookies.set("spotify_refresh_token", tokens.refresh_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 90, // 90 days
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}
