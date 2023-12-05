import { FC } from "react";
import { Typography } from "../atoms";

interface IPropsDashboard {
  createdAt: string;
}

export const Dashboard: FC<IPropsDashboard> = (props) => {
  return (
    <div className="">
      <Typography
        headerSize="h3"
        text={"سلام, 👋"}
        className="text-[#304ffe] font-light text-2xl mb-5"
      />
      <Typography
        headerSize="p"
        text={"آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند"}
        className="text-gray-700"
      />
      <div className="mt-24 flex bg-[#304ffe18]  w-fit py-1 px-2 rounded">
        <Typography
          headerSize="p"
          text={"تاریخ عضویت:"}
          className="m-0 font-light ml-2"
        />
        <Typography
          headerSize="span"
          text={new Date(props.createdAt).toLocaleDateString("fa-IR")}
          className="text-[#304ffe]"
        />
      </div>
    </div>
  );
};
