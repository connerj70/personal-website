import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  console.log(data)
  let blogPosts = data.allMarkdownRemark.edges.map(post => {
    return (
      <Link to={post.node.frontmatter.path}>
        <div className="border shadow rounded border-black mt-4 p-8 max-w-2xl">
          <Img
            fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <h2 className="text-2xl font-bold">{post.node.frontmatter.title}</h2>
          <span className="italic">{post.node.frontmatter.date}</span>
        </div>
      </Link>
    )
  })
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="text-4xl">Blogs</h1>
      {blogPosts}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
