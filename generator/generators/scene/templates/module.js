/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

export default class <%- name %> extends Phaser.Scene {
<% methods.forEach(method => { -%>

  <%- method %>() {
    //  TODO: Stub
  }
<% }) -%>

}
