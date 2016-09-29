// -----------------------------
// Config Connect
// https://github.com/gruntjs/grunt-contrib-connect
// Start a static web server
// -----------------------------

module.exports = {
    server: {
        options: {
            port: '<%= config.host.port %>',
            base: '<%= config.host.base %>',
            // hostname: 'mysite.local',
            open: '<%= config.host.url %>',
            livereload: true
        }
    }
};
