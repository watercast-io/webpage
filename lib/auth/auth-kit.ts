import { redirect } from "next/navigation";
import { jwtVerify, createRemoteJWKSet, decodeJwt } from 'jose';
import { env } from "@/env.mjs";
import { workos } from "./workos";
import { AccessToken, NoUserInfo, UserInfo } from "./interfaces";
import { getSessionFromHeader } from "./session";

export const COOKIE_TOKEN_NAME = "token";
export const sessionHeaderName = 'x-workos-session';
export const JWKS = createRemoteJWKSet(new URL(workos.userManagement.getJwksUrl(env.WORKOS_CLIENT_ID)));


export function getClientId() {
  const clientId = process.env.WORKOS_CLIENT_ID;

  if (!clientId) {
    throw new Error("WORKOS_CLIENT_ID is not set");
  }

  return clientId;
}

export async function getAuthorizationUrl() {
  const redirectUri = env.WORKOS_REDIRECT_URI;

  if (!redirectUri) {
    throw new Error("WORKOS_REDIRECT_URI is not set");
  }
  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    provider: "authkit",
    clientId: getClientId(),
    redirectUri,
  });

  return authorizationUrl;
}

export async function getUser(options?: { ensureSignedIn: false }): Promise<UserInfo | NoUserInfo | any>;

export async function getUser(options: { ensureSignedIn: true }): Promise<UserInfo | any>;

export async function getUser({ ensureSignedIn = false } = {}) {
  const session = await getSessionFromHeader();
  if (!session) {
    if (ensureSignedIn) {
      redirect(await getAuthorizationUrl());
    }
    return { user: null, isAuthenticated: false };
  }

  const { sid: sessionId, org_id: organizationId } = decodeJwt<AccessToken>(session.accessToken);
  return {
    user: session.user,
    sessionId,
    organizationId,
    isAuthenticated: true,
    session: session,
  };
}

export async function verifyAccessToken(accessToken: string) {
  try {
    await jwtVerify(accessToken, JWKS);
    return true;
  } catch (e) {
    console.warn('Failed to verify session:', e);
    return false;
  }
}

