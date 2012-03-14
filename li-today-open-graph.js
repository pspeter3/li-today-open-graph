// LinkedIn Today Open Graph module
var LITodayOpenGraph = (function() {
	// Create the module object
	var module = {};

	// Add a script
	module.addScript = function(d, src) {
		var js = d.createElement('script'); js.src = src;
		d.getElementsByTagName(0).appendChild(js);
	}
	// Pass the module object back up
	return module;
}());

LITodayOpenGraph.addScript(document, '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
$('#extra').append(
	"<div id=\fb-root\"></div>
	<fb:login-button show-faces=\"true\" width=\"200\" max-rows=\"1\" scope=\"publish_actions\">
  </fb:login-button>
	");