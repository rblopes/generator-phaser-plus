`generator-phaser-plus` Templates
=================================

<div align="center"><img src="../docs/media/logo.png"></div>

Here you find the [`generator-phaser-plus`](../generator/#readme) template projects:

*   One with application scripts written as CommonJS modules, ideal for newcomers as well seasoned developers who want to start creating games at once.

*   Another one using ECMAScript modules, for more skilled developers willing to test the latest and future JavaScript features. Includes [Babel](https://babeljs.io/), configured with [`babel-preset-env`](https://github.com/babel/babel-preset-env), to compile and bundle scripts in a format compatible with today's browsers and devices.

Both projects provide the same sample game, including only the essential features to start developing right away.


How do I use these sample projects?
-----------------------------------

Ideally, you should use `generator-phaser-plus` to bootstrap new game projects. The generator is capable of creating projects with the same features you see here.

![generator-phaser-plus Screenshot](../docs/media/screenshot.png)

Just install it, using `npm install --global generator-phaser-plus`.

Otherwise, you can contribute with bug fixes and features you'd like to see added to `generator-phaser-plus`, just fork this repository, following the instructions below and submitting a pull request.


Development Instructions
------------------------

To start, simply clone this repository locally.

```
git clone https://github.com/rblopes/generator-phaser-plus.git
cd generator-phaser-plus/templates/
```

Go into any directory of your choice, install the project dependencies and run tasks using npm (or [Yarn](https://yarnpkg.com/)), as you're used to with any game project created with `generator-phaser-plus`.

```sh
cd commonjs   # Example: edit the 'CommonJS' project.
npm install   # Installs the required project dependencies.
npm start     # or `gulp dev`: Launches the game in development mode.
npm run dist  # or `gulp dist`: Prepares the game for distribution.
npm run clean # or `gulp clean`: Deletes build files.
```


License
-------

This software is distributed under the terms of the [MIT License](../LICENSE.md).
