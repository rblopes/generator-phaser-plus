/*
 * <%- name %>
 * <%- '='.repeat(name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';

module.exports = Phaser.Class({
<% if (baseClass) { %>
  Extends: Phaser.GameObjects.<%- baseClass %>,
<% } %>
  initialize: function <%- name %>(scene/*, ...args*/) {
<% if (baseClass) { -%>
      Phaser.GameObjects.<%- baseClass %>.call(this, scene/*, ...args*/);

<% } -%>
    //  TODO:
    //    1. Edit constructor parameters accordingly.
    //    2. Adjust object properties.
  },

  update: function() {
    //  TODO: Stub.
  }

});
