module.exports = {
  siteMetadata: {
    siteUrl: "https://activities.tjhsst.edu/bioinformatics",
    titleTemplate: "%s | TJ Bioinformatics Society",
    description: `The official website of TJHSST Bioinformatics Society, where students explore the cutting-edge intersection of biology, math, and computer science.`,
    author: `@sritanmotati`,
    title: "TJ Bioinformatics Society",
    email: "tjbioinformatics@gmail.com",
    keywords: "tjhsst, thomas jefferson high school for science and technology, bioinformatics, society, tj bioinformatics society, tj bioinfo soc, tjhsst bioinformatics, tjhsst bioinformatics club",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-background-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team",
        path: "./src/images/team/",
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TJ Bioinformatics Society`,
        short_name: `tj bioinfo soc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3B82F6`,
        display: `minimal-ui`,
        icon: `./src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
