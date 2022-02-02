import React from "react";
import Footer from "./footer.js";
import Header from "./header.js";

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    )
};
  
export default Layout;