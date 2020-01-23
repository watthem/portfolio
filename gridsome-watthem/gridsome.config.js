// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')

module.exports = {

  siteName: 'Matthew Portfolio',
  siteUrl: "https://www.matthewhendricks.net",
  description: "Matthew Hendricks portfolio",
  plugins: [{
      use: "@gridsome/source-filesystem",
      options: {
        // Path is the location of the markdown content we will be consuming in our collections.
        path: "markdown/work/**/*.md",
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
    }, {
      use: "@gridsome/source-filesystem",
      options: {
        // Path is the location of the markdown content we will be consuming in our collections.
        path: "markdown/creative/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Creative",
        route: "/creative/:title"
      }
    }, {
      use: "@gridsome/source-filesystem",
      options: {
        // Path is the location of the markdown content we will be consuming in our collections.
        path: "markdown/demos/**/*.md",
        // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
        typeName: "Demo",
        route: "/demo/:title"
      }
    }, {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'http://localhost:2369',
        contentKey: 'e48cd8bcb07a3dd1dd54457318',
        version: 'v3' // default
      }
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
    }
  ]
}