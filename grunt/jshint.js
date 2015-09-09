// -----------------------------
// Config JSHint
// https://github.com/gruntjs/grunt-contrib-jshint
// Check jshint rules on the js files
// Manage the options inside .jshintrc file
// -----------------------------

module.exports = {
    all: '<%=config.js.scriptFileList%>',
    options: {
        jshintrc: '.jshintrc'
    }
};
