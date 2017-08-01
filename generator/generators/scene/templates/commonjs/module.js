/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';
<% for (const method of methods) { -%>

exports.<%- method %> = function () {
  //  TODO: Stub
};
<% } -%>
