/*
 * <%- name %> plugin
 * <%- underline %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';

module.exports = <%- name %>;

function <%- name %>(game, parent) {
  Phaser.Plugin.call(this, game, parent);

  // TODO: Initialize third party libraries and other stuff here.
}
<%- name %>.prototype = Object.create(Phaser.Plugin.prototype);
<%- name %>.prototype.constructor = <%- name %>;

<%- name %>.prototype.init = function (/*...args*/) {
  // TODO: Set up the needed parameters for your plugin to work.
};

<%- name %>.prototype.update = function () {
  // TODO: Update your plugin logic on every frame refresh.
};
