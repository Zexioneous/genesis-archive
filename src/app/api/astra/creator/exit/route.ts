import { cookies } from "next/headers";

import { CREATOR_SESSION_COOKIE } from "@/features/astra/lib/creatorSession";

export async function POST() {
  try {
    const cookieStore = await cookies();

    cookieStore.set({
      name: CREATOR_SESSION_COOKIE,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return Response.json({
      authenticated: false,
      message: "Creator mode exited successfully.",
    });
  } catch (error) {
    console.error("ASTRA CREATOR EXIT ERROR:", error);

    return Response.json(
      {
        authenticated: false,
        error: "Failed to exit creator mode.",
      },
      { status: 500 },
    );
  }
}
