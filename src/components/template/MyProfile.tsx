import { FC } from "react";
import { IProfile } from "src/types/types";
import { DashboardCard } from "../organisms";

interface IPropsProfiles {
  profiles: IProfile[];
}

export const MyProfile: FC<IPropsProfiles> = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : <p>آگهی وجود ندارد</p>}
      {profiles.map((item: IProfile) => (
        <DashboardCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};
