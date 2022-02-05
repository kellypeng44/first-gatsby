import * as React from "react";

// components
import Layout from "../components/layout";
import Hero from "../components/hero";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Kelly Peng">
      {/* Hero section */}
      <Hero id='aboutme'/>
    </Layout>
  )
}

export default IndexPage;
