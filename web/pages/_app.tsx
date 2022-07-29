import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Context from "../utils/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Context.Provider>
  );
}

export default MyApp;
