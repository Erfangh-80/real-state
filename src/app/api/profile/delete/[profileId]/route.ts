import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request, context: any) => {
  try {
    await connectDB();
    const id = context.params.profileId;
    console.log("id delete", id);
    console.log("parameter delete", context.params);

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User?.findOne({ email: session.user?.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};
