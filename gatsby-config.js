module.exports = {
  pathPrefix: '/kellypeng',
  siteMetadata: {
    siteUrl: "https://kellypeng44.github.io/kellypeng/",
    title: "Kelly Peng",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
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
  ],
};
