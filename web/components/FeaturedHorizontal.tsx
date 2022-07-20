import React from "react";

interface Props {
  data: {
    img: string;
    date: string;
    title: string;
    desc: string;
  };
}

const FeaturedHorizontal: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex items-center mt-24 space-x-16">
      <img src={data.img} className="w-[450px] h-[250px] rounded-xl" />
      <div>
        <div className="font-poppins font-semibold text-xl text-gray">
          {data.date}
        </div>
        <div className="font-poppins font-semibold text-2xl mt-4">
          {data.title}
        </div>
        <div className="font-poppins text-lg mt-3">{data.desc}</div>
      </div>
    </div>
  );
};

export default FeaturedHorizontal;
