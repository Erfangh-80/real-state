"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

import { Button } from "../atoms";

export const LogoutButton = () => {
  const signOutHandler = async () => {
    await signOut();
  };

  return (
    <Button
      text="خروج"
      onClick={signOutHandler}
      className="flex items-center bg-none border-none mt-5 w-full text-right text-lg text-red-700 cursor-pointer"
    >
      <FiLogOut className="text-lg ml-1 text-red-700" />
    </Button>
  );
};
