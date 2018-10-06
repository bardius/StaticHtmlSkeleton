/* global Foundation, $ */
class FoundationConfig {
    constructor(props) {
        this.props = props;
    }

    static setConfig() {
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
    }

    static setEnhancements() {
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
                $(".reveal [data-orbit]").each((key, element) => {
                    this.reInitOrbit(element);
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
}

export default FoundationConfig;
