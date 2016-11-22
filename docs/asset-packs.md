Explaining Phaser Asset Packs
=============================

Asset Packs are a format supported by Phaser to declare media assets used in a game. Asset packs were featured for the first in Phaser v2.0.4.

With Asset Packs, you declare media assets in a declarative format, either using JSON documents or just plain JavaScript objects.

Asset Packs are a format more suitable for games using server side technologies, were graphical and binary assets could be delivered on demand. However, developers creating simple to more robust offline games may greatly benefit from this feature as well.


How Asset Packs Work
--------------------

Phaser Asset Packs can be either JSON documents or plain JavaScript objects, where each key contains a list of files used in the game. A single document can have several asset packs.

```js
// Example: A Phaser Asset Pack JSON document.
{
  "boot": [
    {
      "key": "splash-screen",
      "type": "image",
      "url": "my-awesome-game.jpeg"
    },
    {
      "key": "progress-bar",
      "type": "image"
    }
  ],
  "game": [
    {
      "key": "hero",
      "type": "spritesheet",
      "url": "sprites/hero.png",
      "margin": 4,
      "spacing": 4,
      "frameMax": 32,
      "frameWidth": 64,
      "frameHeight": 64
    },
    {
      "key": "levels",
      "type": "tilemap"
    }
  ]
}
```

Like when using regular [`Phaser.Loader`][load] method calls, files are queued to be loaded in the browser, during the `preload` phase of a game state life-cycle, rather than being immediately loaded. Asset Packs, however, take preference.

Each asset pack is assigned a unique key, which will be referred when using the [`Phaser.Loader#pack`][pack] method to load its corresponding media assets.

```js
// Example: Load the 'boot' assets from 'assets.json' file.
game.load.pack('boot', 'assets.json');
```

The sample project created by `generator-phaser-plus` comes with a pre-made module named `assets.js`. The starting setting contains only the necessary bits to load the sample game assets, split in two sections.

*   **`boot`**: this key declares the graphical assets to be loaded during the booting stage of the game, the `Boot` state. These are the graphics that make the splash screen of the "Preloader".

*   **`game`**: this key declares the remaining game assets, loaded during the `Preloader` state. While fetching the necessary assets to be used in the game, the progress will be reported on the splash screen.

This is only a minimal, recommended set up for Phaser games running using multiple states.


### Declaring assets

All supported Phaser asset types can be declared and loaded using Asset Packs.

To declare a new asset, a dictionary (that is, an object consisting only of key-value pairs) should be added to the list. That dictionary must declare at least two mandatory parameter fields:

*   The `key` by which a given asset will be identified, stored in the game cache and retrieved later during the game;

*   The `type` of the asset being declared.

In addition, a range of parameter fields may be required depending on the asset type being used. In many cases, most of these parameters may be omitted, and Phaser will apply its own conventions to determine the values of these parameters. If, for any reason, the default values provided by Phaser do not match your expectations, you should explicitly provide the actual parameter values.


Asset Type Reference
--------------------

Below is the complete reference of supported media asset types supported by Phaser.


### `atlas`

Declare a [Texture Packer][tpck] Atlas. Use this type to declare both the graphic texture and its following metadata.

#### Type Parameters
*   **`atlasURL`**: Optional. The path of the Texture Atlas metadata.

    When omitted, the pattern `<key>.<format-extension>` is assumed. The file extension is inferred from the metadata format, declared by the `format` parameter.

*   **`textureURL`**: Optional. The path of the actual atlas texture.

    When omitted, the pattern `<key>.png` is assumed.

*   **`format`**: Optional. The Texture Atlas metadata file format.

    Phaser supports three different formats of Texture Atlas. Use one of following values to specify the atlas metadata format:

    *   **`TEXTURE_ATLAS_JSON_ARRAY`**: A Texture Atlas exported as a JSON document containing data formatted as an array object. This format defaults to a `.json` file extension, thus, omitting the `atlasURL` field implicitly yields a `<key>.json` URL path pattern. This is the default format expected by Phaser when this field is omitted.

    *   **`TEXTURE_ATLAS_JSON_HASH`**: A Texture Atlas exported as a JSON document, containing data formatted as a hash (or "plain" JavaScript) object. This format implies a `.json` file extension, thus, omitting the `atlasURL` field yields a `<key>.json` URL path pattern.

    *   **`TEXTURE_ATLAS_XML_STARLING`**: A Texture Atlas exported as a XML document, containing data in "Starling XML" format. This format implies a `.xml` file extension, thus, omitting the `atlasURL` field yields a `<key>.xml` URL path pattern.

#### Example
```js
{
  key: 'example',
  type: 'atlas',
  atlasURL: 'example.json',
  textureURL: 'example.png',
  format: 'TEXTURE_ATLAS_JSON_HASH'
}
```


### `atlasJSONArray`

