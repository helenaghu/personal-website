import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI not set" },
      { status: 500 }
    );
  }

  // Random state value for CSRF protection
  const state = crypto.randomUUID();

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "playlist-read-private playlist-read-collaborative",
    redirect_uri: redirectUri,
    state,
    show_dialog: "true",
  });

  const response = NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );

  // Store state in a short-lived cookie so the callback can verify it
  response.cookies.set("spotify_auth_state", state, {
    httpOnly: true,
    maxAge: 600, // 10 minutes
    path: "/",
    sameSite: "lax",
  });

  return response;
}
