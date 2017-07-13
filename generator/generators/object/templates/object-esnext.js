/*
 * <%- name %>
 * <%- '='.repeat(name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

<% if (baseClass) { -%>
export default class <%- name %> extends Phaser.<%- baseClass %> {
<% } else { -%>
export default class <%- name %> {
<% } -%>

  constructor(game, ...args) {
<% if (baseClass) { -%>
    super(game, ...args);

<% } -%>
    // TODO:
    //   1. Edit constructor parameters accordingly.
    //   2. Adjust object properties.
  }

  update() {
    // TODO: Stub.
  }

}
