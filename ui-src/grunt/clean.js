// -----------------------------
// Config clean
// https://github.com/gruntjs/grunt-contrib-clean
// Clean the static html files
// -----------------------------

module.exports = {
    all: [
        '<%= config.statix.path %>/css/*',
        '<%= config.statix.path %>/js/*',
        '<%= config.statix.path %>/**/*.html',
        '<%= config.statix.path %>/sitemap.xml',
        '<%= config.statix.path %>/robots.xml'
    ]
};
