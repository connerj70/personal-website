import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="flex justify-center flex-col m-auto max-w-3xl">
        <div className="blog-post">
          <Img
            fluid={
              markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
            }
          />
          <h1 className="text-4xl font-bold mt-2">{frontmatter.title}</h1>
          <h2 className="italic">{frontmatter.date}</h2>
          <div
            className="blog-post-content mt-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
