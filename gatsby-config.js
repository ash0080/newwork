require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "newwork",
    siteUrl: process.env.GATSBY_SITE_URL,
    repo: 'ash0080/newwork'
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-preact',
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-open-graph-images`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "NEWWORK",
        short_name: "NEWWORK",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    // `gatsby-plugin-subfont`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    // options: {
    //   plugins: [
    //     {
    //       resolve: `gatsby-remark-images-contentful`,
    //       options: {
    //         // It's important to specify the maxWidth (in pixels) of
    //         // the content container as this plugin uses this as the
    //         // base for generating different widths of each image.
    //         maxWidth: 590,
    //       },
    //     },
    //   ],
    // },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
