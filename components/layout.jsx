import { HeaderNav, Footer } from "./index";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <HeaderNav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
