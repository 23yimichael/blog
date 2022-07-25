import React from "react";

interface Props {
  data: {
    img: string;
    genre: string;
    title: string;
    desc: string;
  };
}

const FeaturedBig: React.FC<Props> = ({ data }) => {
  return (
    <div className="lg:w-[400px] xl:w-[600px] 2xl:w-[800px]">
      <img
        className="lg:w-[400px] xl:w-[600px] 2xl:w-[800px] rounded-xl"
        src={data.img}
      />
      <div className="font-poppins font-semibold text-gray lg:text-sm xl:text-md 2xl:text-base mt-6">
        {data.genre}
      </div>
      <div className="font-poppins font-semibold 2xl:text-2xl xl:text-lg mt-2">
        {data.title}
      </div>
      <div className="font-poppins 2xl:text-xs xl:text-[10px] lg:text-[8px] mt-3">
        {data.desc}
      </div>
    </div>
  );
};

export default FeaturedBig;
