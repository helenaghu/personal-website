import { NextRequest, NextResponse } from "next/server";

export type Track = {
  title: string;
  artist: string;
};

// Use the stored refresh token to silently obtain a new access token.
async function refreshAccessToken(refreshToken: string): Promise<string | null> {
  const credentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[Spotify] refresh failed:", res.status, body);
    return null;
  }

  const data = await res.json();
  return (data.access_token as string) ?? null;
}

// Paginate through all tracks in a playlist.
async function fetchAllTracks(token: string, playlistId: string): Promise<Track[]> {
  const tracks: Track[] = [];
  let url: string | null =
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks` +
    `?limit=100&fields=next,items(track(name,artists(name)))`;

  while (url) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Spotify tracks fetch failed: ${res.status} — ${body}`);
    }

    const data = await res.json();

    for (const item of data.items ?? []) {
      if (item?.track?.name) {
        tracks.push({
          title: item.track.name,
          artist:
            (item.track.artists as { name: string }[])
              ?.map((a) => a.name)
              .join(", ") ?? "",
        });
      }
    }

    url = data.next ?? null;
  }

  return tracks;
}

export async function GET(request: NextRequest) {
  const playlistId = request.nextUrl.searchParams.get("playlistId");

  if (!playlistId) {
    return NextResponse.json(
      { error: "playlistId query parameter is required" },
      { status: 400 }
    );
  }

  let accessToken  = request.cookies.get("spotify_access_token")?.value ?? null;
  const refreshToken = request.cookies.get("spotify_refresh_token")?.value ?? null;

  // No credentials at all — user hasn't logged in yet
  if (!accessToken && !refreshToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Access token missing but refresh token present — silently refresh
  let freshToken: string | null = null;
  if (!accessToken && refreshToken) {
    freshToken = await refreshAccessToken(refreshToken);
    if (!freshToken) {
      return NextResponse.json({ error: "Token refresh failed" }, { status: 401 });
    }
    accessToken = freshToken;
  }

  try {
    const tracks = await fetchAllTracks(accessToken!, playlistId);
    const response = NextResponse.json({ tracks });

    // Persist the newly refreshed access token in the cookie
    if (freshToken) {
      response.cookies.set("spotify_access_token", freshToken, {
        httpOnly: true,
        maxAge: 3600,
        path: "/",
        sameSite: "lax",
      });
    }

    return response;
  } catch (err) {
    console.error("[Spotify API]", err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}
