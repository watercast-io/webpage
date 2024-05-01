import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_TOKEN_NAME, getUser, sessionHeaderName, verifyAccessToken } from '@/lib/auth/auth-kit'
import { env } from "@/env.mjs";

import { sealData, unsealData } from 'iron-session';
import { Session } from './interfaces';
import { workos } from './workos';
import { cookieOptions } from './cookie';

export const encryptSession = async (session: Session) => {
    const result = await sealData(session, { password: env.WORKOS_COOKIE_PASSWORD });
    return result
}

export async function getSessionFromCookie() {
    const cookie = cookies().get(COOKIE_TOKEN_NAME);
    if (cookie) {
      return unsealData<Session>(cookie.value, {
        password: env.WORKOS_COOKIE_PASSWORD,
      });
    }
} 

export async function updateSession(request: NextRequest) {
    const session = await getSessionFromCookie();
    // If no session, just continue
    if (!session) {
      return NextResponse.next();
    }
    const hasValidSession = await verifyAccessToken(session.accessToken);
  
    const newRequestHeaders = new Headers(request.headers);
  
    if (hasValidSession) {
      // set the x-workos-session header according to the current cookie value
      newRequestHeaders.set(sessionHeaderName, cookies().get(COOKIE_TOKEN_NAME)!.value);
      return NextResponse.next({
        headers: newRequestHeaders,
      });
    }
  
    try {
      // If the session is invalid (i.e. the access token has expired) attempt to re-authenticate with the refresh token
      const { accessToken, refreshToken } = await workos.userManagement.authenticateWithRefreshToken({
        clientId: env.WORKOS_CLIENT_ID,
        refreshToken: session.refreshToken,
      });
  
      // Encrypt session with new access and refresh tokens
      const encryptedSession = await encryptSession({
        accessToken,
        refreshToken,
        user: session.user,
      });
  
      newRequestHeaders.set(sessionHeaderName, encryptedSession);
  
      const response = NextResponse.next({
        request: {
          headers: newRequestHeaders,
        },
      });
      // update the cookie
      response.cookies.set(COOKIE_TOKEN_NAME, encryptedSession, cookieOptions);
      return response;
    } catch (e) {
      console.warn('Failed to refresh', e);
      const response = NextResponse.next();
      response.cookies.delete(COOKIE_TOKEN_NAME);
      return response;
    }
}

export async function terminateSession() {
    const { sessionId } = await getUser();
    console.log('terminateSession.sessionId', sessionId);
    if (sessionId) {
      const url: string = workos.userManagement.getLogoutUrl({ sessionId })
      console.log('terminateSession.url', url);
      
      console.log('terminateSession.session_revoke', workos.userManagement.revokeSession({ sessionId }));
      const cookie = cookies().set(COOKIE_TOKEN_NAME, '', { expires: new Date(0) });
      console.log('terminateSession.cookie', cookie);
    }
}

export async function getSessionFromHeader(): Promise<Session | undefined> {
    const authHeader = headers().get(sessionHeaderName);
    if (!authHeader) return;
    return unsealData<Session>(authHeader, { password: env.WORKOS_COOKIE_PASSWORD });
}