Alternative way of declaring a Texture Atlas in the "JSON Array" format.

#### Type Parameters
*   **`atlasURL`**: Optional. The path of the Texture Atlas metadata. When omitted, the pattern `<key>.json` is assumed.

*   **`textureURL`**: Optional. The path of the actual atlas texture. When omitted, the pattern `<key>.png` is assumed.

#### Example
```js
{
    key: 'example',
    type: 'atlasJSONArray',
    atlasURL: 'example.json',
    textureURL: 'example.png'
}
```


### `atlasJSONHash`

Alternative way of declaring a Texture Atlas in the "JSON Hash" format.

#### Type Parameters
*   **`atlasURL`**: Optional. The path of the Texture Atlas metadata. When omitted, the pattern `<key>.json` is assumed.

*   **`textureURL`**: Optional. The path of the actual atlas texture. When omitted, the pattern `<key>.png` is assumed.

#### Example
```js
{
    key: 'example',
    type: 'atlasJSONHash',
    atlasURL: 'example.json',
    textureURL: 'example.png'
}
```


### `atlasXML`

Alternative way of declaring a Starling XML Texture Atlas.

#### Type Parameters
*   **`atlasURL`**: Optional. The path of the Texture Atlas metadata. When omitted, the pattern `<key>.xml` is assumed.

*   **`textureURL`**: Optional. The path of the actual atlas texture. When omitted, the pattern `<key>.png` is assumed.

#### Example
```js
{
    key: 'example',
    type: 'atlasXML',
    atlasURL: 'example.json',
    textureURL: 'example.png'
}
```


### `audio`

Declare an audio sample file. Remember that the use of some [audio codecs][aufm] are restricted by some browsers and devices.

#### Type Parameters
*   **`urls`**: Mandatory. The paths to audio samples of different formats. It can be either a string, an array of strings or an array of objects in the format `{uri: 'blob:<resource-path>', type: '<type>'}`, specifying both the URL and its mimetype. When using arrays, Phaser will choose the first one compatible with the device.

*   **`autoDecode`**: Optional. A boolean value specifying whether an audio sample should be decoded after loading it or on demand at run-time. If omitted, defaults is `true`, meaning the audio sample should be decoded right after the file is loaded. Audio decoding is an asynchronous, non-blocking operation. Remember though that this is a highly expensive CPU operation on mobile devices.

#### Example
```js
{
    key: 'example',
    type: 'audio',
    urls: ['example.m4a', 'example.oga']
}
```


### `audiosprite`

Declare an audio sprite.

#### Type Parameters
*   **`urls`**: Mandatory. The paths to audio samples of different formats. It can be either a string, an array of strings or an array of objects in the format `{uri: 'blob:<resource-path>', type: '<type>'}`, specifying both the URL and its mimetype. When using arrays, Phaser will choose the first one compatible with the device.

*   **`jsonURL`**: Mandatory. The URL of that audio sprite metadata.

*   **`autoDecode`**: Optional. A boolean value specifying whether an audio sample should be decoded after loading it or on demand at run-time. If omitted, defaults is `true`, meaning the audio sample should be decoded right after the file is loaded. Audio decoding is an asynchronous, non-blocking operation. Remember though that this is a highly expensive CPU operation on mobile devices.

#### Example
```js
{
  key: 'example',
  type: 'audiosprite',
  urls: ['example.m4a', 'example.oga'],
  jsonURL: 'example.json'
}
```


### `binary`

Declare a file in an arbitrary binary format. To retrieve the file from the game cache, use the [`Phaser.Cache#getBinary()`][pcgb] method.

#### Type Parameters
*   **`url`**: Optional. The URL of the binary file. If omitted,  pattern in the format `<key>.bin` is assumed (i.e.: appending the `.bin` file extension).

*   **`callback`**: Optional. A callback function for post-processing.

    The callback receives two arguments, in order:

    *   `key`: The key of this asset;
    *   `data`: The raw binary data, returned as a ArrayBuffer.

    The callback function must return the parsed file contents to be stored in the game cache.

#### Example
```js
{
  key: 'example',
  type: 'binary',
  url: 'example.bin',
  callback: callbackFunction
}
```


### `bitmapFont`

Declare a bitmap font texture and its accompanying metadata.

#### Type Parameters

*   **`atlasURL`**: Optional. The URL of the font metadata. If omitted, a pattern in the format `<key>.xml` is assumed.

*   **`textureURL`**: Optional. The URL of the graphical texture containing the font glyphs. If omitted, a pattern in the format `<key>.png` is assumed.

*   **`xSpacing`**: Optional. A value specifying the horizontal spacing between the glyphs. Default is `0`.

*   **`ySpacing`**: Optional. A value specifying the vertical spacing of the lines, in pixels. Default is `0`.


