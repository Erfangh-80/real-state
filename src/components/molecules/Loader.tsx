"use client";

import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      height="45"
      color="#304ffe"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      visible={true}
    />
  );
};
