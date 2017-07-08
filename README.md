[![generator-phaser-plus][logo]][gpp_]

[![npm version][bdg1]][gpp_]
[![dependencies][bdg2]][ddm1]
[![devDependencies][bdg3]][ddm2]
[![Travis CI Build Status][bdg4]][tci_]

>   Create [Phaser][phsr] Web games using Browserify, Browsersync, Gulp and more.

`generator-phaser-plus` is a Yeoman plugin that makes creating Phaser Web game projects simple, quick and easy.


Two templates, same workflow!
-----------------------------

Choose how you want to craft your game code:

*   With application scripts written as CommonJS modules: ideal for newcomers as well experienced developers who want to start creating games at once, or;

*   Using ECMAScript modules and the latest available language features: Comes with [Babel][babl] and [`babel-preset-env`](https://github.com/babel/babel-preset-env) to make scripts "from the future" work in today's browsers and devices. Recommended for skilled developers and adventurers.


Batteries Included
------------------

Projects created with `generator-phaser-plus` are powered by the following tools:

*   [Gulp][gulp] task manager, to handle development and distribution tasks.

*   [Browsersync][bsnc] for cross-device testing.

*   [Browserify][brsy] for easier integration of components and dependencies.

*   [ESLint][eslt] for code quality check.


Quick Start
-----------

>   Note: Assuming you have already installed [Node.js][node].

1.  **Install [Yeoman][yo__] and `generator-phaser-plus` via [npm][npm_]:**

    ```sh
    npm install --global yo                    # Install Yeoman if you don't have it yet.
    npm install --global generator-phaser-plus # Install generator-phaser-plus.
    ```

2.  **Create an empty directory for your new project and go into it:**

    ```sh
    mkdir my-awesome-game
    cd my-awesome-game
    ```

3.  **Start creating your new project:**

    ```sh
    yo phaser-plus
    ```

4.  **Launch it!**

    ```sh
    npm start
    ```

Have a look at the [user's manual][m] and learn more about available features, including [sub-generators and how to use them][s], [how projects are structured][p], [available development tasks][t], and a [hands-on tutorial][g] presenting the general workflow and how you can speed up your game development. You'll also find out more about the [latest development updates][n] and how you can [help contributing to this project][c].


License
-------

This software is distributed under the terms of the [MIT License](LICENSE).


<!-- Links -->

[n]: docs/news.md
[m]: docs/index.md
[t]: docs/tasks.md
[c]: docs/contributing.md
[p]: docs/project-layout.md
[g]: docs/quick-start-guide.md
[s]: docs/generator.md#sub-generators
[logo]: docs/media/logo.png

[phsr]: http://phaser.io/
[yo__]: http://yeoman.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[babl]: https://babeljs.io/
[node]: https://nodejs.org/
[brsy]: http://browserify.org/
[npm_]: https://www.npmjs.com/
[bsnc]: http://www.browsersync.io/
[ddm1]: https://david-dm.org/rblopes/generator-phaser-plus
[gpp_]: https://www.npmjs.com/package/generator-phaser-plus
[tci_]: https://travis-ci.org/rblopes/generator-phaser-plus
[ddm2]: https://david-dm.org/rblopes/generator-phaser-plus?type=dev
[bdg1]: https://img.shields.io/npm/v/generator-phaser-plus.svg?style=flat-square
[bdg2]: https://img.shields.io/david/rblopes/generator-phaser-plus.svg?style=flat-square
[bdg4]: https://img.shields.io/travis/rblopes/generator-phaser-plus.svg?style=flat-square
[bdg3]: https://img.shields.io/david/dev/rblopes/generator-phaser-plus.svg?style=flat-square
