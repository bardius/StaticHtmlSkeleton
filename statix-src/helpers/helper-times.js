module.exports.register = function (Handlebars, options) {
	'use strict';
	/**
	 * Usage:
	 * {{#times 10}}
			<span>{{this}}</span>
		{{/times}}
	 */
	
	// Warning: untested code
	Handlebars.registerHelper('times', function(n, block) {
		var accum = '';
		for(var i = 0; i < n; ++i) {
			accum += block.fn(i);
		}
		return accum;
});


};