#### Example
```js
{
  key: 'example',
  type: 'bitmapFont',
  atlasURL: 'example.json',
  textureURL: 'example.png',
  xSpacing: 0,
  ySpacing: 0
}
```


### `image`

Declare a still image.

#### Type Parameters
*   **`url`**: Optional. The path to this asset. If omitted, a pattern `<key>.png` is assumed.

#### Example
```js
{
  key: 'example',
  type: 'image',
  url: 'example.jpeg'
}
```


### `json`

Declare a JSON document. Use [`game.cache.getJSON(<key>)`][pcgj] to recover the file from the cache.

#### Type Parameters
*   **`url`**: The path to this asset. If omitted, a pattern `<key>.json` is assumed.

#### Example
```js
{
  key: 'example',
  type: 'json',
  url: 'example.json'
}
```


### `physics`

Declares a file in [Lime+Corona][phed] format. The file can be retrieved using the [`Phaser.Cache#getJSON(<key>)`][pcgj] method.

#### Type Parameters
*   **`url`**: The path to this asset. If omitted, a pattern `<key>.json` is assumed.

#### Example
```js
{
    key: 'example',
    type: 'physics',
    url: 'example.json'
}
```


### `shader`

Declare a fragment shader.

#### Type Parameters
*   **`url`**: The path to this asset. If omitted, a pattern `<key>.frag` is assumed.

#### Example
```js
{
  key: 'example',
  type: 'shader',
  url: 'example.frag'
}
```


### `spritesheet`

Declare the texture of a sprite sheet.

#### Type Parameters
*   **`url`**: Optional. The path to this asset. If omitted, a pattern `<key>.png` is assumed.

*   **`margin`**: Optional. The value of the margin, in pixels, within each frame. Default is `0`.

*   **`spacing`**: Optional. The value of the spacing between the frame cells. Default is `0`.

*   **`frameMax`**: Optional. How many frames the sprite sheet have. When not specified, Phaser will calculate the number of frames dividing the whole texture based on the values of the other parameters.

*   **`frameWidth`**: Mandatory. The width, in pixels, of a single frame in that sprite sheet.

*   **`frameHeight`**: Mandatory. The height, in pixels, of a single frame in that sprite sheet.


#### Example
```js
{
  key: 'example',
  type: 'spritesheet',
  url: 'example.gif',
  margin: 2,
  spacing: 2,
  frameMax: 16,
  frameWidth: 24,
  frameHeight: 32
}
```


### `text`

Declare a text file. Retrieve the file using [`game.cache.getText(<key>)`][pcgt].

#### Type Parameters
*   **`url`**: The path to this asset. If omitted, a pattern `<key>.txt` is assumed.

#### Example
```js
{
  key: 'example',
  type: 'text',
  url: 'example.txt'
}
```


### `tilemap`

Declare a [Tiled][tild] tilemap. Use different `image` entries to load the required textures.

#### Type Parameters
*   **`url`**: Optional. The path to that tilemap.

    When omitted, a pattern `<key>.<extension>` is assumed. The file extension is inferred by the declared format.

*   **`format`**: The format in which data the tilemap was exported. May be either `CSV` or `TILED_JSON`. Default value is `CSV`.

#### Example
```js
{
    key: 'example',
    type: 'tilemap',
    url: 'example.json',
    format: 'TILED_JSON'
}
```


### `video`

Declare a video file.

#### Type Parameters
*   **`urls`**: Mandatory. The paths of videos of different codecs. It can be either a string, an array of strings or an array of objects in the format `{uri: 'blob:<resource-path>', type: '<type>'}`, specifying both the URL and its mimetype. When using arrays, Phaser will choose the first one that is device-compatible. When using the `'blob:'` URL scheme, the mimetype of the embedding media codec is required.

#### Example
```js
{
    key: 'example',
    type: 'video',
    urls: ['example.m4v', 'example.webm']
}
```


### `xml`

Declare a XML document. Retrieve the file with `game.cache.getXML(<key>)`.

#### Type Parameters
*   **`url`**: The path to this asset. If omitted, a pattern `<key>.xml` is assumed.

#### Example
```js
{
    key: 'example',
    type: 'xml',
    url: 'example.xml'
}
```

<!--  -->

[tild]: http://www.mapeditor.org/
[aufm]: http://caniuse.com/#search=audio%20f
[phed]: https://www.codeandweb.com/physicseditor
[tpck]: https://www.codeandweb.com/texturepacker
[pcgj]: http://phaser.io/docs/2.6.2/Phaser.Cache.html#getJSON
[pcgt]: http://phaser.io/docs/2.6.2/Phaser.Cache.html#getText
[pcgb]: http://phaser.io/docs/2.6.2/Phaser.Cache.html#getBinary
[load]: http://phaser.io/docs/2.6.2/Phaser.Loader.html
[pack]: http://phaser.io/docs/2.6.2/Phaser.Loader.html#pack
