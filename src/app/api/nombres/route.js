import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import {nombreModel} from "@/models/Nombre";

export const GET = async (req, res) => {
    await connectDB();
    try {
        const body = await req.json()
        const newNombre = await nombreModel.create(body)
        return NextResponse.json({data:newNombre}, {status:200})
    } catch (error) {
        return NextResponse.json({data:null}, {status:500});
    }
}

export const POST = async () => {

}