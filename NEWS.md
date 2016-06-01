`generator-phaser-plus` Release Updates
=======================================

Beginning with release v0.4.x, a `NEWS.md` (this file) document will contain notes regarding additions, new features and bug fixes.


##  v0.6 - 2016-05-31

This release is mostly an maintenance release, so most of the effort went on updating the program code and its dependencies.

Besides that, the project template is now based in `phaser-plus-template@0.11.0`. New projects now have `babel-eslint` parser in place of ESLint's default parser.


##  v0.5 - 2016-04-30

*   The basic sample project was upgraded to match release v0.10.2 of `phaser-plus-template`, including minor but important changes:

    -   Revised tasks, one dependency upgraded, `gulp-json-minify` included to minify JSON files.

    -   The example `assets.js` module now includes annotations regarding usage and examples.

    -   Minor updates in coding syntax style and comments.

*   The `states` sub-generator now allows choosing which methods to include when creating new game states.


##  v0.4 - 2016-04-01

*   This release fixes a minor issue regarding sub-generators.

    At the moment, a hidden `.yo-rc.json` configuration file is added to every project at the root folder containing information about how the project code is organized. That information is retrieved by sub-generators to write files to their respective folders. If that configuration file was missing for some reason, the sub-generators would fail raising exceptions.

    Only projects created using my old `slush-phaser-plus` as well any project missing that configuration file are affected by this issue. In both cases, a new `.yo-rc.json` should be created manually. A sample configuration file is shown on the note below for reference.

    To prevent this situation, sub-generators now write files at predefined locations, compatible with the latest version of the template project.

    As always, be sure to backup your content and commit your game code to the source code management system of your choice. (Git is your best bet.)

    This choice of storing project configuration in hidden files will be amended in future releases.

*   The state sub-generator was updated to append the `import` line of the created game state to the `src/states.js` module on new projects.

    If you want `yo phaser-plus:state` to update a project created with an earlier release of this generator, include a `states-module` key to your project `.yo-rc.json`, like in the following sample.

    ```js
    // .yo-rc.json
    {
      "generator-phaser-plus": {
        "dirs": {
          "objects": "src/objects",
          "plugins": "src/plugins",
          "states": "src/states"
        },
        "states-module": "src/states.js" // ← Point to your states.js module.
      }
    }
    ```

*   A nifty new ASCII text banner was made to be displayed over all prompts :smiley:
