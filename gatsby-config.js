module.exports = {
  pathPrefix: '/kellypeng',
  siteMetadata: {
    title: "Kelly Peng",
    siteUrl: "https://kellypeng44.github.io/kellypeng/",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla\:700`,
          `Work Sans\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
  ],
};
