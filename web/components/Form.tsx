import React from "react";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col space-y-4 w-96">{children}</div>;
};

export default Form;
