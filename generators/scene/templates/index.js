<%- contents -%>
<% for (const [name, filename] of scenes) { -%>
export {default as <%- name %>} from '<%- filename %>';
<% } -%>
