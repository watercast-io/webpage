import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { workos } from '@/lib/auth/workos';
import { env } from '@/env.mjs';
import { encryptSession } from '@/lib/auth/session';
import { cookieOptions } from '@/lib/auth/cookie';
import { COOKIE_TOKEN_NAME } from '@/lib/auth/auth-kit';

export async function GET(request: NextRequest) {
  
  const code = request.nextUrl.searchParams.get('code');
  
  

  if (code) {
    try {
      // Use the code returned to us by AuthKit and authenticate the user with WorkOS
      const { user, accessToken, refreshToken } = await workos.userManagement.authenticateWithCode({
        clientId: env.WORKOS_CLIENT_ID,
        code,
      });
      const url = request.nextUrl.clone();
      // Cleanup params
      url.searchParams.delete('code');
      // Redirect to the requested path and store the session
      url.pathname = '/dashboard';
      const response = NextResponse.redirect(url);
      if (!accessToken || !refreshToken) throw new Error('response is missing tokens');
      const cookieValue = await encryptSession({ accessToken, refreshToken, user });
      // The refreshToken should never be accesible publicly, hence why we encrypt it in the cookie session
      // Alternatively you could persist the refresh token in a backend database
      cookies().set(
        COOKIE_TOKEN_NAME,
        cookieValue,
        cookieOptions,
      );

      return response;
    } catch (error) {
      const errorRes = {
        error: error instanceof Error ? error.message : String(error),
      };
      console.error(errorRes);
      return errorResponse();
    }
  }

  return errorResponse();
}

function errorResponse() {
  return NextResponse.json(
    {
      error: {
        message: 'Something went wrong',
        description:
          'Couldn’t sign in. If you are not sure what happened, please contact your organization admin.',
      },
    },
    { status: 500 },
  );
}