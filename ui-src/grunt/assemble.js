// -----------------------------
// Config Assemble
// https://github.com/assemble/assemble
// Generates html pages based on the HandleBars templates
//
// Includes handlebars helpers for extra functionality
// http://assemble.io/helpers
// -----------------------------

module.exports = {
    options: {
        data: '<%= config.site.src %>/data/**/*.{json,yml}',
        assets: '<%= config.site.dest %>/assets',
        helpers: [
            '<%= config.site.src %>/helpers/helper-*.js'
        ],
        partials: [
            '<%= config.site.src %>/templates/includes/**/*.hbs'
        ],
        flatten: false,
        layout: 'default.hbs',
        layoutdir: '<%= config.site.src %>/templates/layouts'
    },
    default: {
        files: [{
            cwd: '<%= config.site.src %>/templates/pages/',
            dest: '<%= config.site.dest %>',
            expand: true,
            src: ['**/*.hbs']
        }]
    }
};
