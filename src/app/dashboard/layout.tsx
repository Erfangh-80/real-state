import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { DashboardSidebar } from "src/components";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

const DashboardLayout: NextPage<Props> = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default DashboardLayout;
