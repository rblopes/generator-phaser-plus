/*
 * <%- name %> scene
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';
<% methods.forEach(method => { -%>

exports.<%- method %> = function () {
  //  TODO: Stub
};
<% }) -%>
