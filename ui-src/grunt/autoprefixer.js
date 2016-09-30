/**
 * Config Autoprefixer
 * https://github.com/nDmitry/grunt-autoprefixer
 * https://github.com/ai/autoprefixer
 * Auto prefixes your CSS using caniuse data
 */
module.exports = {
    release: {
        options: {
            // Task-specific options go here - we are supporting
            // the last 2 browsers, any browsers with >2% market share,
            // and ensuring we support IE9 with prefixes
            browsers: [
                '> 2%',
                'last 2 versions',
                'ie > 9',
                'iOS > 6',
                'Android > 3'
            ],
            map: false
        },
        files: {
            '<%= config.css.path %>/<%= config.css.releaseFile %>' : '<%= config.css.path %>/<%= config.css.releaseFile %>'
        }
    }
};
