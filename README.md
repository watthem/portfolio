Project folder used to configure and build www.matthewhendricks.net.

`./gridsome-watthem` is a Vue powered static site generator that is configured to read local Markdown content. See the [gridsome.config.js](https://github.com/watthem/portfolio/blob/master/gridsome-watthem/gridsome.config.js) for more information.

`./ghost-watthem/` is a Ghost CLI instance and database used to design custom posts and pages (aka backend). Note: Ghost must be running for the gridsome develop/build process to complete.

$ cd ghost-watthem
$ ghost start

Once running, start gridsome in local development mode to make changes to layout.

$ cd gridsome-watthem
$ gridsome develop

For a static build to the `./gridsome-watthem/dist` folder

$ gridsome build

Currently, dist content is copied to another directory and changes are pushed to [watthem.github.io repository](https://github.com/watthem/watthem.github.io)