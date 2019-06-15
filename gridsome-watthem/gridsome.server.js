// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const GhostSource = require("./source-ghost");

module.exports = function (api) {
  api.loadSource(({
    addContentType
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    var options = {
      url: "http://localhost:2500",
      key: "cc9aaf30c15c0f443da764ed3a",
      perPage: 100,
      version: 'v2',
      typeName: 'Ghost',
      settingsName: null,
      routes: {
        post: '/post/:slug',
        tag: '/tag/:slug'
      }
    }

    var ghostSource = new GhostSource(api, options)
  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}