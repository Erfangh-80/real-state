import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { Button, Typography } from "../atoms";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { LogoutButton } from "../molecules";

export const DashboardSidebar = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit px-7 py-4 rounded-lg shadow-[#304ffe4a_0px_4px_15px] w-56 ml-10">
        <CgProfile className="text-5xl text-[#304ffe]" />
        <Typography
          className="text-gray-700 text-lg font-light mt-5"
          headerSize="p"
          text={session?.user?.email}
        />
        <Typography
          className="bg-[#c0c0c0] w-full h-[1px] text-lg font-light mb-7"
          headerSize="span"
        />
        <Link href={"/dashboard"} className="my-1 font-extralight w-full">
          حساب کاربری
        </Link>
        <Link
          href={"/dashboard/my-profiles"}
          className="my-1 font-extralight w-full"
        >
          آگهی های من
        </Link>
        <Link href={"/dashboard/add"} className="my-1 font-extralight w-full">
          ثبت آگهی
        </Link>
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
