/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
 * My custom scene.
 */

export default class <%- name %> extends Phaser.Scene {
<% for (let method of methods) { -%>

  <%- method %>() {
    //  TODO: Stub
  }
<% } -%>

}
