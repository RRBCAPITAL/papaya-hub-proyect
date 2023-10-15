import { NextResponse } from "next/server"

export async function GET(req){

    return NextResponse.redirect(new URL('/compra', req.url));
}