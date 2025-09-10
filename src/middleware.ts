import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_URL } from "./util/constants";
import { ResponseData } from "./util/types";

// TODO: have conditionals for the different states this file should be in (reg open, reg closed, database off)

export async function middleware(request: NextRequest) {
    // minimal theme drop website
    return NextResponse.rewrite(new URL('/not-found', request.url));
    
    // intercept all pages that use accounts
    return NextResponse.redirect(new URL('/registration-closed', request.url));

    // get flags
    let flags: ResponseData<{ label: string; value: boolean }>[];

    try {
        let response = await fetch(`${API_URL}/fact-admin/flags/`);
        flags = await response.json();
    } catch {
        return NextResponse.error();
    }

    // workshop changes
    if (request.nextUrl.pathname.startsWith("/my-fact/workshops")) {
        const workshopChanges = flags.find(
            (flag) => flag.fields.label === "workshop-changes"
        );

        if (!workshopChanges || !workshopChanges?.fields.value) {
            return NextResponse.error();
        }
    }

    // hide registration related pages
    if (request.nextUrl.pathname == "/my-fact/register"){
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: [
        "/agenda", "/faq", "/gallery", "/refund", "/registration-closed", "/team", "/workshops",
        "/my-fact/:path*",
        // "/workshops/:path*",
        "/facilitators/:path*",
        "/admin/:path*",
    ],
};
