<div align="center">
    <img src="media/logo.svg" alt="generator-phaser-plus logo" title="generator-phaser-plus">
    <div>
        <a href="https://www.npmjs.com/package/generator-phaser-plus">
            <img
                alt="npm version"
                src="https://img.shields.io/npm/v/generator-phaser-plus/next.svg?style=flat-square"
            >
        </a>
        <a href="https://david-dm.org/rblopes/generator-phaser-plus?path=packages/generator-phaser-plus/">
            <img
                alt="dependencies status badge"
                src="https://david-dm.org/rblopes/generator-phaser-plus/status.svg?style=flat-square&path=packages/generator-phaser-plus"
            >
        </a>
        <a href="https://david-dm.org/rblopes/generator-phaser-plus?path=packages/generator-phaser-plus/&type=dev">
            <img
                alt="development dependencies status badge"
                src="https://david-dm.org/rblopes/generator-phaser-plus/dev-status.svg?style=flat-square&path=packages/generator-phaser-plus"
            >
        </a>
        <a href="https://travis-ci.org/rblopes/generator-phaser-plus">
            <img
                alt="Travis CI build status badge"
                src="https://img.shields.io/travis/rblopes/generator-phaser-plus.svg?style=flat-square"
            >
        </a>
    </div>
</div>

>   Create Phaser Web games with ease.

