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
		// Initializes Facebook
		FB.init({
			appId: '318731064857073',
			status: true,
			cookie: true,
			xfbml: true
		});

		// Bind click events
		jQuery('.article').each(function() {
			// Generate the info for the article
			var info = {};
			link = jQuery(this).find('.image a');
			info.title = link.attr('title');
			info.url = link.attr('href').replace(/\/redir\/redirect\?url=/, '');
			info.image = link.find('img').attr('src');
			info.description = jQuery(this).find('.article-summary').text();
			var url = 'http://hollow-ocean-1984.heroku.com/?' + jQuery.param(info);
			var callback = function() {
					console.log(url);
					FB.api('/me/com-linkedin-today-p:view', 'post', {
						'story': url
					}, function(response) {
						console.log(response);
						if (!response || response.error) {
							alert('Error occured');
						} else {
							alert('View was successful! Action ID: ' + response.id);
						}
					});
				}
				// Call the API
				jQuery(this).find('a').on('click', callback);
			if (jQuery(this).prev().hasClass('title')) {
				jQuery(this).prev().on('click', callback);
			}
		});
	};

	// Sets up jQuery
	addScript('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js', function() {
		// Adds the facebook root and login button
		jQuery('#extra').prepend("<div id=\"fb-root\"></div><fb:login-button show-faces=\"true\" width=\"200\" max-rows=\"1\" scope=\"publish_actions\"></fb:login-button>");
		addScript('facebook-jssdk', '//connect.facebook.net/en_US/all.js', function() {
			return;
		});
	});
}(document, window));