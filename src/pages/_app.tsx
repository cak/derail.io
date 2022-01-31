import "../styles/globals.css";
import type { AppProps } from "next/app";

const Derail = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default Derail;
