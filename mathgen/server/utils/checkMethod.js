import { NextResponse } from "next/server"

export default function checkMethod(method, methods) {
    let allowed = false;
    for(let i = methods.length - 1; i >= 0; i--) {
        if (methods[i] == method) {
            allowed = true
        }
    }
    if (!allowed) {
        return new NextResponse(
            JSON.stringify({ success: false, error: "Invalid request method: " + method }),
            { status: 400 }
        )
    }
    return NextResponse.next()
} 