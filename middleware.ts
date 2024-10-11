import { NextResponse } from "next/server";
import { authMiddlware } from "./middleware/api/auth-middleware";
import { logMiddleware } from "./middleware/api/log-middleware";
export const config = {
    matcher: "/api/:path*"
};

export default function middleware(req: Request) {
    const authResult = authMiddlware(req);
    const logResult = logMiddleware(req);
    console.log(logResult?.response);
    // if (!authResult.isValid && !req.url.includes("/api/users")) {
    //     return NextResponse.json
    //         (
    //             { message: "Unauthorized request" },
    //             { status: 401 }
    //         );
    // }
    return NextResponse.next();
}