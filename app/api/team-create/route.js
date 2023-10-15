// import { NextResponse } from "next/server";
// import { prisma } from "@/libs/prisma";

// export async function POST(req){

//     try {
        
//         const body = await req.json()
//         // const arrayOfObjects = body;

//         console.log(arrayOfObjects);

        

//         const teamCreated = await prisma?.Team?.create({
//             data: {
//                 members: {
//                     create: arrayOfObjects
//                 }
//             },
            
//         })
      
//         if(!teamCreated){
//             console.log("No se pudo crear");
//             return NextResponse.json({
//                 message: "No se pudo crear! ",
//                 Team: teamCreated 
//             })
//         }
//           console.log("Aqui: " + teamCreated);
//         console.log("Exito");

//         return NextResponse.json({
//             message: "Equipo creado con exito! ",
//             Team: teamCreated 
//         })

//     } catch (error) {
//         return NextResponse.json({
//             message: "Hubo un error inesperado al crear el equipo: ",   
//             error: error.message
//         }, {
//             status: 500
//         })
//     }
// }

// export async function GET(req){

//     try {

//         const teamMembers = await prisma.Team.findMany({
//             include: {
//                 members: true,
//             },
//         })

//         // if(teamMembers.length === 0) return NextResponse.json({
//         //     message: "No hay equipos disponibles."
//         // })

//         return NextResponse.json({
//             Team: teamMembers
//         })

//     } catch (error) {
//         return NextResponse.json({
//             message: "Hubo un error inesperado al listar el equipo: ",
//             error: error.message
//         }, {
//             status: 500
//         })
//     }
// }