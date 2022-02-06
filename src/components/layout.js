import React from "react";
import { Helmet } from "react-helmet"
import Footer from "./footer.js";
import Header from "./header.js";

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>{pageTitle}</title>
            </Helmet>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    )
};
  
export default Layout;