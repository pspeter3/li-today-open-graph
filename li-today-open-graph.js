// Wrap the module and pass in the document and window objects
(function(d, w) {
	// Adds a script

	function addScript(id, src) {
		// Prevent the script from being loaded twice
		if (d.getElementById(id)) {
			return;
		}
		// Sets up the script
		var js = d.createElement('script');
		js.id = id;
		js.src = src;
		var loaded = false;
		d.getElementsByTagName('head')[0].appendChild(js);
	}

	// Sets up the Facebook async callback
	w.fbAsyncInit = function() {
		FB.init({
			appId: '[YOUR_APP_ID]',
			// App ID
			status: true,
			// check login status
			cookie: true,
			// enable cookies to allow the server to access the session
			xfbml: true // parse XFBML
		});
	};

	jQuery('#extra').append("<div id=\"fb-root\"></div>
			<fb:login-button show-faces=\"true\" width=\"200\" max-rows=\"1\" scope=\"publish_actions\"></fb:login-button>
	");
}(document, window));