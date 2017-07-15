/*
 * <%- name %> state
 * <%- '='.repeat(6 + name.length) %>
 *
<% if (description) { -%>
 * <%- description %>
<% } -%>
 */

'use strict';
<% methods.forEach(method => { -%>

exports.<%- method %> = function (<%- method !== 'init' ? '/*game*/' : '' %>) {
  // TODO: Stub
};
<% }) -%>
