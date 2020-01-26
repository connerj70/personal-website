import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlogLayout from "../components/blog/blog-layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: frontmatter.title },
  }
  return (
    <BlogLayout>
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
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </div>
    </BlogLayout>
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
