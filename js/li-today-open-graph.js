// Create the LinkedIn Today Open Graph module
var LITodayOpenGraph = (function() {
	// Create the object to represent the module
	var obj = {};

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