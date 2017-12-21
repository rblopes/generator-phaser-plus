<div align="center">
    <img src="docs/media/logo.png" alt="generator-phaser-plus logo" title="generator-phaser-plus">
    <div>
        <a href="https://www.npmjs.com/package/generator-phaser-plus">
            <img
                alt="npm version"
                src="https://img.shields.io/npm/v/generator-phaser-plus/next.svg?style=flat-square">
        </a>
        <a href="https://david-dm.org/rblopes/generator-phaser-plus?path=packages/generator-phaser-plus/">
            <img
                alt="dependencies status"
                src="https://david-dm.org/rblopes/generator-phaser-plus/status.svg?style=flat-square&path=packages/generator-phaser-plus">
        </a>
        <a href="https://david-dm.org/rblopes/generator-phaser-plus?path=packages/generator-phaser-plus/&type=dev">
            <img
                alt="devDependencies status"
                src="https://david-dm.org/rblopes/generator-phaser-plus/dev-status.svg?style=flat-square&path=packages/generator-phaser-plus">
        </a>
        <a href="https://travis-ci.org/rblopes/generator-phaser-plus">
            <img
                alt="Travis CI Build Status"
                src="https://img.shields.io/travis/rblopes/generator-phaser-plus.svg?style=flat-square">
        </a>
    </div>
</div>

`generator-phaser-plus` is a [Yeoman](http://yeoman.io/) plugin that makes starting up [Phaser](http://phaser.io/) Web game projects simple, quick and easy.

This project is currently being ported to the single repository ("monorepo") development model and its structure is changing rapidly. All contents are being conveniently organized in individual directories:

*   **:file_folder: `docs/`**: The user manual and general documentation pages of the generator. (**Note:** The current documentation pages are pending updates for the upcoming release. If you're looking for [documentation of the stable release](https://github.com/rblopes/generator-phaser-plus/blob/v2.x/docs/index.md#generator-phaser-plus-manual), you will find a snapshot of the actual pages under the [`v2.x`](https://github.com/rblopes/generator-phaser-plus/blob/v2.x/) branch.)

*   **:file_folder: `packages/`**: The npm packages (only `generator-phaser-plus` for now) of the generator libraries.

*   **:file_folder: `templates/`**: The sample projects. These are fully runnable, preview versions of the projects created with the generator. Updates made there are extracted back as project templates of the generator.

~~For more info, take a look at the project [development guide](docs/dev-guide.md).~~ (**Note:** Coming soon.)


## About Version 3

Development of the next major release with support for [Phaser 3](https://github.com/photonstorm/phaser) just began and soon you'll find out how you can help me in this crucial task. You can install it already with npm (or Yarn) using the `next` distribution tag:

```
npm install --global generator-phaser-plus@next
```


## License

This software is distributed under the terms of the [MIT License](LICENSE.md).
