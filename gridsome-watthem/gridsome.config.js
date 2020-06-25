// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


var googleOptions = require("./googleDocs.secret");

module.exports = {

  siteName: 'Matthew Portfolio',
  siteUrl: "https://www.matthewhendricks.net",
  description: "Matthew Hendricks portfolio",
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-89279090-1'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // Path is the location of the ../markdown content we will be consuming in our collections.
        path: "../markdown/work/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Work",
        route: "/work/:title",
        refs: {
          tags: {
            typeName: 'Work',
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // creative writing pieces (that are published/distributed)
        path: "../markdown/creative/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Creative",
        route: "/creative/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // all my css/javascript demos go in this bucket
        path: "../markdown/demos/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Demo",
        route: "/demo/:title"
      }
    }, {
      use: "@gridsome/source-filesystem",
      options: {
        // collection of personal updates and article i've written - posts files are written in raw mark down (for now)
        path: "../markdown/posts/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Posts",
        route: "/posts/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // all other site content (i.e., about page, contact, etc).
        path: "../markdown/site/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Site",
        route: ":title"
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {

          '/work/*': {
            changefreq: 'monthly',
            priority: 1
          },
          '/about': {
            changefreq: 'yearly',
            priority: 0.5
          }
        }
      }
    }, {
      use: 'gridsome-source-google-docs',
      options: googleOptions.config
    }
  ]
}