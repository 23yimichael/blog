import { useRouter } from "next/router";
import React from "react";

interface Props {
  text: string;
}

const FeaturedHeader: React.FC<Props> = ({ text }) => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <div className="font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl">
        {text}
      </div>
      <div
        onClick={() =>
          router.push(`/${text === "Film/TV" ? "film-tv" : text.toLowerCase()}`)
        }
        className="font-poppins font-medium 2xl:text-2xl xl:text-lg lg:text-sm ml-auto hover:cursor-pointer"
      >
        View All →
      </div>
    </div>
  );
};

export default FeaturedHeader;
