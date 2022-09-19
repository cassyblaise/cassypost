import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About CassyPost" />
      <div id="about">
        <h2>About Us</h2>
        <p>
          <strong>merklepal Media</strong> is an independent digital media
          outlet covering a wide range of news on emerging trends, blockchain
          technology, crypto assets. Its focus is educate, inform and also
          features the brightest mind in the tech community to give an insight
          on the current state and direction of the latest technology.
          Defi talks, We translate.
        </p>


        <h2>Contact details</h2>
          <p>Editorial questions, concerns or comments can be 
            addressed to: editor@merklepal.com
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
