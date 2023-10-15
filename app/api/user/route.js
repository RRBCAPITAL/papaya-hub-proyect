import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(req) {
  

  try {
    // Obtener los datos del usuario registrado a través de Clerk
    const body = await req.json();
    const { clerkId, email, firstname, lastname, fullname, image } = body;

    console.log(email);

    // Buscar si existe un usuario con el mismo correo electrónico en la base de datos
    const duplicateUser = await prisma?.user?.findFirst({
        where: {
        email: email,
        },
    });

    if(duplicateUser){
        console.log('Usuario antiguo reconocido.');
        return NextResponse.json({
            message: 'Usuario antiguo reconocido.'
        })
    }

    if(clerkId !== ''){
        const newUser = await prisma?.user?.create({
            data: {
              email: email, // Guardar el correo electrónico del usuario proporcionado por Clerk
              firstname: firstname || "",
              lastname: lastname !== null ? lastname : "",
              fullname: fullname,
              image: image || "",
            },
          });

          console.log(newUser);
    return NextResponse.json({
                user: newUser
              });
    }

    //       console.log(data);
    //       console.log(newUser);
    
    //       return NextResponse.json({
    //         message: 'Usuario registrado exitosamente',
    //         user: newUser,
    //       });
        
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: 'Error al registrar o actualizar el usuario: ',
      error: error
    }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}


export async function GET(req) {
  try {
    const users = await prisma.$transaction([
      prisma.user.findMany({
        select: {
          id: true,
          firstname: true,
          lastname: user => user.lastname || "",
          fullname: true,
          email: true,
          role: true,
          createdAt: true,
          image: true,
          estado: true,
        },
      }),
    ]);

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error al listar usuarios: ",
        error: error.message,
      },
      { status: 500 }
    );
  }finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}