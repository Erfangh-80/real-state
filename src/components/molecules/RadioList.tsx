"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Typography } from "../atoms";
import { IProfile } from "src/types/types";

interface IProps {
  profileData: Omit<IProfile, "userId">;
  setProfileData: Dispatch<SetStateAction<Omit<IProfile, "userId">>>;
}

export const RadioList: FC<IProps> = ({ profileData, setProfileData }) => {
  const { category } = profileData;
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="mb-10">
      <Typography headerSize="p" text={"دسته بندی"} className="text-xl mb-1" />
      <div className="flex">
        <div className="flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-8 w-20 p-1 rounded-md cursor-pointer">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-8 w-20 p-1 rounded-md cursor-pointer">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-8 w-20 p-1 rounded-md cursor-pointer">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-8 w-20 p-1 rounded-md cursor-pointer">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};
