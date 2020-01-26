import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  let blogPosts = data.allMarkdownRemark.edges.map(post => {
    return (
      <Link to={post.node.frontmatter.path}>
        <div className="border shadow rounded border-gray-200 mt-4 p-8 max-w-xl hover:shadow-2xl">
          <Img
            fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <h2 className="text-2xl font-bold">{post.node.frontmatter.title}</h2>
          <span className="italic">{post.node.frontmatter.date}</span>
          <p>{post.node.excerpt}</p>{" "}
          <Link to={post.node.frontmatter.path}>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue Reading
            </button>
          </Link>
        </div>
      </Link>
    )
  })
  return (
    <BlogLayout>
      <SEO title="Blog" />
      <div className="flex-row">
        <div>
          <h1 className="text-4xl text-center text-white p-3 bg-black">
            The #1 Blog For Entrepreneurial Programmers
          </h1>
          {blogPosts}
        </div>
      </div>
    </BlogLayout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
