Managing Dependencies
=====================

There will be times you want to add features not provided by Phaser, like plugins and third party libraries.

Thanks to Browserify, you can integrate packages installed with npm right into your game code. Not all libraries are available for distribution through npm, though.


Using npm packages
------------------

Using packages from npm is easy. Remember to use `--save` when installing a package, so you don't miss it later.

```
npm install --save <package-name>
```

Let's take for example a random, fictitious Phaser Plugin. To use that plugin with your game, open the `src/states/Preloader.js` script and import the plugin in your code.

```js
var MyPhaserPlugin = require('my-phaser-plugin'); // for CommonJS projects, or
import MyPhaserPlugin from 'my-phaser-plugin'     // for ECMAScript projects.
```

Then, just initialize the plugin, as recommended in its documentation.

```js
// Example: initialize 'MyPhaserPlugin' and keep a reference to use it later in
// the game.
game.myPhaserPlugin = game.add.plugin(MyPhaserPlugin, {
    some: 'configuration',
    values: ':)'
});
```

Later, to check which packages have updated versions published, use the `npm outdated` command to fetch a list of all outdated dependencies in your project. To update an individual package, just issue `npm update <package-name>`, or just `npm update` to upgrade all dependencies.


Manually Adding Third-Party Libraries to your Game Project
----------------------------------------------------------

To include third-party libraries not available through npm, just copy the library scripts to the `static/` directory of your game project. Then, edit the `index.html` to add the required `<script />` tags to load that library.

This way, the library will be globally available in the browser's JavaScript environment, not needing you to `require` or `import` it.

Adding libraries this way presents one disadvantage, because you will have to manually replace the necessary files when upgrading to more recent versions. If you are using a version control system, such as Git, you will need to submit those files to version control as well.


A few recommendations
---------------------

*   When dealing with third-party libraries, take some time to learn what it does. If it's an open-sourced library, also take some time to study how it works from the code's perspective.

*   Check if the library is well maintained, providing support like documentation and test cases, and authors are committed to their work, keeping it up to date and replying to reported issues within a reasonable time.

*   Verify which license apply to that library and if that license is adequate to your project.

*   If you think you found issues using someone's library, double-check your code to see what is wrong. If you are sure there is an problem in that library, do not hesitate to report the authors.
