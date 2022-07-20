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
    <div className={`w-[350px]`}>
      <img className="w-[350px] h-[200px] rounded-xl" src={data.img} />
      <div className="font-poppins font-semibold text-gray mt-4">
        {data.date}
      </div>
      <div className="font-poppins font-semibold text-2xl mt-2">
        {data.title}
      </div>
      <div className="font-poppins text-xs mt-3">{data.desc}</div>
    </div>
  );
};

export default FeaturedVertical;
