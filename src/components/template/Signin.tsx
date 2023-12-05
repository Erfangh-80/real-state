"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

import { Button, Input, Typography } from "../atoms";
import { TSignin } from "src/types/types";

export const Signin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [signinData, setSigninData] = useState<TSignin>({
    email: "",
    password: "",
  });

  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    setSigninData({ ...signinData, [event.target.name]: event.target.value });
  };

  const clickHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email: signinData.email,
      password: signinData.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <Typography
        headerSize="h4"
        text="فرم ورود"
        className="text-[#304ffe] font-semibold text-4xl mb-5"
      />
      <form
        onSubmit={clickHandler}
        className="flex flex-col max-w-2xl shadow-[#304ffe4a 0px 4px 15px] border-2 border-[#304ffe] p-10 rounded-xl mb-5 "
      >
        <div className="flex flex-col">
          <label className="text-[#304ffe] mb-3 font-light">ایمیل :</label>
          <Input
            type="text"
            name="email"
            value={signinData.email}
            onChange={changeHandler}
            className="mb-10 w-64 border-blue-700 border border-dashed text-gray-700 rounded p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#304ffe] mb-3 font-light">رمز عبور :</label>
          <Input
            type="password"
            name="password"
            value={signinData.password}
            onChange={changeHandler}
            className="mb-10 w-64 border-blue-700 border border-dashed text-gray-700 rounded p-3 text-base h-10 focus:border-solid focus:outline-none"
          />
        </div>

        {loading ? (
          <ThreeDots
            height="80"
            color="#304ffe"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
            visible={true}
          />
        ) : (
          <Button
            className=" bg-[#304ffe] text-white text-lg font-medium rounded-md transition-all duration-100 cursor-pointer py-2 px-4 hover:transform hover:scale-105"
            text="ورود"
            type="submit"
          />
        )}
      </form>
      <div className="flex">
        <Typography
          headerSize="p"
          text="حساب کاربری ندارید؟"
          className="text-gray-500 text-lg"
        />
        <Link
          href="/signup"
          className="text-blue-700 mr-2 border-b-2 border-gray-500"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
};
