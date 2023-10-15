import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        
        const body = await req.json()

        const  { name, username, email } = body

        console.log(name);

        const res = await prisma?.usuariosprueba?.create({
            data: {
                name: name,
                username: username,
                email: email
            }
        })

        if(res) return NextResponse.json({
            message: "El usuario demo se creo correctamente: ",
            user: res
        })

        return NextResponse.json({
            message: "El usuario demo no se creo correctamente: ",
            user: res
        })

    } catch (error) {
        return NextResponse.json({
            message: "Hubo un error al guardar los usuarios: ",
            error: error.message
        })
    }
}