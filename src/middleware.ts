import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/newsletter/") ||
    pathname.startsWith("/agility-campaign-sustainability-lp/") ||
    pathname.startsWith("/employee_newsletter/")
  ) {
    const targetUrl = `https://phpstack-725513-2801524.cloudwaysapps.com${pathname}`;
    return NextResponse.rewrite(targetUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/newsletter/:path*",
    "/agility-campaign-sustainability-lp/:path*",
    "/employee_newsletter/:path*",
  ],
};
