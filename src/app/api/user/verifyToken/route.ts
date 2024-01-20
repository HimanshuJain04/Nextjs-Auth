import User from "@/models/userSchema";
import { dbConnection } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export async function POST(req: NextRequest) {
    try {

        const reqBody = await req.json();
        const { token } = reqBody;

        console.log("token : ", token);

        User.findOne({ verifyToken: token })


        return NextResponse.json(
            {
                message: "Verification Successfully",
                success: true,
            },
            { status: 200 }
        )

    } catch (err: any) {
        return NextResponse.json(
            {
                error: err.message
            },
            { status: 500 }
        )
    }

}

