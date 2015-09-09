// -----------------------------
// Config Jasmine
// https://github.com/gruntjs/grunt-contrib-jasmine
// Run Jasmine unit tests
// -----------------------------

module.exports = {
    tests: {
        src: '<%=config.js.releaseDir%>/*.js',
        options: {
            vendor: [
                'public_html/bower_components/jquery/dist/jquery.js',
                'public_html/bower_components/jasmine-jquery/lib/jasmine-jquery.js'
            ],
            specs: '<%= config.jstests.path %>/*.spec.js'
        }
    }
};
