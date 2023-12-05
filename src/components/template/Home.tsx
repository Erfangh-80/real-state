import { cities, services } from "src/constants";
import { Typography } from "../atoms";
import { FiCircle } from "react-icons/fi";
import { CategoryCard } from "../organisms";

export const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center rounded-lg p-5 my-24">
        <div className="w-full text-center text-[#304ffe]">
          <Typography
            headerSize="h1"
            className="font-bold text-5xl mb-7"
            text={"سامانه خرید و اجاره ملک"}
          />
          <ul className="list-none flex justify-center flex-wrap">
            {services.map((item: string, index: number) => (
              <li
                key={index}
                className="flex justify-center items-center w-20 m-2 bg-[#bbdefb] py-1 px-2 rounded"
              >
                <FiCircle />
                <span className="font-light mr-1 h-5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap my-12">
        <CategoryCard name="villa" title="خانه ویلایی" />
        <CategoryCard name="apartment" title="آپارتمان" />
        <CategoryCard name="store" title="مغازه" />
        <CategoryCard name="office" title="دفتر" />
      </div>
      <div className="my-24">
        <Typography
          className="font-semibold text-2xl text-center text-blue-500"
          headerSize="h3"
          text={"شهر های  پر بازدید"}
        />
        <ul className="flex justify-between flex-wrap mt-10 list-none">
          {cities.map((item: string, index: number) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-500 text-lg w-60 mx-0 my-2 flex justify-center items-center p-4 rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
