// Create the LinkedIn Today Open Graph module
var LITodayOpenGraph = (function() {
	// Create the object to represent the module
	var obj = {};

	// Adds a script async to the page
	obj.addScript = function(src, id, d) {
		var js, id = id;
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = src;
		d.getElementsByTagName('head')[0].appendChild(js);
	}

	return obj;
}());

// Add the Facebook SDK
LITodayOpenGraph.addScript('//connect.facebook.net/en_US/all.js', 'facebook-jssdk', document);
// Add jQuery
LITodayOpenGraph.addScript('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js', 'jquery', document);