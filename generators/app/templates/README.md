# [<%= title %>](https://example.com/my-game/)

<% if (description) { -%>
>   <%= description %>
<% } -%>

---

Congrats! To start developing you new game right away, type the following command in a terminal:

_Tip: you can also use Gulp to manage development tasks._

```sh
npm start     # Also `gulp`: launches the project development environment.
```

The following npm scripts are also available:

```sh
npm run dist  # Or `gulp dist`: Prepares the game for distribution.
npm run clean # Or `gulp dist:clean`: Deletes build files.
```

Should you consider distributing your game as an open source project, please [include a LICENSE file](http://choosealicense.com/) in your project root.
