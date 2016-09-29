/*
 Project: Project Name
 Authors: George Bardis
 */

// Create a closure to maintain scope of the '$' and BARDIS
(function (BARDIS, $, window, document, undefined) {

    $(function () {
        BARDIS.Config.init();
    });

    BARDIS.Config = {
        $body: $(document.body),
        init: function () {

            BARDIS.foundationConfig.init();
            BARDIS.UI.init();
            BARDIS.cookiePolicy();

            BARDIS.windowResize.init();

            if (BARDIS.Supports.touch) {
                BARDIS.touch.init();
            }

            $(window).load(function () {
            });
        }
    };

    BARDIS.foundationConfig = {
        init: function () {
            Foundation.Reveal.defaults.animationIn = 'fade-in';
            Foundation.Reveal.defaults.animationOut = 'fade-out';
            Foundation.Reveal.defaults.resetOnClose = true;
            Foundation.Reveal.defaults.closeOnClick = true;
            Foundation.Reveal.defaults.closeOnEsc = true;

            Foundation.Orbit.defaults.animInFromRight = 'fade-in';
            Foundation.Orbit.defaults.animOutToRight = 'fade-out';
            Foundation.Orbit.defaults.animInFromLeft = 'fade-in';
            Foundation.Orbit.defaults.animOutToLeft = 'fade-out';
            Foundation.Orbit.defaults.autoPlay = false;
            Foundation.Orbit.defaults.timerDelay = 8000;
            Foundation.Orbit.defaults.infiniteWrap = false;
            Foundation.Orbit.defaults.swipe = true;
            Foundation.Orbit.defaults.pauseOnHover = true;
            Foundation.Orbit.defaults.accessible = true;
            Foundation.Orbit.defaults.useMUI = true;
            Foundation.Orbit.defaults.bullets = true;
            Foundation.Orbit.defaults.navButtons = true;

            Foundation.Accordion.defaults.slideSpeed = 250;
            Foundation.Accordion.defaults.multiExpand = false;
            Foundation.Accordion.defaults.allowAllClosed = true;

            Foundation.OffCanvas.defaults.closeOnClick = true;

            // Start the foundation Plugins Configuration
            $(document).foundation();

            BARDIS.foundationConfig.setEnhancements();
        },
        setEnhancements: function(){
            // Enhance the sticky header (fix for miscalculation of sticky-container height when unstuck
            $('.header-sticky-container').on('sticky.zf.unstuckfrom:top', function(){
                let stickyContentHeight = $(this).find('.sticky').first().outerHeight(true);
                $(this).css('height', stickyContentHeight + 'px');
            });

            $('.header-sticky-container').on('sticky.zf.stuckto:top', function(){
            });

            // Initialize again the foundation Orbit plugin within modals after they open
            $('.reveal').on('open.zf.reveal', Foundation.util.throttle(function () {
                    $('.reveal [data-orbit]').each(function(carouselIndex) {
                        BARDIS.foundationConfig.reInitOrbit(this);
                    });
                }, 100)
            );
        },
        reInitOrbit: function (orbitElement) {
            let $orbitElement = $(orbitElement);
            let orbitSlider = new Foundation.Orbit($orbitElement);
            orbitSlider.destroy();

            $orbitElement.data('orbit', '');
            $orbitElement.attr('style', '');
            $orbitElement.find('ul').attr('style', '');
            $orbitElement.find('li').attr('style', '');
            orbitSlider = new Foundation.Orbit($orbitElement);
        }
    };

    BARDIS.UI = {
        init: function () {
            // Start the date picker
            BARDIS.Forms.datepicker();
        }
    };

    BARDIS.Forms = {
        $datepickerInputs: $(".datepickerField"),
        datepicker: function(){
            BARDIS.Forms.$datepickerInputs.fdatepicker({
                autoShow: true,
                // initialDate: new Date().toJSON().slice(0, 10),
                disableDblClickSelection: false,
                closeButton: true,
                pickTime: false,
                isInline: false
            });
        }
    };

    BARDIS.touch = {
        init: function () {

        }
    };

    BARDIS.windowResize = {
        init: function () {
            var currentBreakpoint = Foundation.MediaQuery.current;

            $(window).on('resize', Foundation.util.throttle(function () {
                    notifications.sendNotification(notifications.WINDOW_RESIZE);

                    // re initialise the Foundation Orbit carousels
                    $('[data-orbit]').each(function(carouselIndex) {
                        BARDIS.foundationConfig.reInitOrbit(this);
                    });
                }, 100)
            );

            // Foundation event listener for breakpoint changes
            $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
                currentBreakpoint = Foundation.MediaQuery.current;
            });
        }
    };

    BARDIS.sampleTest = {
        simpleTest: function (projectName) {
            this.projectName = projectName;

            return this.projectName + ' is starting. Welcome!';
        }
    };

})(window.BARDIS = window.BARDIS || {}, jQuery, window, document);
