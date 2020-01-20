// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matthew Portfolio',
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: [{
      // Path is the location of the markdown content we will be consuming in our posts
      path: "markdown/creative/**/*.md",
      // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
      typeName: "Work",
      route: "/work/:title"
    }, {
      path: "markdown/content/**/*.md",
      typeName: "Creative",
      route: "/content/:title"
    }, {
      path: "markdown/content/**/*.md",
      typeName: "Creative",
      route: "/content/:title"
    }]
  }, {
    use: 'gridsome-plugin-tailwindcss',
  }]
}