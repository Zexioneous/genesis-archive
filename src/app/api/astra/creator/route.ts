import { cookies } from "next/headers";

import {
  createCreatorSession,
  CREATOR_SESSION_COOKIE,
  isCreatorAuthenticated,
} from "@/features/astra/lib/creatorSession";

const SESSION_DURATION_SECONDS = 60 * 60 * 24;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("key" in body) ||
      typeof body.key !== "string"
    ) {
      return Response.json(
        {
          authenticated: false,
          error: "Creator authentication requires a valid key.",
        },
        { status: 400 },
      );
    }

    const creatorKey = process.env.ASTRA_CREATOR_KEY;

    if (!creatorKey) {
      console.error("ASTRA_CREATOR_KEY is not configured.");

      return Response.json(
        {
          authenticated: false,
          error: "Creator authentication is not configured.",
        },
        { status: 500 },
      );
    }

    if (body.key !== creatorKey) {
      return Response.json(
        {
          authenticated: false,
          error: "Creator authentication failed.",
        },
        { status: 401 },
      );
    }

    const session = createCreatorSession();

    const cookieStore = await cookies();

    cookieStore.set({
      name: CREATOR_SESSION_COOKIE,
      value: session.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_DURATION_SECONDS,
    });

    return Response.json({
      authenticated: true,
      message: "Creator authentication successful.",
    });
  } catch (error) {
    console.error("ASTRA CREATOR AUTH ERROR:", error);

    return Response.json(
      {
        authenticated: false,
        error: "Creator authentication failed.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const authenticated = await isCreatorAuthenticated();

    return Response.json({
      authenticated,
    });
  } catch (error) {
    console.error("ASTRA CREATOR SESSION ERROR:", error);

    return Response.json(
      {
        authenticated: false,
      },
      { status: 500 },
    );
  }
}
