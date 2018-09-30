/* globals Foundation, jQuery */
/*
 Project: Project Name
 Authors: George SkeletonApp
 */

// Create a closure to maintain scope of the '$' and SkeletonApp
(function(SkeletonApp, $, window, document, undefined) {
    $(() => {
        SkeletonApp.Config.init();
    });

    SkeletonApp.Config = {
        $body: $(document.body),
        init() {
            SkeletonApp.sampleTest.simpleTest("sss");
            SkeletonApp.foundationConfig.init();
            SkeletonApp.UI.init();
            SkeletonApp.cookiePolicy();

            SkeletonApp.windowResize.init();

            if (SkeletonApp.Supports.touch) {
                SkeletonApp.touch.init();
            }

            $(window).on("load", () => {});
        }
    };

    SkeletonApp.foundationConfig = {
        init() {
            Foundation.Reveal.defaults.animationIn = "fade-in";
            Foundation.Reveal.defaults.animationOut = "fade-out";
            Foundation.Reveal.defaults.resetOnClose = true;
            Foundation.Reveal.defaults.closeOnClick = true;
            Foundation.Reveal.defaults.closeOnEsc = true;

            Foundation.Orbit.defaults.animInFromRight = "fade-in";
            Foundation.Orbit.defaults.animOutToRight = "fade-out";
            Foundation.Orbit.defaults.animInFromLeft = "fade-in";
            Foundation.Orbit.defaults.animOutToLeft = "fade-out";
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

            SkeletonApp.foundationConfig.setEnhancements();
        },
        setEnhancements() {
            // Enhance the sticky header (fix for miscalculation of sticky-container height when unstuck
            $(".header-sticky-container").on("sticky.zf.unstuckfrom:top", function() {
                const stickyContentHeight = $(this)
                    .find(".sticky")
                    .first()
                    .outerHeight(true);
                $(this).css("height", `${stickyContentHeight}px`);
            });

            $(".header-sticky-container").on("sticky.zf.stuckto:top", () => {});

            // Initialize again the foundation Orbit plugin within modals after they open
            $(".reveal").on(
                "open.zf.reveal",
                Foundation.util.throttle(() => {
                    $(".reveal [data-orbit]").each(function(carouselIndex) {
                        SkeletonApp.foundationConfig.reInitOrbit(this);
                    });
                }, 100)
            );
        },
        reInitOrbit(orbitElement) {
            const $orbitElement = $(orbitElement);
            let orbitSlider = new Foundation.Orbit($orbitElement);
            orbitSlider.destroy();

            $orbitElement.data("orbit", "");
            $orbitElement.attr("style", "");
            $orbitElement.find("ul").attr("style", "");
            $orbitElement.find("li").attr("style", "");
            orbitSlider = new Foundation.Orbit($orbitElement);
        }
    };

    SkeletonApp.UI = {
        init() {
            // Start the date picker
            SkeletonApp.Forms.datepicker();
        }
    };

    SkeletonApp.Forms = {
        $datepickerInputs: $(".datepickerField"),
        datepicker() {
            SkeletonApp.Forms.$datepickerInputs.fdatepicker({
                autoShow: true,
                // initialDate: new Date().toJSON().slice(0, 10),
                disableDblClickSelection: false,
                closeButton: true,
                pickTime: false,
                isInline: false
            });
        }
    };

    SkeletonApp.touch = {
        init() {}
    };

    SkeletonApp.windowResize = {
        init() {
            let currentBreakpoint = Foundation.MediaQuery.current;

            $(window).on(
                "resize",
                Foundation.util.throttle(() => {
                    notifications.sendNotification(notifications.WINDOW_RESIZE);

                    // re initialise the Foundation Orbit carousels
                    $("[data-orbit]").each(function(carouselIndex) {
                        SkeletonApp.foundationConfig.reInitOrbit(this);
                    });
                }, 100)
            );

            // Foundation event listener for breakpoint changes
            $(window).on("changed.zf.mediaquery", (event, newSize, oldSize) => {
                currentBreakpoint = Foundation.MediaQuery.current;
            });
        }
    };

    SkeletonApp.sampleTest = {
        simpleTest(projectName) {
            this.projectName = projectName;

            return `${this.projectName} is starting. Welcome!`;
        }
    };
})((window.SkeletonApp = window.SkeletonApp || {}), jQuery, window, document);
