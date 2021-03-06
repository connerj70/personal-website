import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import BlogLayout from "../components/blog/blog-layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  let blogPosts = data.allMarkdownRemark.edges.map(post => {
    let tags = []
    if (post.node.frontmatter.tags !== null) {
      tags = post.node.frontmatter.tags.map(tag => {
        return (
          <span className="ml-2 bg-blue-400 p-1 text-xs rounded text-white">
            {tag}
          </span>
        )
      })
    }

    return (
      <Link to={post.node.frontmatter.path}>
        <div className="border shadow rounded border-gray-200 mt-4 mb-4 p-8 max-w-3xl hover:shadow-2xl">
          <GatsbyImage
            image={post.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} />
          <h2 className="text-4xl font-bold mt-2">
            {post.node.frontmatter.title}
          </h2>
          <span className="italic text-sm">{post.node.frontmatter.date}</span>
          <span>{tags}</span>
          <p className="mt-2">{post.node.excerpt}</p>{" "}
          <Link to={post.node.frontmatter.path}>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue Reading
            </button>
          </Link>
        </div>
      </Link>
    );
  })
  return (
    <BlogLayout categories={data.allMarkdownRemark.group}>
      <SEO title="Blog" />
      <div>{blogPosts}</div>
    </BlogLayout>
  )
}

export default Blog

export const query = graphql`{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          path
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            }
          }
        }
        excerpt
      }
    }
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
}
`
