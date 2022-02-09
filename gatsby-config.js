module.exports = {
  siteMetadata: {
      title: `The Singing Mermaid`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
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
    }    
  ]
};