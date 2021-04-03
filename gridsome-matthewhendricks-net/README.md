# Gridsome

`./gridsome-mscotthendricks` is a static site generator project powered by Gridsome and Vue that is configured to read local Markdown content from the local file system. See the [gridsome.config.js](https://github.com/mscotthendricks/portfolio/blob/master/gridsome-mscotthendricks/gridsome.config.js) for more information.

Content is built from local files in relative `gridsome-mscotthendricks\content` directory.

## Start gridsome in local development mode to make changes to layout.

$ cd gridsome-mscotthendricks
$ gridsome develop

For a static build to the `./gridsome-mscotthendricks/dist` folder

\$ gridsome build

Currently, dist content is copied to another directory and changes are pushed to [mscotthendricks.github.io repository](https://github.com/watthem/mscotthendricks.github.io)

# Gridsome Blog Starter

> A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.

## Features

- Beautiful and simple design.
- Markdown for content.
- Tags support.
- Dark / Light toggle.
- CSS variables, SCSS & BEM for styling.
- 100, 100, 100, 100 score on Google Lighthouse.
- Uses same front-matter fields as Dev.to.

## Demo URL

https://gridsome-starter-blog.netlify.com

## Install

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-site https://github.com/gridsome/gridsome-starter-blog.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌
