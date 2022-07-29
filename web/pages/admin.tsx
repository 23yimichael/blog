import { motion } from "framer-motion";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useLoginMutation } from "../generated/graphql";
import { variants } from "../utils/constants";
import Context from "../utils/context";
import { createUrqlClient } from "../utils/createUrqlClient";

const Admin = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);

  const handleSubmit = async (e: any) => {
    const response = await login({ username, password });
    if (!response.data?.login.error) {
      await localStorage.setItem(
        "user",
        JSON.stringify(response.data!.login.user!.id)
      );
      setUser(response.data!.login.user!.id);
      router.push("/");
    }
    e.preventDefault();
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, type: "easeInOut" }}
      style={{ position: "relative" }}
      variants={variants}
      className="min-h-screen"
    >
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col space-y-4 w-96">
          <div className="font-poppins font-semibold text-gray text-sm">
            Username
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-b-[1px] border-lightgray p-4"
            placeholder="Username"
          />
          <div className="font-poppins font-semibold text-gray text-sm">
            Password
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border-b-[1px] border-lightgray p-4"
            placeholder="Password"
          />
          <div
            onClick={handleSubmit}
            className="duration-500 bg-lightgray hover:bg-[#DDDDDD] text-center p-4 font-poppins font-semibold text-gray"
          >
            Login
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default withUrqlClient(createUrqlClient)(Admin);
