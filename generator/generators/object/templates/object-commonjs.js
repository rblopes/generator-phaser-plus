/*
 * <%- name %>
 * <%- '='.repeat(name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';

module.exports = <%- name %>;

function <%- name %>(game/*, ...args*/) {
<% if (baseClass) { -%>
  Phaser.<%- baseClass %>.call(this, game/*, ...args*/);

<% } -%>
  // TODO:
  //   1. Edit constructor parameters accordingly.
  //   2. Adjust object properties.
}
<% if (baseClass) { -%>
<%- name %>.prototype = Object.create(Phaser.<%- baseClass %>.prototype);
<%- name %>.prototype.constructor = <%- name %>;
<% } -%>

<%- name %>.prototype.update = function () {
  // TODO: Stub.
};
