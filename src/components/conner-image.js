import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ConnerImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/portraitme.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, height: 300, layout: FIXED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      alt="Conner Jensen's Portrait"
      image={data.file.childImageSharp.gatsbyImageData}
      className="rounded-full"
    />
  )
}

export default ConnerImage
