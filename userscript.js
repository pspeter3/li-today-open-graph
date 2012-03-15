// ==UserScript==
// @name LinkedIn Today Open Graph
// @namespace com-linkedin-today-p
// @description Adds Facebook Open Graph support to LinkedIn Today
// @include http://www.linkedin.com/today/*
// ==/UserScript==

var js = document.createElement('script'); js.async = true; js.src = '//pspeter3.github.com/li-today-open-graph/li-today-open-graph.js'; document.getElementsByTagName('head')[0].appendChild(js);