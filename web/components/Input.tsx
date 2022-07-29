import { StringSplitAttrs } from "@tensorflow/tfjs";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  type: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: string;
}

const Input: React.FC<Props> = ({ label, type, value, setValue, error }) => {
  return (
    <>
      <div className="font-poppins font-semibold text-gray text-sm">
        {label}
      </div>
      {type === "textfield" ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-b-[1px] border-lightgray p-4 h-96"
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-b-[1px] border-lightgray p-4"
          placeholder={label}
        />
      )}

      <div className="font-poppins font-semibold text-red-500 text-sm">
        {error}
      </div>
    </>
  );
};

export default Input;
