/* ==========================================================================
 Console.log shim
 ========================================================================== */

(function(window) {
    if (!window.console) {
        console = {};
    }

    const funcs = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(
        ","
    );

    const stub = function() {};

    for (let i = 0; i < funcs.length; i++) {
        if (!console[funcs[i]]) {
            console[funcs[i]] = stub;
        }
    }
})(window);
