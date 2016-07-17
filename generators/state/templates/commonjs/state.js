/*
 * <%- name %> state
 * <%- underline %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';

<% if (withInit) { -%>
exports.init = function (/*game*/) {
  // TODO: Stub
};

<% } -%>
<% if (withPreload) { -%>
exports.preload = function (/*game*/) {
  // TODO: Stub
};

<% } -%>
<% if (withCreate) { -%>
exports.create = function (/*game*/) {
  // TODO: Stub
};

<% } -%>
<% if (withUpdate) { -%>
exports.update = function (/*game*/) {
  // TODO: Stub
};

<% } -%>
<% if (withRender) { -%>
exports.render = function (/*game*/) {
  // TODO: Stub
};

<% } -%>
<% if (withShutdown) { -%>
exports.shutdown = function (/*game*/) {
  // TODO: Stub
};
<% } -%>
