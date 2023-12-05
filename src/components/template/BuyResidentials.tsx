"use client";

import { IProfile } from "src/types/types";
import { Typography } from "../atoms";
import { FC } from "react";
import { Card } from "../organisms";

interface IProps {
  data: Omit<IProfile, "userId">[];
}

export const BuyResidentials: FC<IProps> = ({ data }) => {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-lg bg-blue-400 bg-opacity-25 ml-10 w-56"></div>
      <div className="w-full flex flex-wrap justify-between">
        {data?.length ? null : (
          <Typography
            headerSize="p"
            className="bg-red-500 bg-opacity-70 text-red-700 text-lg py-2 px-4 rounded-lg h-12 w-full"
            text={"هیچ آگهی ثبت نشده است"}
          />
        )}
        {data?.map((profile: Omit<IProfile, "userId">) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
};
