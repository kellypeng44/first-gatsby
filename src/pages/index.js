import * as React from "react";

// components
import Layout from "../components/layout";
import Hero from "../components/hero";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      {/* Hero section */}
      <Hero />
    </Layout>
  )
}

export default IndexPage;
