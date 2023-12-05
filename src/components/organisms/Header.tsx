"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Typography } from "../atoms";
import { useSession } from "next-auth/react";

export const Header = () => {
  const { data } = useSession();

  return (
    <header className="flex justify-between items-center p-4 my-2 rounded-md bg-blue-600 text-white">
      <div>
        <ul className="flex">
          <li className="ml-1 sm:ml-3">
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li className="ml-1 sm:ml-3">
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        {data ? (
          <Link
            href={"/dashboard"}
            className="flex items-center gap-2 text-[#304ffe] bg-white py-2 px-2 rounded-md transition-all ease-in delay-100 hover:bg-[#304ffe] hover:text-white"
          >
            <FaUserAlt />
          </Link>
        ) : (
          <Link
            href={"/signup"}
            className="flex items-center gap-2 text-[#304ffe] bg-white py-2 px-4 rounded-md transition-all ease-in delay-100 hover:bg-[#304ffe] hover:text-white"
          >
            <FiLogIn />
            <Typography headerSize="span" text="ورود" />
          </Link>
        )}
      </div>
    </header>
  );
};
