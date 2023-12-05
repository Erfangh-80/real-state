import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";

import { Signin } from "src/components";
import { redirect } from "next/navigation";

const page: NextPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <Signin />;
};

export default page;
