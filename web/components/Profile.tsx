import React from "react";

interface Props {
  key: number;
  data: {
    name: string;
    bio: string;
    pfp: string;
  };
}

const Profile: React.FC<Props> = ({ key, data }) => {
  return (
    <div className="flex flex-col items-center w-[300px]">
      <img src={data.pfp} className="w-[150px] h-[150px] rounded-full" />

      <div className="text-center font-poppins font-semibold mt-8">
        {data.name}
      </div>
      <div className="text-center font-poppins mt-4">{data.bio}</div>
    </div>
  );
};

export default Profile;
