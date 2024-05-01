import type { NextRequest } from 'next/server'
import { updateSession } from './lib/auth/session'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return updateSession(request);
}
 
// See "Matching Paths" below to learn more
export const config = { matcher: ["/"] };