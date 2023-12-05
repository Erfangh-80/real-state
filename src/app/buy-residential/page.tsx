import { NextPage } from "next";
import { BuyResidentials } from "src/components";
import { getProfile } from "src/services";

const page: NextPage = async () => {
  // const res = await getProfile();
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  console.log(data.data);

  return <BuyResidentials data={data.data} />;
  // return <div></div>;
};

export default page;
