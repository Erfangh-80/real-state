"use client";

import { FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input, TextArea, Typography } from "../atoms";
import { p2e } from "../../utils";
import { IProfile } from "src/types/types";

interface IPropsTextInput {
  title: string;
  name: string;
  profileData: IProfile;
  setProfileData: Dispatch<SetStateAction<IProfile>>;
  textarea?: boolean;
}

export const TextInput: FC<IPropsTextInput> = ({
  name,
  profileData,
  setProfileData,
  textarea,
  title,
}) => {
  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className="w-full">
      <Typography headerSize="p" text={title} className="text-lg mb-1" />
      {textarea ? (
        <TextArea
          name={name}
          value={profileData[name as keyof IProfile]}
          onChange={changeHandler}
          className="mb-10 border-[2.5px] border-[#304ffe] border-dashed w-full text-gray-700 rounded-md p-2 text-lg h-[140px] resize-none focus:border-solid focus:outline-none"
        />
      ) : (
        <Input
          name={name}
          type="text"
          value={profileData[name as keyof IProfile] ?? ""}
          onChange={changeHandler}
          className="mb-10 border-[2.5px] border-[#304ffe] border-dashed w-full text-gray-700 rounded-md p-2 text-lg h-10 focus:border-solid focus:outline-none"
        />
      )}
    </div>
  );
};
