module.exports = {
  siteMetadata: {
    title: 'A blog by Shaun',
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
        extensions: [ '', '.js', '.jsx','css' ],
      }
    },
    'gatsby-transformer-remark'
  ],
}
