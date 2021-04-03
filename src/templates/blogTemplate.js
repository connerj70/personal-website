import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import BlogLayout from "../components/blog/blog-layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

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
    <BlogLayout categories={data.allMarkdownRemark.group}>
      <SEO description={frontmatter.description} title={frontmatter.title}/>
      <div className="flex justify-center flex-col m-auto max-w-3xl mt-8">
        <div className="blog-post">
          <GatsbyImage
            alt={frontmatter.title}
            image={markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData} />
          <h1 className="text-5xl font-bold mt-2">{frontmatter.title}</h1>
          <h2 className="italic">{frontmatter.date}</h2>
          <h2 className="text-xs italic mt-2">Time To Read: <span className="text-c-orange font-bold">{markdownRemark.timeToRead} Minutes</span></h2>
          <h2 className="text-xs italic">Author: <span className="text-c-orange font-bold">Conner Jensen</span></h2>
          <div
            className="blog-post-content mt-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <DiscussionEmbed {...disqusConfig} shortname=""/>
        </div>
      </div>
    </BlogLayout>
  );
}

export const pageQuery = graphql`query ($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      description
      title
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
    timeToRead
    wordCount {
      words
    }
  }
  allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
}
`
