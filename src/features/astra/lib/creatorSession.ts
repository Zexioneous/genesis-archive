import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const CREATOR_SESSION_COOKIE = "astra_creator_session";

const SESSION_DURATION_SECONDS = 60 * 60 * 24;

function getSessionSecret() {
  const secret = process.env.ASTRA_CREATOR_SESSION_SECRET;

  if (!secret) {
    throw new Error("ASTRA_CREATOR_SESSION_SECRET is not configured.");
  }

  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

export function createCreatorSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;

  const sessionId = randomBytes(32).toString("hex");

  const payload = `${sessionId}.${expiresAt}`;
  const signature = sign(payload);

  return {
    token: `${payload}.${signature}`,
    maxAge: SESSION_DURATION_SECONDS,
  };
}

export async function isCreatorAuthenticated() {
  const cookieStore = await cookies();

  const token = cookieStore.get(CREATOR_SESSION_COOKIE)?.value;

  if (!token) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    return false;
  }

  const [sessionId, expiresAtString, providedSignature] = parts;

  if (!sessionId || !expiresAtString || !providedSignature) {
    return false;
  }

  const expiresAt = Number(expiresAtString);

  if (!Number.isFinite(expiresAt)) {
    return false;
  }

  if (Math.floor(Date.now() / 1000) >= expiresAt) {
    return false;
  }

  const payload = `${sessionId}.${expiresAtString}`;
  const expectedSignature = sign(payload);

  const providedBuffer = Buffer.from(providedSignature, "hex");
  const expectedBuffer = Buffer.from(expectedSignature, "hex");

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, expectedBuffer);
}

export { CREATOR_SESSION_COOKIE };
