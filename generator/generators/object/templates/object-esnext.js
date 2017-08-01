/*
 * <%- name %>
 * <%- '='.repeat(name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

<% if (baseClass) { -%>
export default class <%- name %> extends Phaser.GameObjects.<%- baseClass %> {
<% } else { -%>
export default class <%- name %> {
<% } -%>

  constructor(scene/*, ...args*/) {
<% if (baseClass) { -%>
    super(scene/*, ...args*/);

<% } -%>
    //  TODO:
    //    1. Edit constructor parameters accordingly.
    //    2. Adjust object properties.
  }

  update() {
    //  TODO: Stub.
  }

}
