// Wrap the module and pass in the document and window objects
(function(d, w) {
	// Adds a script


	function addScript(id, src, callback) {
		// Prevent the script from being loaded twice
		if (d.getElementById(id)) {
			return;
		}
		// Sets up the script
		var js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = src;
		var loaded = false;
		// Calls the callback when the script is loaded
		js.onload = js.onreadystatechange = function() {
			if (!loaded && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				loaded = true;
				callback();
			}
		}
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

	// Sets up jQuery
	addScript('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js', function() {
		jQuery('#extra').append("<div id=\"fb-root\"></div>
			<fb:login-button show-faces=\"true\" width=\"200\" max-rows=\"1\" scope=\"publish_actions\"></fb:login-button>");
		addScript('facebook-jssdk', '//connect.facebook.net/en_US/all.js', function() {
			return;
		})
	});
}(document, window));