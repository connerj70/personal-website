import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

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

const BedsImage = () => {
    const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/beds.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)

    return (
      <a href="https://makeyourbed.io">
          <GatsbyImage
            alt="Make your bed io screenshot"
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            className="max-w-md" />
      </a>
    );
}

export default BedsImage
