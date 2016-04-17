/*
 * `assets` module
 * ===============
 *
 * This module declares static Phaser Asset Packs that will be loaded using
 * the `Loader#pack` method.
 *
 * Use this file to declare assets used in your game. Check the commented
 * notes further below for examples of different asset types.
 *
 * Notes:
 *
 * - Loading files are relative to your project's `index.html`. You can
 *   change that using the Phaser.Loader `baseURL` and `path` properties.
 *   Refer to the [Phaser API Documentation][1] to decide what's appropriate
 *   for your needs. Usually, `#path` is your best option. This project
 *   contains an `assets/` folder, configured as your `#path` option, so
 *   declared game assets placed there should load with no problems.
 *
 * - All entries are equivalent to their respective `Phaser.Loader` methods.
 *
 * - Some asset entries may omit their URL field. In this case, a pattern
 *   <key>.<extension> is assumed, that is, the `key` name is appended an
 *   given file extension to form its URL, which depends on what asset
 *   `type` you are declaring.
 *
 *   For graphical assets, PNG is preferred as the default graphic format.
 *
 *   Remember that file names are case sensitive in URLs, thus `*.JPG` and
 *   `*.jpg` are different and might cause trouble.
 *
 * - The URL maybe a `data:` scheme, but these are rather verbose, so use
 *   at your discretion.
 *
 * - Some asset types require a callback function for post processing.
 *   In this case, use the `Loader#pack` fourth argument to specify the
 *   appropriate callback context -- usually, the calling game state.
 *
 *   ```
 *   // Assuming `this` is your game state context.
 *   game.load.pack(key, null, packObject, this);
 *   ```
 *
 * [1]: http://phaser.io/docs
 */

export default {
  // -- Splash screen assets, displayed during the 'Preload' state.
  boot: [{
    key: 'splash-screen',
    type: 'image'
  }, {
    key: 'progress-bar',
    type: 'image'
  }],

  // -- General assets, used throughout the game.
  game: [{
    key: 'phaser',
    type: 'image'
  // }, {
  //   //  Example: Add an image.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.png` is assumed.
  //   key: 'example',
  //   type: 'image',
  //   url: 'example.png'
  // }, {
  //   //  Example: Add a text file.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.txt` is assumed.
  //   //
  //   //  Retrieve the file with `game.cache.getText(<key>)`.
  //   key: 'example',
  //   type: 'text',
  //   url: 'example.txt'
  // }, {
  //   //  Example: Add a JSON document.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.json` is assumed.
  //   //
  //   //  Retrieve the file with `game.cache.getJSON(<key>)`.
  //   key: 'example',
  //   type: 'json',
  //   url: 'example.json'
  // }, {
  //   //  Example: Add a XML document.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.xml` is assumed.
  //   //
  //   //  Retrieve the file with `game.cache.getXML(<key>)`.
  //   key: 'example',
  //   type: 'xml',
  //   url: 'example.xml'
  // }, {
  //   //  Example: Add a custom format, binary file.
  //   //
  //   //  The `url` is mandatory. Requires a callback context.
  //   //
  //   //  Retrieve the file with `game.cache.getBinary(<key>)`.
  //   key: 'example',
  //   type: 'binary',
  //   url: 'example.bin',
  //   callback: 'exampleCallback'
  // }, {
  //   //  Example: Add a spritesheet texture.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.png` is assumed.
  //   key: 'example',
  //   type: 'spritesheet',
  //   url: 'example.png',
  //   margin: 0,
  //   spacing: 0,
  //   frameMax: 8,
  //   frameWidth: 32,
  //   frameHeight: 32
  // }, {
  //   //  Example: Add video.
  //   //
  //   //  Supply `urls` for one of several files in different formats.
  //   key: 'example',
  //   type: 'video',
  //   urls: ['example.m4v', 'example.webm']
  // }, {
  //   //  Example: Add audio.
  //   //
  //   //  Supply `urls` for one of several files in different formats.
  //   key: 'example',
  //   type: 'audio',
  //   urls: ['example.m4a', 'example.oga']
  // }, {
  //   //  Example: Add an audio sprite with some sound effects.
  //   //
  //   //  Supply `urls` for one of several files in different formats.
  //   //
  //   //  The mandatory `jsonURL` field specifies the audio sprites data.
  //   key: 'example',
  //   type: 'audiosprite',
  //   urls: ['example.m4a', 'example.oga'],
  //   jsonURL: 'example.json'
  // }, {
  //   //  Example: Add a Tiled tilemap.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.csv` or `<key>.json` is assumed.
  //   //
  //   //  The `format` field specifies in which data format your tilemap was
  //   //  exported, either `CSV` or `TILED_JSON`.
  //   //
  //   //  Use different `image` pack entries to load the necessary textures.
  //   key: 'example',
  //   type: 'tilemap',
  //   url: 'example.json',
  //   format: 'TILED_JSON'
  // }, {
  //   //  Example: Add a Lime+Corona physics data file.
  //   //
  //   //  If `url` is omitted, a pattern `<key>.json` is assumed.
  //   key: 'example',
  //   type: 'physics',
  //   url: 'example.json'
  // }, {
  //   //  Example: Add a retro, bitmap font.
  //   //
  //   //  If `atlasURL` is omitted, a pattern `<key>.json` is assumed.
  //   //
  //   //  If `textureURL` is omitted, a pattern `<key>.png` is assumed.
  //   key: 'example',
  //   type: 'bitmapFont',
  //   atlasURL: 'example.json',
  //   textureURL: 'example.png',
  //   xSpacing: 0,
  //   ySpacing: 0
  // }, {
  //   //  Example: Add a texture atlas.
  //   //
  //   //  Use the `format` field to specify the texture atlas data format:
  //   //  - `TEXTURE_ATLAS_XML_STARLING`: Starling XML data format.
  //   //  - `TEXTURE_ATLAS_JSON_HASH`: JSON Hash data format.
  //   //  - `TEXTURE_ATLAS_JSON_ARRAY`: JSON Array data format (default).
  //   //
  //   //  If `atlasURL` is omitted, a pattern `<key>.json` (or `<key>.xml`) is
  //   //  assumed.
  //   //
  //   //  If `textureURL` is omitted, a pattern `<key>.png` is assumed.
  //   key: 'example',
  //   type: 'atlas',
  //   atlasURL: 'example.json',
  //   textureURL: 'example.png',
  //   format: 'TEXTURE_ATLAS_JSON_HASH'
  // }, {
  //   //  Example: Add a texture atlas (alternative form).
  //   //
  //   //  Use the `type` field to specify the texture atlas format, as follows:
  //   //  - `atlasXML`: Starling XML Texture Atlas data format.
  //   //  - `atlasJSONHash`: texture atlas in JSON Hash data format.
  //   //  - `atlasJSONArray`: texture atlas in JSON Array data format.
  //   //
  //   //  If `atlasURL` is omitted, a pattern `<key>.json` (or `<key>.xml`) is
  //   //  assumed.
  //   //
  //   //  If `textureURL` is omitted, a pattern `<key>.png` is assumed.
  //   key: 'example',
  //   type: 'atlasJSONHash',
  //   atlasURL: 'example.json',
  //   textureURL: 'example.png'
  }]
};
