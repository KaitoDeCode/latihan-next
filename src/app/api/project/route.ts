import { NextResponse } from "next/server";

import React from 'react'

type Props = {}

export async function GET({}: Props) {

    const data =[
        {
            id : 1,
            judul : "Hummatask"
        },
        {
            id : 2,
            judul : "Hummsertify"
        }
    ];

    return NextResponse.json({
        status : 200,
        message: "success",
        data : data
    })
}