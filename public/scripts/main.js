
$('.app-body').css ('margin-top', '100px');

$(document).ready (() => {
	alignLoader();

	$('.loader-container-screen').css ('display', 'block');
	// alert ('done loading');
	$('.loader-container-screen').animate ({
		'opacity': 0
	}, 500, function () {
		$('.loader-container-screen').css ('display', 'none');
	});
});
var alignLoader = () => {
	var xpos = ($(window).width() - $('.loader').width())/2;
	var ypos = ($(window).height() - $('.loader').height())/2 - 50;

	$('.loader').css ('margin-left', xpos+'px');
	$('.loader').css ('margin-top', ypos+'px');

}

/**
 * some dummy fucntions to be used by other modules
 * 
 */
function printGreet() {
	console.log ('Hello world!!');

}