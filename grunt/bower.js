// -----------------------------
// Config Bower
// https://github.com/yatskevich/grunt-bower-task
// Install bower dependencies
// -----------------------------

module.exports = {
    /**
     * Bower install
     * https://github.com/yatskevich/grunt-bower-task
     * Install bower dependencies
     */
    install: {
        options: {
            targetDir: "./public_html/bower_components",
            install: true
        }
    }
};
