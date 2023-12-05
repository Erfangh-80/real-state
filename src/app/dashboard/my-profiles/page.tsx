import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";
import { MyProfile } from "src/components";

const MyProfiles: NextPage = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user]: any = await User?.aggregate([
    {
      $match: { email: session?.user?.email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  return <MyProfile profiles={user.profiles} />;
};

export default MyProfiles;
