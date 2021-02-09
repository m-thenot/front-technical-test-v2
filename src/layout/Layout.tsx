import Container from "@material-ui/core/Container";

import React, { Fragment } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: NonNullable<React.ReactNode>;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
