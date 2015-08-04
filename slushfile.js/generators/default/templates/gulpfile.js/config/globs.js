/*
 * Glob patterns
 * ============================================================================
 *
 * Information about the project assets and source code. Very specific to the
 * development tasks, telling where to read the project source code for
 * processing and compilation.
 */

'use strict';


var dirs = require('./dirs');


module.exports = {
  // Views are transformed in HTML files by processing three kinds of source
  // files. First, there are JSON data, containing info like the game's title
  // and description. Then, there are partials, which are smaller and reusable
  // chunks of HTML markup. Lastly, the main templates, that join the former
  // pieces together to compose fully featured HTML documents.
  views: {
    get data () { return dirs.views + '/data/*.json'; },
    get partials () { return dirs.views + '/partials/*.hbs'; },
    get templates () { return dirs.views + '/templates/*.hbs'; }
  },

  // LESS scripts become compatible cross-browser style sheets.
  get styles () { return dirs.styles  + '/*.less'; },

  // Finds this project static assets to be copied for distribution.
  get assets () { return dirs.static  + '/**'; },

  // Finds the scripts to be compiled.
  get scripts () { return dirs.scripts + '/**/*.js'; }
};
