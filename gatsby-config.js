module.exports = {
  siteMetadata: {
    title: `Glassmorphicssm`,
    description: `Customise, and generate CSS for all your glassmorphism needs.`,
    author: `Harsh Singh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `glassmorphicssm`,
        short_name: `glass`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#5291FF`,
        display: `minimal-ui`,
        icon: `src/images/paint.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
