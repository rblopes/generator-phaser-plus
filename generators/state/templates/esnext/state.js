/*
 * <%- name %> state
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

export default class <%- name %> extends Phaser.State {
<% methods.forEach(method => { -%>

  <%- method %>() {
    // TODO: Stub
  }
<% }) -%>

}
