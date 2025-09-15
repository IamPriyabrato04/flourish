export { auth as middleware } from "./auth"

import { auth } from "@/src/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
        // redirect unauthenticated user
        return NextResponse.redirect(new URL("/login", req.url));
    }
});