`generator-phaser-plus` is a [Yeoman generator](http://yeoman.io/) that makes starting up [Phaser 3](http://phaser.io/) game projects dead simple.


## Table of Contents

-   [Installation and Usage](#installation-and-usage)
    -   [Create a New Phaser Game Project](#create-a-new-phaser-game-project)
    -   [Generators](#generators)
-   [A Brief Tutorial](#a-brief-tutorial)
-   [Project Setup](#project-setup)
    -   [Features](#features)
    -   [Application Layout](#application-layout)
    -   [Development Tasks](#development-tasks)
    -   [Configuration](#configuration)
-   [Miscellaneous Topics](#miscellaneous-topics)
    -   [Managing Dependencies](#managing-dependencies)
    -   [The `assets.js` Module Format](#the-assetsjs-module-format)
-   [Contributing](#contributing)
-   [Release Notes](#release-notes)
-   [License](#license)


## Installation and Usage

>   **NOTE**: Assuming you have at least [Node.js](https://nodejs.org/) `v6.12` installed.

Download and install `generator-phaser-plus` from npm, using either `npm` or [Yarn](https://yarnpkg.com/).

**New on `v3.0.0`**: Installing Yeoman to use `generator-phaser-plus` is completely optional.

```sh
npm install --global generator-phaser-plus
```


### Create a New Phaser Game Project

1.  First, create a new directory to keep you project contents and go into it.

    ```sh
    mkdir my-awesome-game/
    cd my-awesome-game/
    ```

2.  Run `phaser-plus` command and fill in the short questionnaire.

    ```sh
    phaser-plus
    ```

    ![Screenshot](media/screenshot.png)

3.  When the installation of the development kit completes, fire up your project running:

    ```sh
    npm start
    ```


### Generators

`generator-phaser-plus` comes with a few handy generators to solve some common Phaser game development tasks.

>   **HINT**: You can read a short description of what a command does running it with the `--help` option.

#### `object` generator

```sh
phaser-plus object <name>
```

Creates game object classes. This generator will ask which Phaser game object class a new game object class should extend from.

-   **Alias**: `o`.
-   **Arguments**:
    -   **`name`**: The object class name. Required.

#### `plugin` generator

```sh
phaser-plus plugin <name> [id]
```

Creates custom plugin classes.

-   **Alias**: `p`.
-   **Arguments**:
    -   **`name`**: The plugin class name. Required.
    -   **`id`**: The internal plugin 'id'. Optional. When omitted, the generator will infer the 'id' from the class name.

#### `scene` generator.

```sh
phaser-plus scene <name> [--customize]
```

Creates scene classes. By default, scenes have the `create` and `update` methods included. To choose which life-cycle methods to include, use the `--customize` option. It also updates the `scenes/index.js` module with the new entry for you.

-   **Alias**: `s`.
-   **Arguments**:
    -   **`name`**. Required. The object class name.
-   **Options**:
    -   **`--customize`**: Select life-cycle methods to include. **Alias**: **`-c`**.


## A Brief Tutorial

>   Coming soon.


## Project Setup


### Features

Projects created with `generator-phaser-plus` have the following features out-of-the-box:

-   [Gulp](https://github.com/gulpjs/gulp/), a lean and simple task manager.

-   [Webpack](https://webpack.js.org/) for better integration of components and dependencies.

-   [Browsersync](http://www.browsersync.io/) for cross-device testing.

-   [Babel](https://babeljs.io/), with [`babel-preset-env`](https://github.com/babel/babel/tree/master/packages/babel-preset-env), for authoring scripts using the most recent ECMAScript specification features and syntax additions ensuring compatibility with current browsers and devices.

<!-- -   [ESLint](http://eslint.org/) for code quality check. -->


### Application Layout

Media assets and source code are organized in a dedicated `app/` directory.

```
app/
│
├── scripts/            # Where application modules are stored
│   ├── objects/        # Custom extended game objects
│   │   └── ...
│   ├── plugins/        # Custom private plugins
│   │   └── ...
│   ├── scenes/         # Game scenes
│   │   ├── index.js    # Reference module for all game scenes
│   │   └── ...
│   ├── assets.js       # Declares media assets used by the game
│   ├── config.js       # Contains certain Phaser configuration values
│   └── index.js        # The game application entry point routine
│
├── static/             # Static files served by Browsersync
│   ├── assets/         # Where game assets are stored
│   │   └── ...
│   └── favicon.ico     # A sample Phaser logo favicon
│
└── index.html          # Main page template
```


### Development Tasks

Automated tasks solve recurring development operations and help you prepare the application for distribution. A special `gulpfile.js/` directory contains the development tasks and its related modules.

>   **NOTE**: If you prefer, install the Gulp command-line interface:
>
>   ```
>   npm install --global gulp-cli
>   ```
>
>   Alternatively, the same tasks can be performed using the provided runnable scripts explained below.

There are two main development tasks:

-   **`default`** task. This is the main development task, the one you will interact with the most. This task uses Browsersync to start an interactive Web server to test your game in the browser. Under the hood, it uses Webpack to watch application modules for changes, triggering the necessary builds when changes occur. When a build finishes successfully, the page will refresh to show the updated game. It is configured to serve the application code and static assets.

    <details>
    <summary>Can be run with:</summary>

    ```
    gulp
    npm start
    yarn start
    ```
    </details>

-   **`dist`** task. The distribution task. When your game is ready, use this task to bundle the application code, its dependencies and static assets. It performs the following jobs, in order:

    -   Dispose the previously compiled version of your game, to avoid mixing outdated files.
    -   Recursively copy all static assets located under the `app/static/` directory.
    -   Compile and minify your application modules and dependent libraries.

    After running this task, a working copy of the game will be found in the `dist/` directory.

    <details>
    <summary>Can be run with:</summary>

    ```
    gulp dist
    npm run dist
    yarn dist
    ```
    </details>


### Configuration

#### Gulp tasks configuration (`gulpfile.js/config/`)

Gulp configuration is organized inside the `gulpfile.js/` directory.

```
gulpfile.js/
└── config/
    ├── webpack/            //  Webpack configuration modules
    │   ├── index.js        //  - The bulk of Webpack settings (entry points, loaders, etc.)
    │   ├── plugins.js      //  - Webpack plugins
    │   └── uglify.js       //  - Uglify settings
    ├── babel.js            //  Babel presets and plugins
    ├── browsersync.js      //  Browsersync settings
    └── paths.js            //  Describes the project layout
```

#### Yeoman metadata (`.yo-rc.json`)

Yeoman creates a hidden configuration file, storing some information required by `generator-phaser-plus`. This file also indicates the root of the project for Yeoman, so files created by any generator are relative to this location. Below is a commented sample of a regular `.yo-rc.json` file.

```js
{
  "generator-phaser-plus": {                        //  The generator name, verified by Yeoman
    "meta": {                                       //  Creation date and generator version
      "createdWith": "3.0.0",
      "creationDate": "2018-01-01T12:34:56.789Z"
    },
    "objects": {                                    //  `object` generator data
      "dest": "app/scripts/objects/"                //  Where custom game objects are stored
    },
    "plugins": {                                    //  `plugin` generator data
      "dest": "app/scripts/plugins/"                //  Where private plugins are stored
    },
    "scenes": {                                     //  `scene` generator data
      "dest": "app/scripts/scenes/",                //  Where new scenes are stored
      "index": {                                    //  Data about the scene index module
        "name": "app/scripts/scenes/index.js",      //  The module name
        "requirePath": "./"                         //  The scenes path relative to that module
      }
    }
  }
}
```

For example, when using the `scene` generator, Yeoman will consume the related data to perform its task: the destination directory where the new scene module should be placed, and some other data required to update the scene index module with the new entry.

This file is required by Yeoman and you should keep it in case you want to continue using `generator-phaser-plus` with your project.

>   **NOTE**: You may be asked about `.yo-rc.json` contents when posting an issue.

#### Miscellaneous files

-   **[`.eslintrc.js`](https://eslint.org/docs/user-guide/configuring)**: A file containing the [ESLint](https://eslint.org/) rules and general configuration.
-   **[`.gitattributes`](https://www.kernel.org/pub/software/scm/git/docs/gitattributes.html) and [`.gitignore`](https://www.kernel.org/pub/software/scm/git/docs/gitignore.html)**: Meta files used by [Git](https://git-scm.com/).
-   **`.editorconfig`**: A special file used by [EditorConfig](http://editorconfig.org/) to tweak some common text editor's configurations.


## Miscellaneous Topics

### Managing Dependencies

There will be times you will want to add features not provided by Phaser. This is where plugins and third party libraries come into play.

Thanks to [Webpack](https://webpack.js.org/), integrating npm packages to your project is very simple.


#### Using npm packages

First, install packages using either [npm](https://docs.npmjs.com/cli/install) on [Yarn](https://yarnpkg.com/docs/cli/add/).

```
npm install <package-name>      # (1)
yarn add <package-name>         # (2)
```

Let's take for example a fictitious plugin. To use that plugin with your game, open the `app/scripts/scenes/preloader.js` module and import the plugin in your code.

```js
//  NOTE: This line goes before the scene `class` definition.
import MyPhaserPlugin from 'my-phaser-plugin';
```

Then, initialize the plugin, as recommended in its documentation.

<!--

```js
//  Example: Initialize 'MyPhaserPlugin' and keep a reference to use it later in the game.
game.myPhaserPlugin = game.add.plugin(MyPhaserPlugin, {
    some: 'configuration',
    values: ':)'
});
```

-->


#### Manually Adding Third-Party Libraries

Not all libraries are available for distribution through npm, though. In this case, you would have to copy the library scripts to the `app/static/` directory of your game project, and to add it to your application, edit the `index.html` page to include the necessary `<script />` tags to load the library. You don't need to `import` the library to use it in your game application. In general, these kinds of libraries make themselves available using browser globals.

However, this presents two big disadvantages:

1.  Every time you need to update that library to more recent versions, you will have to replace the necessary files manually.

2.  If you are using a version control system, such as Git, to manage your project, you will need to keep track those files in your repository as well.

To conclude, note that this method is **not recommended** and should be completely avoided. If you happen to find that kind of library, contact the respective authors and ask them to update their work and publish the referring library on npm.


#### A Few Recommendations

-   When dealing with third-party libraries, take some time to learn what it does. If it's an open-source library, also take some time to study how it works from the implementer's perspective.

-   Check if the library is well maintained, providing support like documentation and test cases, and authors are committed to their work, keeping it up to date and replying to reported issues within a reasonable time.

-   Verify which license apply to that library and if that license is adequate to your project.

-   If you think you found issues using someone's library, double-check your code to see what is wrong. If you are sure the problem is caused by the library itself, do not hesitate to report the authors so they can provide the necessary corrections.


### The `assets.js` Module Format

TBD.


## Contributing

Read the [contribution guidelines](CONTRIBUTING.md) to learn how you can help `generator-phaser-plus`.


## Release Notes

Read the [news page](NEWS.md) for info about the latest release.


## License

This software is distributed under the terms of the [MIT License](LICENSE.md).

The remixed [Yeoman logo](https://github.com/yeoman/media) is shared under a [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/) License.
