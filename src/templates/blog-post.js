import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Card from '../components/card'
import ShareButtons from '../components/sharebuttons'
import MailChimpForm from '../components/mailchimpform'


class ArticleTemplate extends Component {
  render() {
    const { data, pageContext } = this.props
    const { topic } = pageContext
    const post = data.markdownRemark
    const title = `Read ${this.props.data.markdownRemark.frontmatter.title} `
    const url = this.props.location.href
    const twitterHandle = "cassyjnr"
    const tags = this.props.data.markdownRemark.frontmatter.tags

    const similarPosts = data.allMarkdownRemark.edges
      .filter(item => {
        return (
          item.node.frontmatter.category === topic &&
          item.node.frontmatter.title !== post.frontmatter.title
        )
      })
      .filter((item, index) => {
        return index < 2
      })

    return (
      <Layout pageType="Post">
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div id="article">
          <header>
            <h1 className="article-title">{post.frontmatter.title}</h1>
            <p className="article-date">{post.frontmatter.date}</p>
            <p className="article-date">By {post.frontmatter.author}</p>
            <p className="article-date">{post.timeToRead} Min read</p>
            <div className="article-tags">
              {post.frontmatter.tags.map(tag => (
                <Link
                  className="tag"
                  key={tag}
                  to={`/${tag
                    .split(' ')
                    .join('-')
                    .split('/')
                    .join('-')
                    .toLowerCase()}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <GatsbyImage
              image={
                post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              }
              alt={post.frontmatter.title}
              className="article-image"
            />
          </header>

          <div
            className="article-markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div>
            <ShareButtons
              title={title}
              url={url}
              twitterHandle={twitterHandle}
              tags={tags}
            />
          </div>
          <hr />
          <MailChimpForm />
          <div>
            {similarPosts.length > 0 && (
              <h3 id="similar-posts-header">
                Other {this.props.pageContext.topic} news
              </h3>
            )}

            <section>
              {similarPosts.map(({ node }) => {
                return (
                  <Card
                    key={node.fields.slug}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                    description={node.frontmatter.description}
                    excerpt={node.excerpt}
                    frontmatter={node.frontmatter}
                  />
                )
              })}
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate
export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateModified(formatString: "MMMM DD, YYYY")
        author
        description
        tags
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
      timeToRead
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 400, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`
