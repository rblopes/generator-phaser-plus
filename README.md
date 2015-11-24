[![generator-phaser-plus](logo.png)][gpp_]

[![npm version][fury]][gpp_]
[![Dependencies][ddmb]][ddm_]
[![Travis CI Build Status][tcib]][tci_]

>   A [Yeoman][yo__] generator for [Phaser][phsr] web games, featuring a live
>   development environment with Babel, BrowserSync, Browserify and much more.


Batteries included
------------------

Projects created with this generator come with:

*   [Gulp][gulp] task manager, to handle development and distribution tasks,
    with alternative npm scripts provided.

*   [BrowserSync][bsnc] for cross-device testing.

*   [Browserify][brsy] for easier management of components and dependencies.

*   [Babel][babl] to compile ECMAScript 2015 scripts (or future specs) into
    scripts compatible with today's browsers. Check which [language
    features][feat] are currently supported.

*   [ESLint][eslt] for code quality check.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — check if [EditorConfig support][ecpl] is available for your
    code editor.

*   Customizable scripts for automated [Audio Sprites][ausp] generation
    (Requires [FFMpeg][ffmp]).

The sample project is based on [`phaser-plus-template`][ppt_]. Both generator
and sample project are regularly updated with improvements and bug fixes.


Installation
------------

First, you need a properly installed and configured [Node.js][node]
environment, with [npm][npm_] available.

To install `generator-phaser-plus` (and Yeoman, if you didn't already), enter
the following commands on a terminal:

```sh
npm install --global yo                     # To install Yeoman.
npm install --global generator-phaser-plus  # To install this generator.
```

Optionally, install Gulp to handle the tasks of your created projects.

```sh
npm install --global gulp                   # Install Gulp task manager.
```


### Usage

Start by creating a new directory to host your new project and, inside it, run
`generator-phaser-plus`, issuing the following commands, like in the example
below:

```sh
mkdir my-project && cd $_
yo phaser-plus
```

A brief questionnaire asking details about your new project should appear.
Answer the questions to proceed with the project creation. The generator will
take care of installing all project dependencies for you automatically.

After that, you can begin testing your new project right away issuing the
following command:

```sh
npm start                               # Or simply `gulp`.
```


### Available sub-generators

Some preset sub-generators are provided, aiding in some common development
tasks.

```sh
yo phaser-plus:<sub-generator>
```

The following sub-generators are available, performing tasks as described:

*   `object`: Helps creating game objects from a set of base classes.
*   `plugin`: A boilerplate for your own Phaser plug-ins.
*   `state`: Generates `Phaser.State` classes.


License
-------

Source code distributed under the terms of the [MIT License](LICENSE).


<!-- Links -->

[phsr]: http://phaser.io/
[yo__]: http://yeoman.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[babl]: https://babeljs.io/
[node]: https://nodejs.org/
[brsy]: http://browserify.org/
[npm_]: https://www.npmjs.com/
[ffmp]: https://www.ffmpeg.org/
[edcf]: http://editorconfig.org/
[bsnc]: http://www.browsersync.io/
[ecpl]: http://editorconfig.org/#download
[feat]: http://babeljs.io/docs/learn-es2015/
[ausp]: https://github.com/tonistiigi/audiosprite
[ppt_]: https://github.com/rblopes/phaser-plus-template
[ddm_]: https://david-dm.org/rblopes/generator-phaser-plus
[fury]: https://badge.fury.io/js/generator-phaser-plus.svg
[gpp_]: https://www.npmjs.com/package/generator-phaser-plus
[tci_]: https://travis-ci.org/rblopes/generator-phaser-plus
[ddmb]: https://david-dm.org/rblopes/generator-phaser-plus.svg
[tcib]: https://travis-ci.org/rblopes/generator-phaser-plus.svg
