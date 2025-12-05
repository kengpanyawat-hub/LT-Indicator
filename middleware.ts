import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow public routes
        if (
          pathname.startsWith('/auth') ||
          pathname === '/' ||
          pathname.startsWith('/api/auth')
        ) {
          return true;
        }

        // Protected dashboard routes require authentication
        if (
          pathname.startsWith('/dashboard') ||
          pathname.startsWith('/templates') ||
          pathname.startsWith('/create-image') ||
          pathname.startsWith('/create-video') ||
          pathname.startsWith('/ai-consultant') ||
          pathname.startsWith('/my-business') ||
          pathname.startsWith('/history') ||
          pathname.startsWith('/how-to-use')
        ) {
          return !!token;
        }

        // Protected API routes
        if (
          pathname.startsWith('/api/') &&
          !pathname.startsWith('/api/auth')
        ) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/templates/:path*',
    '/create-image/:path*',
    '/create-video/:path*',
    '/ai-consultant/:path*',
    '/my-business/:path*',
    '/history/:path*',
    '/how-to-use/:path*',
    '/api/((?!auth).)*',
  ],
};
