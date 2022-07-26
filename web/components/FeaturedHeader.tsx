import React from "react";

interface Props {
  text: string;
}

const FeaturedHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl">
        {text}
      </div>
      <div className="font-poppins font-medium 2xl:text-2xl xl:text-lg lg:text-sm ml-auto">
        View All →
      </div>
    </div>
  );
};

export default FeaturedHeader;
