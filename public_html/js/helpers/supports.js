/*	Author:  */

;(function (BARDIS) {
	BARDIS.Supports = {
		// BARDIS.Supports.touch
		touch  : ('ontouchstart' in document.documentElement) || (window.DocumentTouch && document instanceof DocumentTouch ? true : false),
		touch2 : "onorientationchange" in window && "ontouchstart" in window ? true : false,

		// BARDIS.Supports.isAndroidNativeBrowser
		isAndroidNativeBrowser: (function () {
			var ua = navigator.userAgent.toLowerCase();
			return ua.indexOf('android') != -1 && ua.indexOf('mobile') != -1 && ua.indexOf('chrome') == -1;
		})(),

		// win : typeof window != 'undefined' && window,
		// doc : typeof document != 'undefined' && document,
		// docElem : document && document.documentElement,

		// BARDIS.Supports.viewportW()
		viewportW: function() {
			var a = document.documentElement['clientWidth'], b = window['innerWidth'];
			return a < b ? b : a;
		},

		// BARDIS.Supports.viewportH()
		viewportH: function() {
			var a = document.documentElement['clientHeight'], b = window['innerHeight'];
			return a < b ? b : a;
		}
	};
})(window.BARDIS = window.BARDIS || {});
