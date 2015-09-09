// -----------------------------
// Config Assemble
// https://github.com/assemble/assemble
// Generates html pages based on the HandleBars templates
// -----------------------------

module.exports = {
    options: {
        data: 'src/**/*.{json,yml}',
        assets: '<%= site.destination %>/assets',
        helpers: ['helper-moment', 'handlebars-helper-eachitems', 'src/helpers/helper-*.js'],
        partials: ['<%= site.src %>/templates/includes/**/*.hbs'],
        flatten: false,
        layout: 'default.hbs',
        layoutdir: '<%= site.src %>/templates/layouts'
    },
    default: {
        files: [{
            cwd: '<%= site.src %>/templates/pages/',
            dest: '<%= site.destination %>',
            expand: true,
            src: ['**/*.hbs']
        }]
    }
};
