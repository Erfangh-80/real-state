import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/models/User";
import { verifyPassword, connectDB } from "../../../../utils";

type TAuthorize = {
  email: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as TAuthorize;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User?.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return user;
      },
    }),
  ],
};

const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
