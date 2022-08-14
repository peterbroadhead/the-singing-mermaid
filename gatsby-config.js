module.exports = {
  siteMetadata: {
      title: `The Singing Mermaid`,
      description: `The Singing Mermaid Live. Play by Watershed Theatre`,
      siteUrl: `https://www.thesingingmermaid.co.uk`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-theme-gallery",
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/the-singing-mermaid-icon.png"
        }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        partialMatching: true,
        pagePaths: ['/industry'],
        password: 'Wat3rsh3d'    
      }
    }    
  ]
};