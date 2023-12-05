"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Button, Input, Typography } from "../atoms";

interface IPropsTextList {
  title: string;
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
  type: string;
}

export const TextList: FC<IPropsTextList> = ({
  profileData,
  setProfileData,
  title,
  type,
}) => {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const deleteHandler = (index: number) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-10">
      <Typography headerSize="p" text={title} className="text-lg mb-1" />
      {profileData[type].map((item: string, index: number) => (
        <div key={index} className="flex my-2 gap-3 items-center">
          <Input
            name=""
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              changeHandler(event, index)
            }
            value={item}
            type="text"
            className="w-[300px] border border-dashed border-[#304ffe] text-gray-700 rounded p-2 text-lg h-7 mb-2 focus:border-solid focus:outline-none"
          />
          <Button
            className="flex m-0 py-1 px-2 leading-4 transition-all  ease-in delay-100 rounded text-lg bg-white text-red-700 border border-solid border-red-700 hover:scale-105"
            text="حذف"
            onClick={() => deleteHandler(index)}
          >
            <AiOutlineDelete className="mb-1 ml-2 text-lg" />
          </Button>
        </div>
      ))}
      <Button
        onClick={addHandler}
        text="افزودن"
        className="flex mt-5 py-1 px-2 transition-all ease-in delay-100 rounded text-lg bg-[#304ffe] text-white border-none hover:scale-105"
      >
        <MdOutlineLibraryAdd className="mb-1 ml-2 text-lg" />
      </Button>
    </div>
  );
};
