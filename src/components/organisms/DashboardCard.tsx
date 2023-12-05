"use client";

import { FC } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { IProfile } from "src/types/types";
import { Card } from "./Card";
import { useRouter } from "next/navigation";
import { useCustomMutation } from "src/hooks";

interface IPropsDashboardCard {
  data: IProfile;
}

export const DashboardCard: FC<IPropsDashboardCard> = (props) => {
  const { title, price, category, location } = props?.data;

  const router = useRouter();
  const { deleteProfileMutation } = useCustomMutation();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${props.data._id}`);
  };
  const deleteHandler = async () => {
    await deleteProfileMutation.mutateAsync(props.data._id!, {
      onSuccess(data) {
        console.log(data.data.message);
        router.refresh();
      },
    });
  };

  return (
    <div className="flex border-2 border-solid border-[#304ffe58] rounded-2xl mb-5">
      <Card data={{ category, location, price, title }} />
      <div className="flex items-end justify-between gap-3 p-2 w-full">
        <button
          onClick={editHandler}
          className="flex justify-center items-center w-1/2 bg-white cursor-pointer h-10 rounded-lg text-sm border border-solid border-green-600 text-green-600"
        >
          ویرایش
          <FiEdit />
        </button>
        <button
          onClick={deleteHandler}
          className="flex justify-center items-center w-1/2 bg-white cursor-pointer h-10 rounded-lg text-sm border border-solid border-red-600 text-red-600"
        >
          حذف
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};
