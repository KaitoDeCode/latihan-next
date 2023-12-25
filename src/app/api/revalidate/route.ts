import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request:NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secretCode = request.nextUrl.searchParams.get('secret');

    if (secretCode !== "12345678") {
        return NextResponse.json({
            status : 401,
            message: "Invalid secret code",
        })
    }

    if (!tag) {
        return NextResponse.json({
            status : 400,
            message: "Mising tag param",
        })
    }
    revalidateTag(tag);
    return NextResponse.json({
        revalidate : true,
        now : Date.now()
    })
}