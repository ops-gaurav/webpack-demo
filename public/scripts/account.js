/**
 * script required in the account page
 */

/**
 * Asynchronous module definition in webpack
 * CommonJS way of code splitting is synchronous in nature so AMD performs async loading
 * of the code modules
 */
require([ './main.js' ], () => {

});

define ('accountModule', [ './../../bower_components/jquery/dist/jquery.min.js', './main.js' ], ($, main) => {
	alert ($(window).width);
	main.printGreet();
});

console.log ('This is the javascript for the account page');