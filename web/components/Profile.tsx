import React from "react";

interface Props {
  data: {
    name: string;
    bio: string;
  };
}

const Profile: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-[300px]">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        className="h-[150px] w-[150px] rounded-full"
      />
      <div className="text-center font-poppins font-semibold mt-8">
        {data.name}
      </div>
      <div className="text-center font-poppins mt-4">{data.bio}</div>
    </div>
  );
};

export default Profile;
