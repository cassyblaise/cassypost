import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-styles">
      <Link to={slug}>
        <GatsbyImage
          image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={frontmatter.title}
          className="card-image"
        />
      </Link>

      <figcaption>
        <Link to={`/${frontmatter.category.toLowerCase().replace(' ', '-')}`}>
          <div className="card-topic">{frontmatter.category}</div>
        </Link>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
      </figcaption>
    </figure>
  )
}
export default Card
