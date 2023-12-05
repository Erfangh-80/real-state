"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button, Typography } from "../atoms";
import {
  CustomDatePicker,
  Loader,
  RadioList,
  TextInput,
  TextList,
} from "../molecules";
import { IProfile } from "src/types/types";
import { useCustomMutation } from "src/hooks";
import { useRouter } from "next/navigation";

export const AddProfilePage = ({ data }: { data?: IProfile }) => {
  const [profileData, setProfileData] = useState<IProfile>({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: 0,
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const router = useRouter();

  useEffect(() => {
    if (data) setProfileData(data);
  }, [data]);

  const { createProfileMutation, updateProfileMutation } = useCustomMutation();

  const editHandler = async () => {
    const response = await updateProfileMutation.mutateAsync(profileData, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.refresh();
      },
    });
  };

  const clickHandler = async () => {
    const response = await createProfileMutation.mutateAsync(profileData, {
      onSuccess: (data) => {
        toast.success(data.data.message);
      },
    });
  };

  return (
    <div className="flex flex-col mb-36">
      <Typography
        headerSize="h3"
        text={data ? "ویرایش آگهی" : "ثبت آگهی"}
        className="text-2xl font-normal mb-9 w-full bg-[#304ffe18] text-[#304ffe] rounded-lg px-4 py-2"
      />
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <div className="flex w-full gap-2">
        <TextInput
          title="شماره تماس"
          name="phone"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title="قیمت(تومان)"
          name="price"
          profileData={profileData}
          setProfileData={setProfileData}
        />
      </div>
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
        title="امکانات رفاهی"
      />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
        title="قوانین"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {createProfileMutation.isLoading || updateProfileMutation.isLoading ? (
        <Loader />
      ) : (
        <Button
          onClick={data ? editHandler : clickHandler}
          text={data ? "ویرایش آگهی" : "ثبت آگهی"}
          className="border-none bg-[#304ffe] hover:bg-[#1919d6] text-white text-sm rounded-md transition ease-in delay-100 cursor-pointer p-2.5"
        />
      )}
    </div>
  );
};
