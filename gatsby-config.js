require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'job-interview-presentation',
    description: 'A presentation about job interviews and how to succeed at \'em',
    author: 'Joris van de Donk',
  },
  plugins: [
    'gatsby-theme-mdx-deck'
  ],
  pathPrefix: "/job-interview-presentation",
}