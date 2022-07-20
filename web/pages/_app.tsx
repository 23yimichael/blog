import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
