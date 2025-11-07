import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const authenticated = true;

    //!authenticated -> vira true ou seja é verdadeiro que authenticated é false 
    if(request.nextUrl.pathname.startsWith ('/dashboard')&& !authenticated){

        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}