// ------------------------------
// Grunt Configuration/Setup
// ------------------------------

module.exports = function (grunt) {
    var path = require('path');

    // Project configuration
    var options = {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'ui-src/grunt'),
        // auto grunt.initConfig
        init: true,
        // data passed into config.
        data: {
            pkg: grunt.file.readJSON('package.json'),
            releaseVersion: grunt.option('releaseVersion') || '',
            config: {
                /**
                 * Config - Edit this section
                 * ==========================
                 * Choose javascript release filename
                 * Choose javascript release location
                 * Choose javascript files to be uglified
                 * Choose images location
                 * Choose css release location
                 * Choose scss files to be compiled
                 * Choose foundation scss location
                 * Choose bower components location
                 */
                js: {
                    // <%=config.js.releaseDir%>
                    releaseDir: 'public_html/js/',
                    // <%=config.js.releaseFile%>
                    releaseFile: 'scripts.min.js',
                    // <%=config.js.scriptFileList%>
                    scriptFileList: [
                        // ES5 Shims for legacy browsers
                        //'ui-src/bower_components/es5-shim/es5-shim.js',
                        //'ui-src/bower_components/es5-shim/es5-sham.js',

                        // Libraries required by Foundation
                        'ui-src/bower_components/jquery/dist/jquery.js',
                        'ui-src/bower_components/what-input/what-input.js',

                        // Include full Foundation 6 scripts
                        'ui-src/bower_components/foundation-sites/dist/foundation.js',
                        'ui-src/bower_components/foundation-datepicker/js/foundation-datepicker.js',

                        // Core Foundation files
                        //"ui-src/bower_components/foundation-sites/js/foundation.core.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.util.*.js",

                        // Individual Foundation components
                        // If you aren't using a component, just remove it from the list,
                        //"ui-src/bower_components/foundation-sites/js/foundation.abide.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.accordion.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.accordionMenu.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.drilldown.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.dropdown.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.dropdownMenu.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.equalizer.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.interchange.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.magellan.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.offcanvas.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.orbit.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.responsiveMenu.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.responsiveToggle.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.reveal.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.slider.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.sticky.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.tabs.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.toggler.js",
                        //"ui-src/bower_components/foundation-sites/js/foundation.tooltip.js",

                        // Include helper scripts
                        'ui-src/js/helpers/console.js',
                        'ui-src/js/helpers/environment.js',
                        'ui-src/js/helpers/notification-dispatcher.js',
                        'ui-src/js/helpers/supports.js',
                        'ui-src/js/helpers/cookies.js',

                        // Include infinite scroller pagination scripts
                        //'ui-src/bower_components/jquery-ias/src/jquery-ias.js',
                        //'ui-src/bower_components/jquery-ias/src/callbacks.js',
                        //'ui-src/bower_components/jquery-ias/src/extension/spinner.js',
                        //'ui-src/bower_components/jquery-ias/src/extension/noneleft.js',

                        // Include custom jQuery plugin scripts
                        //'ui-src/js/sample_plugin.js',

                        // Main JavaScript application bootstrap file
                        'ui-src/js/cookiePolicy.js',
                        'ui-src/js/scripts.js'
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
                    path: 'ui-src/scss'
                },
                f6scss: {
                    // <%= config.f6scss.path %>
                    path: 'ui-src/bower_components/foundation-sites/scss'
                },
                motionUIscss: {
                    // <%= config.motionUIscss.path %>
                    path: 'ui-src/bower_components/motion-ui/src'
                },
                jstests: {
                    // <%= config.jstests.path %>
                    path: 'ui-src/js/tests'
                },
                host: {
                    // <%= config.host.url %>
                    url: 'http://localhost:8000',
                    // <%= config.host.base %>
                    base: 'public_html',
                    // <%= config.host.port %>
                    port: '8000'
                },
                // <%= config.site %>
                site: {
                    src: './statix-src',
                    dest: './public_html'
                },
                hbs: {
                    // <%= config.hbs.path %>
                    path: 'statix-src/templates'
                },
                gruntTasks:{
                    // <%= config.gruntTasks.path %>
                    path: 'ui-src/grunt'
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

    /* ==========================================================================================
     Available tasks:

     * grunt :                      run scsslint, sass, autoprefixer, eslint, concat, babel
     * grunt jsdev :                run eslint, concat, babel
     * grunt dev :                  run scsslint, sass, autoprefixer, eslint, concat, babel
     * grunt release :              run scsslint, sass, autoprefixer, csso, concat, babel, uglify
     * grunt runtests :             run jasmine
     * grunt serve :                watch js & scss and run a local server
     * grunt generate :             run assemble, uglify and sass
     * grunt travis :               run scsslint, sass, autoprefixer, csso, concat, babel, uglify
     ============================================================================================ */

    /**
     * GRUNT
     * Default task
     * run sass, autoprefixer, eslint, concat, babel
     */
        // Default task
    grunt.registerTask('default', [
        'dev'
    ]);


    /**
     * GRUNT JSDEV
     * A task for JavaScript development
     * run eslint, concat, babel
     */
    grunt.registerTask('jsdev', [
        'eslint',
        'concat:js',
        'babel'
    ]);


    /**
     * GRUNT DEV
     * A task for development
     * run sass, autoprefixer, eslint, concat, babel
     */
    grunt.registerTask('dev', [
        'jsdev',
        'scsslint',
        'sass:dev',
        'autoprefixer:release'
    ]);


    /**
     * GRUNT RELEASE
     * A task for your production environment
     * run sass, autoprefixer, csso, concat, uglify
     */
    grunt.registerTask('release', [
        'eslint',
        'concat:js',
        'babel',
        'uglify:release',
        'scsslint',
        'sass:release',
        'autoprefixer:release',
        'csso:release'
    ]);


    /**
     * GRUNT RUNTESTS
     * A task for testing
     * run jasmine
     */
    grunt.registerTask('runtests', [
        'jasmine'
    ]);


    /**
     * GRUNT TRAVIS
     * A task for Travis CI to test build
     * run sass, autoprefixer, csso, concat, uglify
     */
    grunt.registerTask('travis', [
        'release'
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
};
