import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	// do something
	// console.log('request', req.nextUrl.pathname);

	return NextResponse.next();
}

export const config = {
	matcher: '/',
};
