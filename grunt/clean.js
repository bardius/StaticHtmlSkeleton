// -----------------------------
// Config clean
// https://github.com/gruntjs/grunt-contrib-clean
// Clean the static html files
// -----------------------------

module.exports = {
    all: ['<%= config.statix.path %>/**/*.html']
};
