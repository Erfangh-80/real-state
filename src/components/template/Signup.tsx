"use client";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import { Input, Typography } from "../atoms";
import { Loader } from "../molecules";
import { useCustomMutation } from "src/hooks";
import { TSignup } from "src/types/types";

export const Signup = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState<TSignup>({
    email: "",
    password: "",
    rePassword: "",
  });

  const { createUserMutation } = useCustomMutation();

  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const clickHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (signupData.password !== signupData.rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    const response = await createUserMutation.mutateAsync(signupData, {
      onError: (error) => {
        toast.error(error);
      },
      onSuccess: () => {
        toast.success("انجام شد");
      },
    });

    if (response.status === 201) {
      router.push("/signin");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <Typography
        headerSize="h4"
        text="فرم ثبت نام"
        className="text-[#304ffe] font-semibold text-4xl mb-5"
      />
      <form className="flex flex-col max-w-2xl shadow-[#304ffe4a 0px 4px 15px] border-2 border-[#304ffe] p-10 rounded-xl mb-5 ">
        <div className="flex flex-col">
          <label className="text-[#304ffe] mb-3 font-light">ایمیل :</label>
          <Input
            type="text"
            name="email"
            value={signupData.email}
            onChange={changeHandler}
            className="mb-10 w-64 border-blue-700 border border-dashed text-gray-700 rounded p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#304ffe] mb-3 font-light">رمز عبور :</label>
          <Input
            type="password"
            name="password"
            value={signupData.password}
            onChange={changeHandler}
            className="mb-10 w-64 border-blue-700 border border-dashed text-gray-700 rounded p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#304ffe] mb-3 font-light">
            تکرار رمز عبور :
          </label>
          <Input
            type="password"
            name="rePassword"
            value={signupData.rePassword}
            onChange={changeHandler}
            className="mb-10 w-64 border-[#304ffe] border border-dashed text-gray-700 rounded p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
        </div>
        {createUserMutation.isLoading ? (
          <Loader />
        ) : (
          <button
            className=" bg-[#304ffe] text-white text-lg font-medium rounded-md transition-all duration-100 cursor-pointer py-2 px-4 hover:transform hover:scale-105"
            type="submit"
            onClick={clickHandler}
          >
            ثبت نام
          </button>
        )}
      </form>
      <div className="flex">
        <Typography
          headerSize="p"
          text="حساب کاربری دارید؟"
          className="text-gray-500 text-lg"
        />
        <Link
          href={"/signin"}
          className="text-blue-700 mr-2 border-b-2 border-gray-500"
        >
          ورود
        </Link>
      </div>
    </div>
  );
};
