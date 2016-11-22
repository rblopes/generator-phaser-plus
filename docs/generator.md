Using `generator-phaser-plus`
=============================

`generator-phaser-plus` is a [Yeoman][yo__] plugin that bootstraps Web game projects developed with the [Phaser Game Framework][phsr], including some helpful features to speed up common game development tasks.

`generator-phaser-plus` is available for download via npm.

```
$ npm install --global yo                     # (1)
$ npm install --global generator-phaser-plus  # (2)
```

1.  Install Yeoman if you do not have it yet. Yeoman is both a command-line tool and the library that powers `generator-phaser-plus` and several other utilities know as "generators".

2.  Download and install `generator-phaser-plus` on your system.


General Usage
-------------

With the necessary packages installed, `generator-phaser-plus` is ready for use.

```
$ yo phaser-plus
```

>   Note: It's best practice to create a directory to keep your project contents to avoid it getting mixed with your documents and other common files.

![](media/screenshot.png)

When running the generator, a little survey with only four questions will ask for details about your new project:

*   **What's your game title?**: This question is self-explanatory. Be creative and name your game with a cool title. If you change your mind later, it is very simple to alter it.

*   **Give it a short description**: Describe your game in a few words. Replying this question is optional. Both title and description are added to the `index.html` as a `<title />` and a `<meta />` tag and also to the project "README" Markdown page.

*   **Which Phaser build are you going to use?**: Here, you choose which Phaser script to use for developing your game, copied from the Phaser package. Simply use the arrow keys to move between the choices. Phaser comes bundled with three distinct builds:

    *   **Arcade Physics and P2** is the standard `phaser.js` script, including both Arcade and P2 2D physics engines. Great for games of any size. It is the default choice.

    *   **Arcade Physics Only** is a custom build including only the "Arcade Physics" engine. Ideal for prototyping small games for game jams, for example.

    *   **No Physics Engines** is a custom build with no physics engines enabled. Good for games not involving 2D physics logic, like card games and puzzles.

        >   Note: if you need Tiled tile maps support, prefer at least the "Arcade Physics" option.

*   **How do you prefer to develop your game code?**: decide how you want to author your game code, choosing between two project templates.

    *   One with game application code written using CommonJS modules; or,

    *   Another with modules written using ECMAScript 2015+ syntax, including [Babel][babl] compiler support for compatibility with today's major Web browsers.

After answering all questions, the first project contents will be created and the generator will take care of installing, through npm, the necessary packages to start developing your game.


Generator Configuration
-----------------------

Yeoman creates a hidden configuration file named `.yo-rc.json`, storing some information required by `generator-phaser-plus`. This file also marks the project root, so files created by a sub-generator are placed relative to that location. Below is a commented version of a regular `.yo-rc.json` file.

```js
{
  "generator-phaser-plus": {     // The generator name, verified by Yeoman.
    "baseTemplate": "commonjs",  // The base template the project is based on.
    "dirs": {                    // Directories read by sub-generators.
      "objects": "src/objects/", // Where game prefabs are located.
      "plugins": "src/plugins/", // Where Phaser custom plugins are located.
      "states": "src/states/"    // Where game states are located.
    },
    "states": {                  // Values used by the `state` sub-generator.
      "moduleName": "src/states/index.js",
      "requirePath": "./"
    },
    "meta": {                    // Creation date and generator version.
      "createdWith": "1.0.0",
      "creationDate": "2016-01-01T12:34:56.789Z"
    }
  }
}
```

For example, when using the `state` sub-generator, Yeoman will read that file, looking for the entry containing the directory where the new Phaser state module should be placed and some other information necessary to update the states index module.

>   Note: You may be asked about `.yo-rc.json` contents when filing bugs at the `generator-phaser-plus` project repository.


Sub-generators
--------------

`generator-phaser-plus` also includes a few sub-generators to help some common Phaser game development tasks. You can use these sub-generators in two ways:

*   A guided mode, where a sub-generator will ask for inputs, much like how the application generator does.

*   Using command-line arguments and flags to specify your choices and run the sub-generators faster.

You can get a description of what a sub-generator does running `yo phaser-plus:<sub-generator> --help`.

The following sub-generators are available.


### `object` sub-generator
Creates the blueprint of a extended Phaser object class (or prefab). When given a class `name`, it will create a blueprint of a extended `Phaser.Sprite` class.

#### Usage
```
$ yo phaser-plus:object [<name>] [--description|-m '<description>']`
```

#### Arguments
*   **`name`**: The game object class name

#### Options
*   **`--description` or `-m`**: Describe what this object do.


### `plugin` sub-generator
Creates the blueprint of a custom Phaser plugin.

#### Usage
```
$ yo phaser-plus:plugin [<name>] [--description|-m '<description>']`
```

#### Arguments
*   **`name`**: The plugin class name

#### Options
*   **`--description` or `-m`**: Describe the purpose of this plugin.


### `state` sub-generator
Creates the blueprint of a Phaser game state. When given a class `name`, it will create the blueprint of a game state class containing only the `#create` and `#update` methods.

#### Usage
```
$ yo phaser-plus:state [<name>] [--description|-m '<description>']
```

#### Arguments
*   **`name`**: The game state class name

#### Options
*   **`--description` or `-m`**: Describe what happens in this game state.


<!--  -->

[phsr]: http://phaser.io/
[yo__]: http://yeoman.io/
[babl]: http://babeljs.io/
