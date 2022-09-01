import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa'
import MailChimpForm from '../components/mailchimpform'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Card from '../components/card'
import CardSmall from '../components/cardSmall'
import Featured from '../components/featured'
import Search from '../components/search'

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      tagsGroup: allMarkdownRemark(limit: 100) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              author
              title
              description
              category
              tags
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 800, layout: CONSTRAINED)
                }
              }
            }
            timeToRead
          }
        }
      }
    }
  `)

  const [queryType, query] = props.location.search.split('=')

  if (queryType === '?s' && query.length > 0) {
    return (
      <Layout>
        <Search
          markdown={data.allMarkdownRemark}
          tagsGroup={data.tagsGroup}
          query={query}
        />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Seo title="Home" slug="/" />
        <Featured markdown={data.allMarkdownRemark} />
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">Articles</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
              return (
                <Card
                  key={index}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  author={node.frontmatter.author}
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
              <form > 
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
            <div>
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
        <Link to="/archive/2" id="archive-link">
          More Articles
          <FaAngleDoubleRight className="icon-right" />
        </Link>{' '}
        <br />
      </Layout>
    )
  }
}

export default IndexPage
