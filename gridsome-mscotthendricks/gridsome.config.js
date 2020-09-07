// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Matthew Hendricks",
  siteUrl: "https://matthewhendricks.neto",
  siteDescription:
    "Matthew Hendricks portfolio - Specializes in Content Management Systems | Knowledge Worker, Technical Writer, Product Manager with a background in customer support and documentation.",
  templates: {
    Post: "/:title",
    Tag: "/tag/:title",
    Subject: "/subject/:title",
  },

  permalinks: {
    trailingSlash: true,
    slugify: {
      use: "@sindresorhus/slugify",
      options: {},
    },
  },

  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-89279090-1",
      },
    },
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      // Create work examples from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Work",
        path: "content/work/**/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          subjects: {
            typeName: "Subject",
            create: true,
          },
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },

    {
      // Create content from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Content",
        path: "content/*.md",
        remark: {
          plugins: ["remark-attr"],
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
