import Profile from "@/models/Profile";
import { connectDB } from "@/utils/connectDB";
import { AddProfilePage, Typography } from "src/components";

const EditPage = async ({ params: { profileId } }: any) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile)
    return (
      <Typography
        headerSize="h1"
        text={"مشکلی پیش آمده است. لطفا دوباره امتحان کنید..."}
      />
    );

  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default EditPage;
