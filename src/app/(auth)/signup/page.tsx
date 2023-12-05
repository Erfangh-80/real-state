import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Signup } from "src/components";

const page: NextPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <Signup />;
};

export default page;
