Project folder used to configure and build www.matthewhendricks.net.

`./gridsome-watthem` is a Vue powered static site generator that is configured to read local Markdown content. See the [gridsome.config.js](https://github.com/watthem/portfolio/blob/master/gridsome-watthem/gridsome.config.js) for more information.

Content is built from local files in relative `markdown` directory.

Start gridsome in local development mode to make changes to layout.

$ cd gridsome-watthem
$ gridsome develop

For a static build to the `./gridsome-watthem/dist` folder

$ gridsome build

Currently, dist content is copied to another directory and changes are pushed to [watthem.github.io repository](https://github.com/watthem/watthem.github.io)
