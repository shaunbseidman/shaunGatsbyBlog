module.exports = {
  siteMetadata: {
    title: 'Shaun Seidman - Full Stack Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-typography`,
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name:'pages',
      }
    },
    'gatsby-transformer-remark'
  ],
}
