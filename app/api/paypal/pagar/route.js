import { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } from "@/config";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req){

  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")

  console.log(token);

 const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
  auth: {
  username: PAYPAL_API_CLIENT,
  password: PAYPAL_API_SECRET
}}
)


 console.log(response.data);

 return NextResponse.json("pagado")
}