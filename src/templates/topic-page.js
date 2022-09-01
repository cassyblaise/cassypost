import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Card from "../components/card"
import CardSmall from "../components/cardSmall"
import Layout from "../components/layout"
import MailChimpForm from "../components/mailchimpform"


const TopicPageTemplate = ({ pageContext}) => {
  const data = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          author
          description
          tags
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
        timeToRead
      }
    }
  }
  allTopicsJson {
    edges {
      node {
        name
        slug
        image {
          childImageSharp {
            gatsbyImageData(width: 240, height: 240, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`)

  const { topic } = pageContext
  const { edges } = data.allMarkdownRemark

  const edgesWithTopic = edges.filter(({ node }) => {
    return node.frontmatter.tags.includes(topic)
  })

  const topicInfo = data.allTopicsJson.edges.filter(({ node }) => {
    return node.slug === topic.toLowerCase().replace(" ", "-")
  })[0].node

  return (
    <Layout pageType="Topic">
      <div className="topic-page-header">
        <h1>{topic}</h1>
        <GatsbyImage
          image={topicInfo.image.childImageSharp.gatsbyImageData}
          className="topic-page-image"
          alt={topicInfo.name} />{" "}
      </div>
      <div className="flex-layout">
        <div className="cards">
          <h2 id="articles-title">Articles</h2>
          {edgesWithTopic.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Card
                key={index}
                title={title}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                description={node.frontmatter.description}
                excerpt={node.excerpt}
                frontmatter={node.frontmatter}
              />
            )
          })}
        </div>
        <div className="sidebar">
          <h2 className="sidebar-header">Join Our Newsletter</h2>
          <MailChimpForm />
          {/* <div className="sidebar-emails">
            <h2>Mailing list here</h2>
            <p>Subscribe to my list for lots of great reasons</p>
            <form>
              <input type="text" id="email" aria-label="email" />
              <input
                type="submit"
                value="Subscribe"
                aria-label="subscribe"
              />{" "}
            </form>

            <span>Weekly updates, unsubscribe at any time</span>
          </div> */}
          <h2 className="sidebar-header">Popular Articles</h2>
          <div className="sidebar-popular">
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
              if (index > 2 && index < 5) {
                return (
                  <CardSmall
                    key={index}
                    slug={node.fields.slug}
                    frontmatter={node.frontmatter}
                  />
                )
              } else return null
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TopicPageTemplate
