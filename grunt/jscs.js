// -----------------------------
// Config JSCS
// https://github.com/dsheiko/grunt-jscs
// Check jshint rules on the js files
// Manage the options inside .jscs.json file
// -----------------------------

module.exports = {
    src: '<%=config.js.scriptFileList%>',
    options: {
        config: ".jscs.json"
    }
};
