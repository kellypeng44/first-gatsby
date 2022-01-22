module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "first gatsby",
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
