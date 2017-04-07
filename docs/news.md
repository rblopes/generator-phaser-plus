`generator-phaser-plus` Releases
================================

##  v2.1 - 2017-04-07

-   The `esnext` template was updated to use `babel-preset-env` only, to better align with Babel's recommendations.

-   Development dependencies of both project templates were updated.


##  v2.0 - 2017-01-21

This is mostly a maintenance release of the generator, but it also contains a major update of one important internal dependency. To conform with semantic versioning, however, a major release of the generator is being published today to account for this change.

As usual, this release comes with some regular minor tweaks to both project templates, including:

-   Projects using ECMAScript modules now come with [`babel-preset-env`](https://github.com/babel/babel-preset-env) included, a Babel plugin that tracks supported ECMAScript features in browsers and helps reducing bundled scripts.

-   The `test-dist` script was rewritten as a Gulp task.

### v2.0.1 - 2017-01-23

- Fixed command line arguments not working in sub-generators.


##  v1.1 - 2016-11-23

Whoa, that was fast!!

Today, Richard Davey, creator of Phaser [announced, through his YouTube channel](https://youtu.be/mGZ5c2EWMeQ), his plans for Phaser's upcoming and future releases, including a new "Community Edition", whose management and decisions will be handed out by members of the JavaScript game developers community.

I hope these changes are for the best and help Phaser be the best game framework for JavaScript ever. It is too soon, though, to evaluate how these decisions will impact Phaser and all the ecosystem built around it. My commitment on maintaining this little tool, however, has not changed, and I am publishing this update in response to today's changes.

The changes introduced by this update are very small, only replacing the package providing the Phaser builds (`phaser-ce`), so users can continue enjoying the latest additions and bug fixes. Nothing else has changed.

Meanwhile, I am following closely the latest updates in Phaser repository and will be updating the generator as more changes become necessary.


##  v1.0 - 2016-11-22

Just a few days away before the first release completes 1 year, I'm proud to release the first stable version of `generator-phaser-plus`.

Being "1.0" means no more breaking changes, because most of the features are well established and will stay the same for a while, save for a few occasional additions. For now, most of the development activities to follow will be targeted at improving the generator itself. The template projects, however, are unlikely to see drastic changes, hopefully until a planned "version 2.0" hits the spotlight.

Beginning with this release, users are now able to choose if they want to develop their games with Babel or just using basic CommonJS stuff. And since ECMAScript 2015+ support in Web browsers and some devices is slowly catching up, some features are no longer exclusive to Babel anymore.

Also, the much overdue documentation is finally here! It includes a "Quick Starting Guide", as well several pages covering most aspects of the generator and its created game projects. [Check it out!](./index.md)

Of course, it doesn't end here. Lots of things are being planned for this next development cycle, including Phaser 3 support and lots more! Stay tuned!


##  v0.7 - 2016-07-15

Just another maintenance release with some updates to the project template, including:

-   The Favicons and "Installable Web Application" metadata files are no longer included in the sample game. No more bloat!

-   Finally a fix for a weird glitch that made users save edited scripts twice (or more) in order to trigger a single Browserify rebuild. There's a chance Watchify and `gulp.watch()` were conflicting in a way, but only under very specific conditions.

As a closing note, this release will be the last of the generator with support for Node.js 0.12. If you happen to be using an old Node.js environment to develop your games, and wish to continue using `generator-phaser-plus`, please upgrade to Node.js 4 ASAP!


##  v0.6 - 2016-05-31

This release is mostly a maintenance release, so most of the effort went on updating the program code and its dependencies.

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


##  v0.3.1 - 2016-02-17
*   Fixed class names not being capitalized.


##  v0.3.0 - 2016-02-17
*   Updated template project to match `phaser-plus-template@0.9.0`.
*   Favor Lodash modules instead of the whole library.
*   Fixed class names not properly being written in 'PascalCase'.
*   Moved Gulp tasks into its own generator.


##  v0.2.0 - 2016-01-15
*   Upgraded to `yeoman-generator@0.22.0`.
*   Upgraded to `lodash@4.0.0`.
*   Added development dependency `yeoman-test`.
*   Fixed deprecated API calls in both generator and test modules.
*   Added a 'None' option to the `object` sub-generator, creating classes that do not extend a Phaser class.
*   Updated template project to match `phaser-plus-template@0.7.3`.


##  v0.1.2 - 2015-12-15
*   Added `babel-runtime` to the template project to avoid issues with `npm@2`.


##  v0.1.1 - 2015-12-07
*   Only a minor change to improve this generator discoverability.


##  v0.1.0 - 2015-11-29
*   Ported generator to Yeoman.
*   Renamed package to `generator-phaser-plus`.
*   Updated template project to `phaser-plus-template@0.7.1`.


##  v0.0.6 - 2015-11-11
*   Updated template project to `phaser-plus-template@0.7.0`.


##  v0.0.5 - 2015-09-20
*   Updated template project to match `phaser-plus-template@0.6.2`.
*   Upgraded `inquirer` to latest version.


##  v0.0.4 - 2015-09-01
*   Updated template project to `phaser-plus-template@0.6.0`.
*   Removed the Phaser 'minimum' custom build option.
*   Dev: Updated test suite.


##  v0.0.3 - 2016-08-04
*   Replaced `gulp-if` with `gulp-filter`.


##  v0.0.2 - 2016-08-04
*   Dev: Added integration to Travis CI.
*   Dev: Added test suite.
*   Dev: Replaced JSHint with ESLint.
*   Dev: Removed supporting `gulpfile.js`.
*   Updated template project to `my-phaser-template@0.4.1`.


##  v0.0.1 - 2015-05-22
*   Upgraded `gulp-conflict` plugin to v0.4.0
*   Updated main templates to include v0.3.2 of `my-phaser-template`


##  v0.0.0 - 2015-04-21
*   First public release.
