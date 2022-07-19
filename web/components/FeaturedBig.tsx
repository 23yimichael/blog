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
    <div className="w-[800px]">
      <img className="w-[800px] h-[480px] rounded-xl" src={data.img} />
      <div className="font-poppins font-semibold text-gray mt-6">
        {data.genre}
      </div>
      <div className="font-poppins font-semibold text-2xl mt-2">
        {data.title}
      </div>
      <div className="font-poppins text-xs mt-3">{data.desc}</div>
    </div>
  );
};

export default FeaturedBig;
