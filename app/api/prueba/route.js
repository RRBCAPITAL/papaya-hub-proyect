import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req){

  try {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(response.data);
    return NextResponse.json(response.data)

  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al obtener usuarios de placeholder",
        error: error
      },
      {
        status: 500
      }
    )
  }
}