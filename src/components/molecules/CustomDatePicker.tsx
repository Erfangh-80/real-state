import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { Typography } from "../atoms";
import { Dispatch, FC, SetStateAction } from "react";
import { IProfile } from "src/types/types";

interface IPrpsCalendar {
  profileData: Omit<IProfile, "userId">;
  setProfileData: Dispatch<SetStateAction<Omit<IProfile, "userId">>>;
}

export const CustomDatePicker: FC<IPrpsCalendar> = ({
  profileData,
  setProfileData,
}) => {
  const changeHandler = (date: any /* */) => {
    const constructedDate = new Date(date);
    setProfileData({ ...profileData, constructionDate: constructedDate });
  };
  return (
    <div className="mb-14">
      <Typography headerSize="p" className="mb-1" text="تاریخ ساخت" />
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        calendarPosition="bottom-right"
        onChange={changeHandler}
        inputClass="w-28 border border-[#304ffe] border-dashed text-gray-700 rounded p-2 text-lg h-8 ml-2 text-center"
      />
    </div>
  );
};
