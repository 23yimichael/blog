import React from "react";

interface Props {
  margin?: boolean;
  data: {
    img: string;
    genre: string;
    title: string;
    desc: string;
  };
}

const FeaturedSmall: React.FC<Props> = ({ margin, data }) => {
  return (
    <div
      className={`${
        margin ? "mt-2" : null
      } hover:cursor-pointer duration-300 hover:bg-[#F2F2F2] p-4 rounded-xl`}
    >
      <div
        className={`
        2xl:w-[350px] lg:w-[250px] xl:w-[300px]`}
      >
        <img
          className="2xl:w-[350px] lg:w-[250px] xl:w-[300px] aspect-[5/3] rounded-xl"
          src={data.img}
        />
        <div className="font-poppins font-semibold text-gray 2xl:text-base lg:text-sm xl:text-md mt-6">
          {data.genre}
        </div>
        <div className="font-poppins font-semibold 2xl:text-2xl xl:text-lg mt-2">
          {data.title}
        </div>
        <div className="font-poppins 2xl:text-xs xl:text-[10px] lg:text-[8px] mt-3">
          {data.desc}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSmall;
