/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

export default class <%- name %> extends Phaser.Scene {
<% for (const method of methods) { -%>

  <%- method %>() {
    //  TODO: Stub
  }
<% } -%>

}
