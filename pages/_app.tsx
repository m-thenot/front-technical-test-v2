import "../styles/globals.css";
import "instantsearch.css/themes/algolia.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProps } from "next/app";

import { FC, Fragment } from "react";
import { wrapper } from "../src/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default wrapper.withRedux(MyApp);
