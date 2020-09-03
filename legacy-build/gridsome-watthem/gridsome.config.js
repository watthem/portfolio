// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//var googleOptions = require("./googleDocs.secret");

module.exports = {
  siteName: "Matthew Portfolio",
  siteUrl: "https://www.matthewhendricks.net",
  description: "Matthew Hendricks portfolio",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-89279090-1",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // Path is the location of the ../markdown content we will be consuming in our collections.
        path: "../markdown/work/**/*.md",
        typeName: "Work",
        route: "/work/:title",
        refs: {
          tags: {
            typeName: "Work",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // creative writing pieces (that are published/distributed)
        path: "../markdown/creative/**/*.md",
        typeName: "Creative",
        route: "/creative/:title",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // all my css/javascript demos go in this bucket
        path: "../markdown/demos/**/*.md",
        typeName: "Demo",
        route: "/demo/:title",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // collection of personal updates and article i've written - posts files are written in raw mark down (for now)
        path: "../markdown/posts/**/*.md",
        typeName: "Posts",
        route: "/posts/:title",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // all other site content (i.e., about page, contact, etc).
        path: "../markdown/site/**/*.md",
        typeName: "Site",
        route: ":title",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {
          "/work/*": {
            changefreq: "monthly",
            priority: 1,
          },
          "/about": {
            changefreq: "yearly",
            priority: 0.5,
          },
        },
      },
    },
    {
      use: "gridsome-source-google-docs",
      options: {
        foldersIds: ["1Ef7WgdQamP0ho5bbu5Ump4xP98vhtezR"],
        clientId:
          "698742442611-q7jl0ir140qpmlmri3s3auhecgobd774.apps.googleusercontent.com",
        clientSecret: "eH6jKWc1hoeX_2K-NbaNauVv",
        apiKey: "AIzaSyDwvtXoxN2hwyo598-cd2D2OhyelSnFV5w",
      },
    },
  ],
};
