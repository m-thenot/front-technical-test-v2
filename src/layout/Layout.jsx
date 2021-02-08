import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";
import { Fragment } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
