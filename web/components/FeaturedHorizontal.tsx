import React from "react";

interface Props {
  key: number;
  data: {
    img: string;
    date: string;
    title: string;
    desc: string;
  };
}

const FeaturedHorizontal: React.FC<Props> = ({ key, data }) => {
  return (
    <div className="mt-8 hover:cursor-pointer duration-300 hover:bg-[#F2F2F2] p-4 rounded-xl">
      <div className="flex items-center space-x-16">
        <img
          src={data.img}
          className="2xl:w-[450px] xl:w-[350px] lg:w-[250px] aspect-[5/3] rounded-xl"
        />
        <div>
          <div className="font-poppins font-semibold 2xl:text-xl xl:text-base lg:text-sm text-gray">
            {data.date}
          </div>
          <div className="font-poppins font-semibold 2xl:text-2xl xl:text-xl lg:text-lg mt-4">
            {data.title}
          </div>
          <div className="font-poppins 2xl:text-lg xl:text-base lg:text-sm mt-3">
            {data.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHorizontal;
