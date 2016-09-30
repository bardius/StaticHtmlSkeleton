// -----------------------------
// Config Assemble
// https://github.com/assemble/assemble
// Generates html pages based on the HandleBars templates
//
// Includes handlebars helpers for extra functionality
// http://assemble.io/helpers
//
// Includes assemble sitemap to generate sitemap.xml
// https://github.com/assemble/grunt-assemble-sitemap
// -----------------------------

module.exports = {
    options: {
        date: new Date(),
        releaseVersion: '<%=releaseVersion%>',
        cssFilePath: '/css/<%=config.css.releaseFile%>',
        jsFilePath: '/js/<%=config.js.releaseFile%>',
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
        layoutdir: '<%= config.site.src %>/templates/layouts',
        plugins: [
            'grunt-assemble-sitemap'
        ],
        sitemap: {
            homepage: 'http://www.domainname.com',
            relativedest: true,
            changefreq: 'weekly',
            priority: '0.5',
            exclude: ["403", "404", "500"],
            robot: true
        }
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
