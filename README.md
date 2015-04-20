[`slush-phaser-plus`][npm.]
===============================================================================

>   **HIGHLY EXPERIMENTAL!** A Slush generator for Phaser web game projects,
>   packed with lots of good features.


Batteries included
-------------------------------------------------------------------------------

Every project created with this generator includes the following tool-set:

*   [Gulp][gulp], a popular task manager and build streaming, to handle
    development and distribution tasks.

*   [BrowserSync][bsnc] development server, for cross-device testing.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — [check if EditorConfig is available for your code
    editor][ecpl].

*   [JSHint][jsht] for code quality check.

*   [Bower][bowr] for easy component management.

*   [Babel][babl] to translate from ES6 to ES5 syntax.
    See which [language features][feat] are currently supported.

*   Support for [Handlebars][hbs.] templates, [LESS][less] style sheets, source
    maps output, offline cache manifest creation and much more!


Installation Instructions
-------------------------------------------------------------------------------

Firstly, you need a development environment compatible with `Node.js` properly
installed and configured in your system to use with this generator. After that,
use `npm` to install `slush-phaser-plus` (and `slush`, if you didn't already),
issuing the following commands on a terminal emulator:

```sh
npm install --global slush              # To install `slush`.
npm install --global slush-phaser-plus  # To install this generator.
```

Also, it's a good idea to have these installed too, as you may find them useful
later:

```sh
npm install --global gulp   # A task manager and streaming build system.
npm install --global bower  # A popular front-end package manager.
```


### Usage #####################################################################

Start by creating a new directory to host your new project contents and go
inside it, then run `slush-phaser-plus`, issuing the following commands, like
in the example below:

```sh
mkdir my-project  # Note: Replace 'my-project' with whatever you like.
cd my-project
slush phaser-plus
```

A brief questionnaire, asking you some details about your soon-to-be new game
project, should appear. Answer every question to proceed with the project
creation. `slush-phaser-plus` will take care of installing all project
dependencies for you automatically.


### Available sub-generators ##################################################

`slush-phaser-plus` comes with some preset sub-generators to aid you in some
common game development tasks with Phaser. To use any of these, just run
`slush-phaser-plus` as you would, appending the name of your desired 
sub-generator.

```sh
$ slush phaser-plus:<sub-generator>
```

The following sub-generators are available, performing the tasks as described:

*   `state` : Generates `Phaser.State` classes.
*   `object`: Helps creating game objects from a set of base classes.
*   `plugin`: A boilerplate for your own Phaser plug-ins.


License
-------------------------------------------------------------------------------

Source code distributed under the terms of the [MIT License][lcnc].


Did you know?
-------------------------------------------------------------------------------

[Slush][slus] is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate
installed slush generators and to run them with [`liftoff`][lift].

To find out more about Slush, check out the [documentation][slus].


<!-- Links ---------------------------------------------------------------- -->

[bowr]: http://bower.io/
[phsr]: http://phaser.io/
[gulp]: http://gulpjs.com/
[jsht]: http://jshint.com/
[babl]: https://babeljs.io/
[less]: http://lesscss.org/
[hbs.]: http://handlebarsjs.com/
[edcf]: http://editorconfig.org/
[bsnc]: http://www.browsersync.io/
[slus]: https://github.com/slushjs/slush
[ecpl]: http://editorconfig.org/#download
[feat]: http://babeljs.io/docs/learn-es6/
[lift]: https://www.npmjs.com/package/liftoff
[gsdt]: https://github.com/greypants/gulp-starter/
[npm.]: https://www.npmjs.com/package/slush-phaser-plus
[lcnc]: https://github.com/rblopes/slush-phaser-plus/blob/master/LICENSE
