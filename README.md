# Gulp VS Grunt

Simple experiments on [**GulpJS**](http://gulpjs.com/) and [**GruntJS**](http://gruntjs.com/)

## Tasks list
Both Gulp and Grunt perform the following tasks:

  - jshint: lints every javascript files located under *app* folder
  - concat: concats in one file called *app.js*
  - uglify: minifies app.js

## Run locally
Clone the repo:

```bash
$ git clone https://github.com/wilk/GulpVSGrunt && cd GulpVSGrunt
```

Then install all dependencies:

```bash
$ npm install
```

Then run *Grunt*:

```bash
$ grunt build
```

Or *Gulp*:

```bash
$ gulp build
```