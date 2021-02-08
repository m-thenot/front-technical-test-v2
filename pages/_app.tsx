import "../styles/globals.css";
import "instantsearch.css/themes/algolia.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fragment } from "react";
import { wrapper } from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
