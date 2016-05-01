/*
 * <%- name %> state
<% if (description) { -%>
 *
 * <%- description %>
<% } -%>
 */

export default class <%- name %> extends Phaser.State {

<% if (withInit) { -%>
  init() {
    // TODO: Stub
  }

<% } -%>
<% if (withPreload) { -%>
  preload() {
    // TODO: Stub
  }

<% } -%>
<% if (withCreate) { -%>
  create() {
    // TODO: Stub
  }

<% } -%>
<% if (withUpdate) { -%>
  update() {
    // TODO: Stub
  }

<% } -%>
<% if (withRender) { -%>
  render() {
    // TODO: Stub
  }

<% } -%>
<% if (withShutdown) { -%>
  shutdown() {
    // TODO: Stub
  }

<% } -%>
}
