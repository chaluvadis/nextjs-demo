import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        console.log("In GET");
        await connect();
        const users = await User.find();
        return NextResponse.json(
            users,
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: "Error in getting the data" + error.message },
            { status: 500 }
        );
    }
};

export const POST = async (requset: Request) => {
    try {
        console.log("In POST");
        const body = await requset.json();
        console.log(body);
        const newUser = new User(body);
        await connect();
        await newUser.save();
        return NextResponse.json(
            { user: newUser },
            { status: 201, statusText: "User created successfully" }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: "Error in creating the user " + error.message },
            { status: 500 }
        );
    }
};