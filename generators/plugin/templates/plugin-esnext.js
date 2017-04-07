/*
 * <%- name %> plugin
 * <%- '='.repeat(name.length + 7) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

export default class <%- name %> extends Phaser.Plugin {

  constructor(game, parent) {
    super(game, parent);

    // TODO: Initialize third party libraries at this point.
  }

  init(/*...args*/) {
    // TODO: Set up the needed parameters for your plugin to work.
  }

  update() {
    // TODO: Update your plugin logic on every frame refresh.
  }

}
