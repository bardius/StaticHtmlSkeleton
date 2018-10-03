/* globals window, document, Foundation, $ */

import NotificationDispatcher from "./helpers/NotificationDispatcher";
import Supports from "./helpers/Supports";

class App {
    constructor(props) {
        this.props = props;
        this.$body = $(document.body);
        this.init();
    }

    init() {
        $(() => {
            this.initFoundation();
            this.initUI();
            this.initSampleDocs();
            this.initWindowResize();

            if (Supports.touch()) {
                this.initTouch();
            }

            $(window).on("load", () => {});
        });
    }

    initFoundation() {
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

        this.setFoundationEnhancements();
    }

    setFoundationEnhancements() {
        const $headerStickyContainer = $(".header-sticky-container");
        const $reveal = $(".reveal");

        // Enhance the sticky header (fix for miscalculation of sticky-container height when unstuck
        $headerStickyContainer.on("sticky.zf.unstuckfrom:top", function() {
            const stickyContentHeight = $(this)
                .find(".sticky")
                .first()
                .outerHeight(true);
            $(this).css("height", `${stickyContentHeight}px`);
        });

        $headerStickyContainer.on("sticky.zf.stuckto:top", () => {});

        // Initialize again the foundation Orbit plugin within modals after they open
        $reveal.on(
            "open.zf.reveal",
            Foundation.util.throttle(() => {
                $(".reveal [data-orbit]").each(function(carouselIndex) {
                    App.reInitOrbit(this);
                });
            }, 100)
        );
    }

    static reInitOrbit(orbitElement) {
        const $orbitElement = $(orbitElement);
        let orbitSlider = new Foundation.Orbit($orbitElement);
        orbitSlider.destroy();

        $orbitElement.data("orbit", "");
        $orbitElement.attr("style", "");
        $orbitElement.find("ul").attr("style", "");
        $orbitElement.find("li").attr("style", "");
        orbitSlider = new Foundation.Orbit($orbitElement);
    }

    initUI() {
        this.initForms();
    }

    initSampleDocs() {
        // Start the sample Docs navigation
        var $h2s = $("#docs h2");
        var $toc = $("[data-docs-toc]");
        $h2s.each(function() {
            var text = $(this).text();
            var anchor = $(this)
                .children("a")
                .attr("href");
            $toc.append('<li><a href="' + anchor + '">' + text + "</a></li>");
        });
    }

    initForms() {
        const $datepickerInputs = $(".datepickerField");

        $datepickerInputs.fdatepicker({
            autoShow: true,
            // initialDate: new Date().toJSON().slice(0, 10),
            disableDblClickSelection: false,
            closeButton: true,
            pickTime: false,
            isInline: false
        });
    }

    initTouch() {}

    initWindowResize() {
        let currentBreakpoint = Foundation.MediaQuery.current;

        $(window).on(
            "resize",
            Foundation.util.throttle(() => {
                window.SkeletonApp.notificationDispatcher.sendNotification(NotificationDispatcher.WINDOW_RESIZE);

                // re initialise the Foundation Orbit carousels
                $("[data-orbit]").each(function(carouselIndex) {
                    App.reInitOrbit(this);
                });
            }, 100)
        );

        // Foundation event listener for breakpoint changes
        $(window).on("changed.zf.mediaquery", (event, newSize, oldSize) => {
            currentBreakpoint = Foundation.MediaQuery.current;
        });
    }
}

export default App;
