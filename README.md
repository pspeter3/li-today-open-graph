# LinkedIn Today Open Graph

This project is designed to add Facebook Open Graph support to LinkedIn Today.
The code uses Facebook's default read action with the default article model. The
script can quickly be added to LinkedIn Today with the following line in the
Chrome JavaScript console.

  var js = document.createElement('script'); js.async = true; js.src = '//pspeter3.github.com/li-today-open-graph/li-today-open-graph.js'; document.getElementsByTagName('head')[0].appendChild(js);