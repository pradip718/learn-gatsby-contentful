module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `t78s8urlh8z8`,
        accessToken: `W36q1sGewsMdAVef_T7utjY_lmMb-3UnUI2VZ2w7fT4`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
};
