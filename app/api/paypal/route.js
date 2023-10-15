import { HOST, PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } from "@/config"
import axios from "axios"
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "15.00"
                    }
                }
            ],
            application_context: {
                brand_name: "mr-developer",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: `${HOST}/api/paypal/pagar`,
                cancel_url: `${HOST}/api/paypal/cancelar`
            }
        }
    
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
    
        const { data: { access_token } } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })

        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    
        console.log(response.data);

        return NextResponse.json(response.data)
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}