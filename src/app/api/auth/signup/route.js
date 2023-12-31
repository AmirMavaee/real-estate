import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    // connect to DB
    await connectDB();

    //get data from client
    const { email, password } = await req.json();
    //check data

    if (!email || !password) {
      return NextResponse.json(
        { error: "مقادیر را به درستی وارد کنید" },
        { status: 422 }
      );
    }

    // check if user with that email was not in DB
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return NextResponse.json(
        { error: "کاربر وجود دارد لطفا گزینه ورود را بزنید" },
        { status: 422 }
      );
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // add user to database
    const user = await User.create({ email, password: hashedPassword });
    console.log(user);

    return NextResponse.json({ message: "حساب کاربری ایجاد شد" } , {status : 201});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است ." }, 
      {
        status: 500,
      }
    );
  }
}
