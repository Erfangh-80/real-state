import { FC } from "react";
import { Typography } from "../atoms";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Icons } from "src/constants";
import { sp } from "@/utils/replaceNumber";

type TCardData = {
  title: string;
  location: string;
  price: number;
  category: string;
};

interface IPropsCard {
  data: TCardData;
}

export const Card: FC<IPropsCard> = ({ data }) => {
  const iconKey = data.category as keyof typeof Icons;
  return (
    <div className="w-64 border-2 border-solid border-[#304ffe58] rounded-lg p-2 m-2">
      <div className="w-fit text-3xl bg-[#304ffe58] text-[#304ffe] p-1 rounded">
        {Icons[iconKey]}
      </div>
      <div className="flex items-center gap-3">
        <Typography
          headerSize="p"
          className="font-light my-2"
          text={data.title}
        />
      </div>
      <div className="flex items-center gap-3">
        <HiOutlineLocationMarker className="ml-1 text-sm" />
        <Typography
          headerSize="p"
          className="font-light my-2"
          text={data.location}
        />
      </div>
      <div className="flex text-gray-700 text-sm">
        <Typography
          headerSize="span"
          className="text-gray-700 text-sm font-light mt-2"
          text={`${sp(data.price)} تومان`}
        />
      </div>
      <div className="flex items-center justify-between mt-5 text-sm font-light text-blue-700">
        <Link href={"#"} className="">
          مشاهده آگهی
        </Link>
        <BiLeftArrowAlt />
      </div>
    </div>
  );
};
