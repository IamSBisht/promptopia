import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { NextRequest, NextResponse } from "next/server";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            // clientSecret:
        })
    ]
})

export async function GET (req) {

    console.log({first: process.env.GOOGLE_ID})

    return NextResponse.json({
        status: true
    })
}