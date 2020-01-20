// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matthew Portfolio',
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: {
      // Path is the location of the markdown content we will be consuming in our collections.
      path: "markdown/work/**/*.md",
      // Typename is the GrapqhQL type and template name. A .vue file in src/tempaltes MUST MATCH (===) the typeName to have a template for it
      typeName: "Work",
      route: "/work/:title"
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
  }]
}