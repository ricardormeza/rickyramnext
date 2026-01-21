import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedPrefixes = [
  "/",
  "/soluciones",
  "/servicios",
  "/precios",
  "/blog",
  "/contacto",
  "/cotizar",
  "/Agendar-llamada",
  "/portafolio",
  "/legal",
  "/privacidad",
  "/cookies",
];

const passthroughPrefixes = [
  "/_next",
  "/api",
  "/sitemap.xml",
  "/sitemap_index.xml",
  "/robots.txt",
  "/favicon.ico",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (passthroughPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  if (allowedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/:path*"],
};
