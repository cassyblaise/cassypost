import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-small-styles">
      <Link to={slug}>
        <GatsbyImage
          image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={frontmatter.title}
          className="card-small-image"
        />
      </Link>

      <figcaption>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
        <Link to={`/${frontmatter.category.toLowerCase().replace(' ', '-')}`}>
          <span className="card-small-topic">{frontmatter.category}</span>
        </Link>
      </figcaption>
    </figure>
  )
}
export default Card
