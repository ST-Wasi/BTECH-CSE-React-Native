import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    console.log('✌️request.url --->', request.url);
    if (request.url == "/home") {
        if (false) {

            NextResponse.redirect(new URL('/home', request.url))
        } else {
            NextResponse.redirect(new URL('/', request.url))
        }
    }


    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/home'],
}