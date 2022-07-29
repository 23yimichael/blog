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

const FeaturedVertical: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/view/${data.id}`)}
      className="mt-2 hover:cursor-pointer duration-300 hover:bg-lightgray p-4 rounded-xl"
    >
      <div className={`2xl:w-[350px] xl:w-[225px] lg:w-[150px]`}>
        <img
          className="2xl:w-[350px] xl:w-[225px] lg:w-[150px] aspect-[5/3] rounded-xl"
          src={data.img}
        />
        <div className="font-poppins font-semibold 2xl:text-xl xl:text-sm lg:text-xs text-gray mt-4">
          {data.date}
        </div>
        <div className="font-poppins font-semibold 2xl:text-2xl xl:text-lg lg:text-base mt-3">
          {data.title}
        </div>
        <div
          className="font-poppins 2xl:text-lg xl:text-base lg:text-sm mt-3"
          dangerouslySetInnerHTML={{
            __html: data.text.substring(0, 200) + "...",
          }}
        />
      </div>
    </div>
  );
};

export default FeaturedVertical;
