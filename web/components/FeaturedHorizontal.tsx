import { useRouter } from "next/router";
import React from "react";

interface Props {
  data: {
    id: number;
    img: string;
    date: string;
    title: string;
    text: string;
  };
}

const FeaturedHorizontal: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/view/${data.id}`)}
      className="mt-8 hover:cursor-pointer duration-300 hover:bg-lightgray p-4 rounded-xl"
    >
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
            {data.text.substring(0, 200) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHorizontal;
