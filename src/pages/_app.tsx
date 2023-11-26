import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
