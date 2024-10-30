import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_URL } from "./util/constants";
import { ResponseData } from "./util/types";

// TODO once registration is open, just intercept /my-fact/register
// or change to redirect to page saying registration is closed/how to register late

export async function middleware(request: NextRequest) {
    // get registration value, if it errors or is false, hide registration related pages
    let data: ResponseData<{ label: string; value: boolean }>;

    try {
        let response = await fetch(`${API_URL}/fact-admin/permissions/`);
        let json = await response.json();

        data = json.find(
            (permission: ResponseData<{ label: string; value: boolean }>) =>
                permission.fields.label == "registration"
        );
    } catch {
        return NextResponse.error();
    }

    if (!data || !data.fields.value) {
        return NextResponse.error();
    }
}

export const config = {
    matcher: ["/my-fact/:path*", "/facilitators/:path*"],
};
