"use client";

import { Typography } from "../atoms";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-5 mb-7 rounded-md bg-[#304ffe] text-white">
      <div className="w-[70%] text-justify ml-3">
        <Typography
          headerSize="h3"
          className="font-semibold text-xs mb-3"
          text={"سامانه خرید و اجاره ملک"}
        />
        <Typography
          headerSize="p"
          text={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.`}
        />
      </div>
      <div>
        <ul className="list-disc">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};
