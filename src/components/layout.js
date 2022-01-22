import React from "react";
import Footer from "./footer.js";
import Header from "./header.js";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    )
};
  
export default Layout;