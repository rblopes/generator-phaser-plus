Tasks
=====

Tasks are how you interacting with the project development environment. For example, tasks help automating recurring operations like monitoring and compiling scripts when changes occur or preparing the software for distribution.

Projects created with `generator-phaser-plus` come with [Gulp][gulp], a popular and easy to configure task manager for Node.js.

>   Note: If you prefer the Gulp command-line interface to manage your project tasks, install the `gulp` package from npm into your Node.js environment globally.
>
>   ```
>   npm install --global gulp-cli
>   ```
>
>   Alternatively, the same tasks can be performed using the provided runnable scripts, explained below in this page.

The following sections explain how tasks are laid out in the initial project setup and how they can be used.


Configuration
-------------

Tasks configuration are kept in the module `gulpfile.js/config.js`, exposing the following values:

*   **`dirs`**: the names of some output directories.

*   **`files`**: some file paths and patterns used by different file operations.

*   **`bundle`**: the general [Browserify configuration][bsfy].

*   **`server`**: configuration values used by [Browsersync][bsnc] to set up the development web server.


General Tasks
-------------

### `default`

Run with:

```
gulp                                    # or `npm start`
```

This is the main development task, which you will interact frequently. It comprises two simple steps:

*   Enable the development Web server (Browsersync) to test the game in a browser. Comes already configured to serve the chosen Phaser script build, eliminating the need to copy that script to the `static/` directory. It is also configured to serve the application code and static assets.

*   Monitor application modules during development using Watchify, triggering the necessary rebuilds when changes occur. When bundling modules, it will check for inconsistencies and notify, using the Terminal, about potential issues. When rebuilds are successful, it will refresh the Web page, using Browsersync to show the updated game.


### `dist`

Run with:

```
gulp dist                               # or `npm run dist`
```

The distribution task. When your game is ready, use this task to bundle the game code, its dependencies and static assets. It executes the following jobs, in order:

*   Dispose of any previously compiled version of your game to avoid mixing with outdated content.

*   Recursively copy all static assets located under the `static/` directory.

*   Copy a minified build of Phaser, to be distributed with your game application.

*   Bundle and minify your application modules.

After running this task, a working version of the game should be copied into the `dist/` directory.


### `clean`

Run with:

```
gulp clean                              # or `npm run clean`
```

Dispose of previously compiled versions of your game, deleting the `build/` and `dist/` directories. Used before running the `dist` task.

>   Note: Avoid copying working files inside these directories, as their contents are temporary and may be completely erased. Use the `static/` directory instead to serve media and other static files.


### `lint`

Run with:

```
gulp lint                               # or `npm run lint`
```

Uses [ESLint](http://eslint.org/) to inspect application modules for syntactic discrepancies, anti-patterns and other potential issues.

ESLint rules are configured using a hidden YAML file, `.eslintrc.yml`, located in the project root, configured to use the recommended, less restrictive rules.

You can change that configuring your desired rules, or installing shared presets like `eslint-config-standard` or `eslint-config-xo` from npm, for example. Refer to the [ESLint configuration user guide][eslt] for more info.


### `test-dist`

Run with:

```
npm run test-dist
```

This task compiles a distribution version of the game project and enables Browsersync to test it in the browser. Useful for late minute tests on the finished build.


External References
-------------------

Below is a short list with links to the documentation of the dependencies `generator-phaser-plus` projects use.

*   [Gulp documentation][gulp]
*   [ESLint configuration user guide][eslt]
*   [Browserify][bsfy] and [Watchify][wchy]
*   [Browsersync configuration][bsnc]

<!--  -->

[bsnc]: https://www.browsersync.io/docs/options
[wchy]: https://github.com/substack/watchify#readme
[eslt]: http://eslint.org/docs/user-guide/configuring
[bsfy]: https://github.com/substack/node-browserify#readme
[gulp]: https://github.com/gulpjs/gulp/tree/master/docs#gulp-documentation
