import axios from "axios"
import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function POST(req){

    try {
        
        // const existingUsers = await prisma?.usuariosprueba?.findMany()

        // if(existingUsers) return NextResponse.json({
        //     message: "Los usuarios ya existen: ",
        //     users: existingUsers
        // })
        
        const body = await req.json();

        const { name, username, email } = body;

        // const response = await axios.get("https://jsonplaceholder.typicode.com/users")

        // const arrayUser = response.data

        // const arrayUser = [{id:1, name: "Nadinne Paz", username: "nadin", email: "nadin@nadin.com"}, {id:2, name: "Dani Paz", username: "dan", email: "dan@nadin.com"}]

                const createdUser = await prisma?.usuariosprueba?.create({
                    data: {
    
                      name: name,
                      username: username,
                      email: email,
    
                    },
                  });

            if(!createdUser) return NextResponse.json({
              message: "No se crearon con exito: ",
              createdUser: createdUser
          })
        
            return NextResponse.json({
              message: "Usuarios de prueba creados con exito: ",
              createdUser: createdUser
          })

    } catch (error) {
        return NextResponse.json({
            message: "Error al crear usuarios de prueba",
            error: error.message
        },
        {
            status: 500
        })
    }finally {
    // Cerrar la conexión de Prisma Client después de usarlo
    await prisma.$disconnect();
  }

}

export async function GET(req){

  try {
    
    const usuariosPrueba = await prisma?.usuariosprueba?.findMany()

    if(!usuariosPrueba) return NextResponse.json({
    message: "No existen usuarios"
    })

    return NextResponse.json(usuariosPrueba)

  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al listar usuarios de prueba",
        error: error.message
      },
      {
        status: 500
      }
    )
  }
}