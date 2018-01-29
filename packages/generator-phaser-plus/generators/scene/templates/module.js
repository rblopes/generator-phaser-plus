/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
 * My custom scene.
 */

export default class <%- name %> extends Phaser.Scene {
<% methods.forEach(method => { -%>

  <%- method %>() {
    //  TODO: Stub
  }
<% }) -%>

}
