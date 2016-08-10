Project Layout and Configuration
================================

Projects created using `generator-phaser-plus` have a very simple, easy to understand layout to help keeping your content well organized. This page contains a quick summary of the contents included in every starting project.


Development Environment and Configuration
-----------------------------------------

The `package.json` is a file managed by npm, containing relevant information about required dependencies, and some runnable scripts. If you are not very familiar with Node.js yet, keep in mind that this is the most important file of your project, and you can't do much without it.

A special `gulpfile.js/` directory contains scripts used by the task manager, Gulp, responsible for running the development tasks. You will find more in depth details about this directory in the "[Tasks][task]" page.

There is also a hidden `.yo-rc.json` file used by Yeoman to store some [`generator-phaser-plus` configuration][gppc], requested when using sub-generators.


Application Code
----------------

The game application code goes inside a dedicated `src/` directory. You can customize the application layout the way you need. However, some directories are referred by `.yo-rc.json`, requested by Yeoman when using [`generator-phaser-plus` sub-generators][gpps]. Below is a listing of the initial application modules.

```
src/
├── app.js
├── assets.js
├── objects
│   └── Logo.js
└── states
    ├── Boot.js
    ├── Game.js
    ├── Preloader.js
    └── index.js
```

The `app.js` is the game application entry point and contains the `main()` routine, responsible for starting up the game.

A special module `assets.js` is used to declare game assets in [Phaser Asset Pack format][aspk], useful to keep this kind of data out of the game states logic.

There are three sub-directories that help keep some of your game code organized:

*   An `objects/` directory, to keep extended game object classes (prefabs);

*   A `states/` directory, to keep Phaser game states;

*   A `plugins/` directory, to keep custom Phaser plugins. Actually, this directory is created the first time the `plugin` sub-generator is used.

The `src/states/index.js` (or `src/states.js` for ECMAScript-style projects) is a special module enumerating the required game states to run a Phaser game, offering a convenient way for declaring and dynamically loading states into a game instance.


Static Files and Game Assets
----------------------------

The `static` directory should be used to keep HTML documents and media files, including game assets.

```
static/
├── assets/
│   ├── phaser.png
│   ├── progress-bar.png
│   └── splash-screen.png
└── index.html
```

Game assets should be copied into `static/assets/`. This is recommended to distinguish these files from other static media, including third-party scripts, "favicons", style-sheets and other assets used by the HTML page, for example.

The initial assets included are just the bare minimum required to run the sample game properly.


Miscellaneous Files
-------------------

*   **`.editorconfig`**: An [EditorConfig][ec__] file, that helps adjusting some common configuration for code editors.

*   **[`.gitattributes`][gita]**: A file used by [Git][git_] to assign special attributes to tracked files.

*   **[`.gitignore`][giti]**: A file used by Git, specifying intentionally untracked files.

*   **[`.eslintrc.yml`][esrc]**: A file containing the [ESLint][esl_] rules and general configuration.

*   **[`.babel.json`][bbrc]**: For ECMAScript-style projects, this file contain the Babel compiler configuration, such as plugin presets and other data affecting how the compiler work.


<!--  -->
[task]: tasks.md
[aspk]: asset-packs.md
[gpps]: generator.md#sub-generators
[gppc]: generator.md#generator-configuration

[esl_]: http://eslint.org/
[git_]: https://git-scm.com/
[ec__]: http://editorconfig.org/
[bbrc]: http://babeljs.io/docs/usage/babelrc/
[esrc]: http://eslint.org/docs/user-guide/configuring
[giti]: https://www.kernel.org/pub/software/scm/git/docs/gitignore.html
[gita]: https://www.kernel.org/pub/software/scm/git/docs/gitattributes.html
