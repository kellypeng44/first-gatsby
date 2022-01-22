import React from "react";
import Footer from "./footer.js";

const Layout = ({ children }) => {
    return (
        <div>
            {/* Logo Icon (name) */}
            {/* tabs */}
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    )
};
  
export default Layout;