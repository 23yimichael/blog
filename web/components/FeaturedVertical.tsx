import React from "react";

interface Props {
  data: {
    img: string;
    date: string;
    title: string;
    desc: string;
  };
}

const FeaturedVertical: React.FC<Props> = ({ data }) => {
  return (
    <div className={`2xl:w-[350px] xl:w-[300px] lg:w-[250px]`}>
      <img
        className="2xl:w-[350px] 2xl:h-[200px] xl:w-[250px] xl:h-[140px] lg:w-[150px] lg:h-[85px] rounded-xl"
        src={data.img}
      />
      <div className="font-poppins font-semibold 2xl:text-xl xl:text-sm lg:text-xs text-gray mt-4">
        {data.date}
      </div>
      <div className="font-poppins font-semibold 2xl:text-2xl xl:text-lg lg:text-base mt-3">
        {data.title}
      </div>
      <div className="font-poppins 2xl:text-lg xl:text-sm lg:text-xs mt-2">
        {data.desc}
      </div>
    </div>
  );
};

export default FeaturedVertical;
