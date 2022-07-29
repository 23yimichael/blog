import { motion } from "framer-motion";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import { useLoginMutation } from "../generated/graphql";
import { variants } from "../utils/constants";
import Context from "../utils/context";
import { createUrqlClient } from "../utils/createUrqlClient";

const Admin = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
    } else {
      if (response.data.login.error.field === "Username") {
        setUsernameError(response.data.login.error.message);
      } else {
        setPasswordError(response.data.login.error.message);
      }
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
        <Form>
          <Input
            error={usernameError}
            label="Username"
            setValue={setUsername}
            type="text"
            value={username}
          />
          <Input
            error={passwordError}
            label="Password"
            setValue={setPassword}
            type="password"
            value={password}
          />
          <div
            onClick={handleSubmit}
            className="duration-500 bg-lightgray hover:bg-[#DDDDDD] text-center p-4 font-poppins font-semibold text-gray"
          >
            Login
          </div>
        </Form>
      </div>
    </motion.div>
  );
};

export default withUrqlClient(createUrqlClient)(Admin);
