import { NextResponse } from "next/server"
import connect from "@/utils/db"
import {Users} from "@/models/Users"

export const  GET = async (request) => {
 
    try {
        await connect()
        const users = await Users.find()
        return new NextResponse("ok", {status: 200})
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }
}