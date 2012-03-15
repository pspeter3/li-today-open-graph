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

## Files

- **Gemfile** Sets up the ruby gems for the project. Heroku automatically bundles
  on their side
- **config.ru** Launches the Sinatra server
- **server.rb** A sinatra server that converts HTTP GET parameters into the FB
  Open Graph Object Schema for an article
- **li-today-open-graph.js**
  1. Adds jQuery 1.7.1 to the DOM from the Google Ajax CDN
  2. Adds the Facebook root element in the right side bar as well as an FBML
     login button
  3. Adds the Facebook Javascript SDK to the DOM
  4. Setups up the Facebook API
  5. Binds all of the .article links
    a. Searches for the .article divs with jQuery. I just didn't know how to do
       this with YUI
    b. Finds the title, image, description and url for each article
    c. Binds the click event of each link to trigger a call of a **view** event
       to the Facebook API with the URL being comprised of the parameters
    d. Facebook calls the Sinatra app and understands the Schema
- **userscript.js** Was supposed to make the script easily installable on Chrome.
  This needs to be worked on some more.

## How to replicate

1. Sign up for a Facebook Developer Account
2. Create a new application
3. Create an Open Graph action that uses the custom action **view** and the
   standard object **article**. We can't use the standard action read because
   we don't actually own the content and are able to check if the user is
   reading it.
4. Set the url to http://www.linkedin.com/today
5. Include the Facebook SDK in by default and figure out how to do everything
   with YUI instead of jQuery.
6. Build small service in LinkedIn Today that does the exact same thing as the
   Sinatra app.

## Resources

- [Open Graph](https://developers.facebook.com/docs/opengraph/)
- [Tutorial](https://developers.facebook.com/docs/opengraph/tutorial/)
- [Article Object](https://developers.facebook.com/docs/opengraph/objects/builtin/#article)
- [Read Action](https://developers.facebook.com/docs/opengraph/actions/builtin/#read)
- [Object Debugger](https://developers.facebook.com/tools/debug)