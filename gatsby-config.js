module.exports = {
  siteMetadata: {
    title: 'Shaun Seidman Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name:'pages'
      }
    },
    'gatsby-transformer-remark'
  ],
}
