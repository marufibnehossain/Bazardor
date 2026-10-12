import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const pathname = request.nextUrl.pathname;

    const isAuthPage = ["/sign-in", "/sign-up"].includes(pathname);
    const isProtectedPage =
        pathname === "/profile" || pathname.startsWith("/product/");

    // Logged-in users cannot access sign-in/sign-up
    if (session && isAuthPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Logged-out users cannot access protected pages
    if (!session && isProtectedPage) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/product/:path*", "/sign-in",
        "/sign-up"],
};