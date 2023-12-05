import { NextPage } from "next";
import { Dashboard } from "src/components";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";

const page: NextPage = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User?.findOne({ email: session?.user?.email });

  return <Dashboard createdAt={user?.createdAt} />;
};

export default page;
