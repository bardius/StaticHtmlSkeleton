/* global $ */
/**
 * A jQuery plugin to add a class name and some text to selected elements
 *
 * Usage:
 * elem = $('.my-element').sample_plugin({ 'classes': 'my-custom-class', 'text': 'Sample' });
 */
(function($) {
    const defaults = {
        classes: "default classes",
        text: "default text"
    };

    // eslint-disable-next-line no-param-reassign
    $.fn.sample_plugin = options => {
        // eslint-disable-next-line no-param-reassign
        options = $.extend(true, {}, defaults, options);

        return this.each(function() {
            $(this)
                .addClass(options.classes)
                .text(options.text);
        });
    };
})(jQuery);
