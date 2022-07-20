import { Divider } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

const FeaturedHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center">
      <Divider sx={{ width: "25%" }}>
        <div className="font-poppins font-semibold text-5xl px-4">{text}</div>
      </Divider>
      <div className="font-poppins font-medium text-2xl ml-auto">
        View All →
      </div>
    </div>
  );
};

export default FeaturedHeader;
