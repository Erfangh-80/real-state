import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const {
      newUser: { email, password },
    } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await User?.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User?.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};
