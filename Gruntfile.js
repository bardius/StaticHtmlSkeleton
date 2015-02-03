module.exports = function (grunt) {

    'use strict';

    /**
     * Project configuration
     */
    grunt.initConfig({
        pkg: require('./package'), // <%=pkg.name%> grunt.file.readJSON('package.json'),

        site: grunt.file.readYAML('statix-src/data/site.yml'),
        /**
         * Config - Edit this section
         * ==========================
         * Choose javascript release filename
         * Choose javascript release location
         * Choose javascript files to be uglified
         */
        config: {
            js: {
                // <%=config.js.releaseDir%>
                releaseDir: 'public_html/js/release/',
                // <%=config.js.releaseFile%>
                releaseFile: 'scripts.min.js',
                // <%=config.js.modernizrReleaseFile%>
                modernizrReleaseFile: 'modernizr.min.js',
                // <%=config.js.scriptFileList%>
                scriptFileList: [
                    'public_html/bower_components/jquery/dist/jquery.min.js',
                    // Include only used Foundation 5 scripts if needed instead of the minified full framework ones
                    //'public_html/bower_components/foundation/js/foundation.js',
                    //'public_html/bower_components/foundation/js/foundation/*.js',

                    'public_html/bower_components/foundation/js/foundation.min.js',
                    'public_html/js/helpers/environment.js',
                    'public_html/js/helpers/supports.js',
                    'public_html/js/helpers/console.js',
                    'public_html/js/helpers/limit.js',
                    'public_html/js/helpers/notification-dispatcher.js',
                    'public_html/js/helpers/smartResize.js',
                    'public_html/js/libs/mobile/normalized.addressbar.js',
                    'public_html/js/script.js'
                ],

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
                url: 'http://localhost:8000/public_html'
            },
            statix: {
                path: 'public_html'
            }
        },
        /**
         * Watch
         * https://github.com/gruntjs/grunt-contrib-watch
         * Watches your scss, js etc for changes and compiles them
         */
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            scss: {
                files: ['<%= config.scss.path %>/**/*.scss'],
                tasks: ['sass:release', 'autoprefixer:release']
            },
            js: {
                files: ['<%=config.js.scriptFileList%>', 'Gruntfile.js'],
                tasks: ['uglify']
            },
            livereload: {
                options: {livereload: true},
                files: ['<%= config.css.path %>/*.css']
            },
            assemble: {
                files: ['<%= site.src %>/templates/**/*.hbs', '<%= site.src %>/templates/**/*.md'],
                tasks: ['clean', 'assemble'],
                options: {
                    livereload: true
                }
            }
        },
        /**
         * Sass compilation
         * https://github.com/gruntjs/grunt-contrib-sass
         * Also creates source maps
         */
        sass: {
            release: {
                options: {
                    loadPath: [
                        '<%= config.f5scss.path %>',
                    ],
                    unixNewlines: true,
                    style: 'expanded', //compressed - expanded
                    lineNumbers: false,
                    debugInfo: false,
                    precision: 8,
                    sourcemap: false
                },
                files: {
                    '<%= config.css.path %>/styles.css': '<%= config.scss.path %>/app.scss'
                }
            },
            minifyparts: {
                options: {
                    unixNewlines: false,
                    style: 'compressed',
                    lineNumbers: false,
                    debugInfo: false,
                    precision: 8,
                    sourcemap: false
                },
                files: {
                    '<%= config.css.path %>/styles_bundle_1.css': '<%= config.css.path %>/styles_bundle_1.css',
                    '<%= config.css.path %>/styles_bundle_2.css': '<%= config.css.path %>/styles_bundle_2.css'
                }
            },
            production: {
                options: {
                    loadPath: [
                        '<%= config.f5scss.path %>'
                    ],
                    unixNewlines: false,
                    style: 'compressed', //compressed - expanded
                    lineNumbers: false,
                    debugInfo: false,
                    precision: 8,
                    sourcemap: false
                },
                files: {
                    '<%= config.css.path %>/styles.css': '<%= config.scss.path %>/app.scss'
                }
            }
        },
        /**
         * Autoprefixer
         * https://github.com/nDmitry/grunt-autoprefixer
         * https://github.com/ai/autoprefixer
         * Auto prefixes your CSS using caniuse data
         */
        autoprefixer: {
            release: {
                options: {
                    // Task-specific options go here - we are supporting
                    // the last 2 browsers, any browsers with >1% market share,
                    // and ensuring we support IE7 + 8 with prefixes
                    browsers: ['> 3%', 'last 3 versions', 'firefox > 3.6', 'ie > 8'],
                    map: true
                },
                files: {
                    '<%= config.css.path %>/styles.css': '<%= config.css.path %>/styles.css'
                }
            }
        },
        /**
         * combine_mq
         * https://github.com/frontendfriends/grunt-combine-mq
         * Combine matching media queries into one media query definition.
         * Useful for CSS generated by preprocessors using nested media queries.
         */
        combine_mq: {
            release: {
                options: {
                    beautify: false
                },
                src: '<%= config.css.path %>/styles.css',
                dest: '<%= config.css.path %>/styles.css'
            }
        },
        /**
         * Uglify
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Minifies and concatinates your JS
         * Also creates source maps
         */
        uglify: {
            options: {
                mangle: true, // mangle: Turn on or off mangling
                beautify: false, // beautify: beautify your code for debugging/troubleshooting purposes
                compress: false,
                // report: 'gzip', // report: Show file size report
                sourceMap: '<%=config.js.releaseDir%><%=config.js.releaseFile%>.map',
                sourceMappingURL: '/<%=config.js.releaseFile%>.map'
            },
            js: {
                files: {
                    '<%=config.js.releaseDir%><%=config.js.releaseFile%>': '<%=config.js.scriptFileList%>',
                    '<%= config.js.releaseDir %><%= config.js.modernizrReleaseFile %>': '<%= config.js.modernizrScriptFile %>'
                }
            }
        },
        /**
         * csssplit
         * https://github.com/project-collins/grunt-csssplit
         * Auto splits css to multiple files as
         * IE9 has a per file css rule limit of 4096
         */
        csssplit: {
            release: {
                src: ['<%= config.css.path %>/styles.css'],
                dest: '<%= config.css.path %>',
                options: {
                    maxSelectors: 4095,
                    maxPages: 10,
                    suffix: '_bundle_'
                }
            }
        },
        /**
         * CSSO
         * https://github.com/t32k/grunt-csso
         * Minify CSS files with CSSO
         */
        csso: {
            release: {
                files: {
                    '<%= config.css.path %>/styles.css': '<%= config.css.path %>/styles.css',
                    '<%= config.css.path %>/styles_bundle_1.css': '<%= config.css.path %>/styles_bundle_1.css',
                    '<%= config.css.path %>/styles_bundle_2.css': '<%= config.css.path %>/styles_bundle_2.css'
                }
            }
        },
        /**
         * Connect
         * https://github.com/gruntjs/grunt-contrib-connect
         * Start a static web server
         */
        connect: {
            server: {
                options: {
                    // port: 9001,
                    // hostname: 'mysite.local',
                    open: '<%= config.host.url %>',
                    livereload: true
                }
            }
        },
        /**
         * JSHint
         * https://github.com/gruntjs/grunt-contrib-jshint
         * Manage the options inside .jshintrc file
         */
        jshint: {
            all: '<%=config.js.scriptFileList%>',
            options: {
                jshintrc: '.jshintrc'
            }
        },
        /**
         * JSCS
         * https://github.com/dsheiko/grunt-jscs
         * Manage the options inside .jscs.json file
         */
        jscs: {
            src: '<%=config.js.scriptFileList%>',
            options: {
                config: ".jscs.json"
            }
        },
        /**
         * Assemble
         * Generate the static html files
         */
        assemble: {
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
        },
        /**
         * Clean
         * Clean the static html files
         */
        clean: {
            all: ['<%= config.statix.path %>/**/*.html']
        },
        /**
         * Bower install
         * https://github.com/yatskevich/grunt-bower-task
         * Install bower dependencies
         */
        bower: {
            install: {
                options: {
                    targetDir: "./public_html/bower_components", //<%= config.bower.path %>,
                    install: true
                }
            }
        }

    });

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
     ========================================================================== */

    /**
     * GRUNT
     * Default task
     * run sass, autoprefixer, csssplit, uglify
     */
    // Default task
    grunt.registerTask('default', [
        //'jshint',
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT DEV
     * A task for development
     * run sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask('dev', [
        //'jshint',
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT JSDEV
     * A task for development
     * run sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask('jsdev', [
        //'jshint',
        'jshint',
        'uglify'
    ]);


    /**
     * GRUNT DEPLOY
     * A task for your production environment
     * run sass, autoprefixer, combine_mq, csssplit, csso, uglify
     */
    grunt.registerTask('deploy', [
        //'jshint',
        'uglify',
        'sass:production',
        'autoprefixer:release',
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
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT GENERATE
     * A task for generating static HTML files
     * run assemble, sass, autoprefixer, csssplit, uglify
     */
    grunt.registerTask("generate", [
        //'jshint',
        'assemble',
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release'
    ]);


    /**
     * GRUNT SERVE
     * A task for a static server with a watch
     * run assemble, sass, autoprefixer, csssplit, uglify, connect and watch
     */
    grunt.registerTask("serve", [
        //'jshint',
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release',
        'assemble',
        'connect',
        'watch'
    ]);


    /**
     * GRUNT TRAVIS
     * A task for Travis CI to test build
     * run bower install, sass, autoprefixer, csssplit, csso, uglify
     */
    grunt.registerTask('travis', [
        //'jshint',
        'uglify',
        'sass:release',
        'autoprefixer:release',
        'csssplit:release',
        'csso:release'
    ]);
};