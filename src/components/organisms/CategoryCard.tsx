import { FC } from "react";
import Image from "next/image";

import { Typography } from "../atoms";

interface IPropsCategoryCard {
  title: string;
  name: string;
}

export const CategoryCard: FC<IPropsCategoryCard> = ({ name, title }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden p-10 transition-transform duration-100 hover:rotate-[-5deg] m-10">
      <Image
        className="rounded-lg"
        src={`/images/${name}.png`}
        alt={title}
        width={240}
        height={144}
        priority={true}
      />
      <Typography
        headerSize="p"
        className="text-xl font-normal text-blue-500 text-center my-2"
        text={title}
      />
    </div>
  );
};
