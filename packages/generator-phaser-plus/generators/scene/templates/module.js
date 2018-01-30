/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
 * My custom scene.
 */

export default class <%- name %> extends Phaser.Scene {

  constructor(config = {}) {
    super(Object.assign({key: '<%- name %>'}, config));
  }
<% methods.forEach(method => { -%>

  <%- method %>() {
    //  TODO: Stub
  }
<% }) -%>

}
