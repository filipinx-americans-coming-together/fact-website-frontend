import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_URL } from "./util/constants";
import { ResponseData } from "./util/types";

// TODO once registration is open, just intercept /my-fact/register
// or change to redirect to page saying registration is closed/how to register late

export async function middleware(request: NextRequest) {
    // TODO REMOVE ONCE BACKEND IS UP
    // return NextResponse.error();
    // return;

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
    // if (request.nextUrl.pathname == "/my-fact/register"){
    //     return NextResponse.redirect(new URL('/registration-closed', request.url));
    // }
}

export const config = {
    matcher: [
        "/my-fact/register",
        "/workshops/:path*",
        // "/facilitators/:path*",
    ],
};
