// ------------------------------
// Grunt Configuration/Setup
// ------------------------------

module.exports = function (grunt) {

    'use strict';

    // Project configuration
    var options = {
        init: true,
        data: {
            pkg: grunt.file.readJSON('package.json'),
            site: grunt.file.readYAML('statix-src/data/site.yml'),
            releaseVersion: grunt.option('releaseVersion') || '',
            config: {
                /**
                 * Config - Edit this section
                 * ==========================
                 * Choose javascript release filename
                 * Choose javascript release location
                 * Choose javascript files to be uglified
                 */
                js: {
                    // <%=config.js.releaseDir%>
                    releaseDir: 'public_html/js/release/',
                    // <%=config.js.releaseFile%>
                    releaseFile: 'scripts.min.js',
                    // <%=config.js.modernizrReleaseFile%>
                    modernizrReleaseFile: 'modernizr.min.js',
                    // <%=config.js.scriptFileList%>
                    scriptFileList: [
                        'public_html/bower_components/jquery/dist/jquery.js',
                        // Include only used Foundation 5 scripts if needed instead of the minified full framework ones
                        'public_html/bower_components/foundation/js/foundation.js',
                        //'public_html/bower_components/foundation/js/foundation.js',
                        //'public_html/bower_components/foundation/js/foundation/*.js',
                        'public_html/js/helpers/environment.js',
                        'public_html/js/helpers/supports.js',
                        'public_html/js/helpers/console.js',
                        'public_html/js/helpers/limit.js',
                        'public_html/js/helpers/notification-dispatcher.js',
                        'public_html/js/helpers/smartResize.js',
                        'public_html/js/libs/mobile/normalized.addressbar.js',
                        'public_html/js/script.js'
                    ],
                    // <%=config.js.modernizrScriptFile%>
                    modernizrScriptFile: [
                        'public_html/bower_components/modernizr/modernizr.js'
                    ]
                },
                img: {
                    // <%= config.img.path %>
                    path: 'public_html/images'
                },
                css: {
                    // <%= config.css.path %>
                    path: 'public_html/css'
                },
                scss: {
                    // <%= config.scss.path %>
                    path: 'public_html/scss'
                },
                f5scss: {
                    // <%= config.f5scss.path %>
                    path: 'public_html/bower_components/foundation/scss'
                },
                bower: {
                    // <%= config.bower.path %>
                    path: './public_html/bower_components'
                },
                host: {
                    // <%= config.host.url %>
                    url: 'http://localhost:8000',
                    // <%= config.host.base %>
                    base: 'public_html',
                    // <%= config.host.port %>
                    port: '8000'
                },
                jstests: {
                    // <%= config.jstests.path %>
                    path: 'public_html/js/tests'
                },
                statix: {
                    // <%= config.statix.path %>
                    path: 'public_html'
                }
            }
        }
    };

    // Load the grunt configuration
    require('load-grunt-config')(grunt, options);
    require('jit-grunt')(grunt);

    // Load all the grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('assemble');


    /* ==========================================================================
     Available tasks:

     * grunt : run jshint, uglify and sass
     * grunt watch : run sass, autoprefixer, csssplit, uglify
     * grunt dev : run sass, autoprefixer, csssplit, uglify
     * grunt jsdev : run jshint, uglify
     * grunt deploy : run sass, autoprefixer, combine_mq, csssplit, csso, uglify
     * grunt setup :  run bower install, uglify and sass
     * grunt serve  : watch js & scss and run a local server
     * grunt generate  : run assemble, uglify and sass
     * grunt travis :  run bower install, uglify and sass
     * grunt jasmine :  run bower install, uglify and sass
     ========================================================================== */

    /**
     * GRUNT
     * Default task
     * run sass, autoprefixer, csssplit, uglify
     */
    // Default task
    grunt.registerTask('default', [
        'dev'
    ]);


    /**
     * GRUNT JSDEV
     * A task for development
     * run sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask('jsdev', [
        //'jshint',
        'uglify:release'
    ]);


    /**
     * GRUNT DEV
     * A task for development
     * run sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask('dev', [
        'jsdev',
        'sass:release',
        'postcss:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT DEPLOY
     * A task for your production environment
     * run sass, autoprefixer, combine_mq, csssplit, csso, uglify
     */
    grunt.registerTask('deploy', [
        'uglify:production',
        'sass:production',
        'postcss:release',
        'combine_mq:release',
        'csssplit:release',
        'csso:release'
    ]);


    /**
     * GRUNT SETUP
     * A task for downloading dependencies and initial build run
     * run bower install, sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask('setup', [
        'bower:install',
        'dev'
    ]);


    /**
     * GRUNT GENERATE
     * A task for generating static HTML files
     * run assemble, sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask("generate", [
        'dev',
        'assemble'
    ]);


    /**
     * GRUNT SERVE
     * A task for a static server with a watch
     * run assemble, sass, autoprefixer, csssplit, uglify, connect and watch
     */
    grunt.registerTask("serve", [
        'generate',
        'connect',
        'watch'
    ]);


    /**
     * GRUNT TRAVIS
     * A task for Travis CI to test build
     * run sass, autoprefixer, combine_mq, csssplit, csso, uglify
     */
    grunt.registerTask('travis', [
        'deploy'
    ]);
};
