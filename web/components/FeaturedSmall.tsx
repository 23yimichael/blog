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
    <div className={`${margin ? "mt-12" : null} w-[350px]`}>
      <img className="w-[350px] h-[200px] rounded-xl" src={data.img} />
      <div className="font-poppins font-semibold text-gray mt-4">
        {data.genre}
      </div>
      <div className="font-poppins font-semibold text-2xl mt-2">
        {data.title}
      </div>
      <div className="font-poppins text-xs mt-3">{data.desc}</div>
    </div>
  );
};

export default FeaturedSmall;
