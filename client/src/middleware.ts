import { auth as middleware } from './auth';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const auth = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname.startsWith('/login');

  const hasAuthToken =
    !!req.cookies.get('authjs.session-token') ||
    !!req.cookies.get('__Secure-next-auth.session-token');

  // If user is not authenticated and not on login page → redirect to /login
  if (!hasAuthToken && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If user is authenticated and tries to visit login page → redirect to /home
  if (hasAuthToken && isLoginPage) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // Otherwise, allow request
  return NextResponse.next();
};

export default middleware(auth);

export const config = {
  matcher: ['/', '/editor/:path*', '/home', '/login'],
};
