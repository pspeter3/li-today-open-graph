# LinkedIn Today Open Graph

This project is designed to add Facebook Open Graph support to LinkedIn Today.
The code uses Facebook's default read action with the default article model. The
script can quickly be added to LinkedIn Today with the following line in the
Chrome JavaScript console.

  var js = document.createElement('script'); js.async = true; js.src = '//pspeter3.github.com/li-today-open-graph/li-today-open-graph.js'; document.getElementsByTagName('head')[0].appendChild(js);

To install as a userscript, click [here](http://pspeter3.github.com/li-today-open-graph/userscript.js)

## Design Flow

The userscript essentially just runs the command above on all LinkedIn Today
pages. After loading the javascript file, the javascript file proceeds to add
jQuery and the Facebook Javascript SDK to the page. Then it searches all the
.article divs and scrapes the information. From there, it binds the links to
call the Facebook API. The API calls the Sinatra service which makes the schema
necessary for sharing.