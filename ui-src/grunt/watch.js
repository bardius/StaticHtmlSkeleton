// -----------------------------
// Config Watch
// https://github.com/gruntjs/grunt-contrib-watch
// Watches your scss, js, hbs etc for changes and compiles them
// -----------------------------

module.exports = {
    grunt: {
        files: ['Gruntfile.js', '<%= config.gruntTasks.path %>/**/*.js'],
        tasks: ['jsdev']
    },
    js: {
        files: ['<%=config.js.scriptFileList%>'],
        tasks: ['jsdev']
    },
    scss: {
        files: ['<%= config.scss.path %>/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:release']
    },
    hbs: {
        files: ['<%= config.hbs.path %>/**/*.hbs'],
        tasks: ['assemble']
    },
    livereload: {
        options: {
            livereload: false
        },
        files: [
            '<%= config.css.path %>/*.css'
        ]
    }
};
