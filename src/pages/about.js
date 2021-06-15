import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About CassyPost" />
      <div id="about">
        <h2>About Us</h2>
        <p>
          <strong>CassyPost Media</strong> is an independent digital media outlet covering a wide range of news on emering trends, 
          blockchain technology, crypto assets. Its focus is educate, inform and also features the brightest mind in the 
          tech community to give an insight on the current state and direction of the latest technology.
        </p>

        {/* <div className="about-icons">
          <span role="img" aria-label="Laptop.">
            💻
          </span>
          <span role="img" aria-label="Rocket.">
            🚀
          </span>
        </div> */}

        <h3>Thanks for visiting!!</h3>
      </div>
    </Layout>
  )
}
export default AboutPage
