require 'sinatra'
require 'cgi'
get '/' do
  response = <<-EOS
<html>
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# com-linkedin-today-p: http://ogp.me/ns/fb/com-linkedin-today-p#">
<meta property="fb:app_id"      content="318731064857073" /> 
<meta property="og:type"        content="com-linkedin-today-p:story" /> 
<meta property="og:url"         content="#{CGI::unescape params[:url]}" /> 
<meta property="og:title"       content="#{CGI::unescape params[:title]}" /> 
<meta property="og:description" content="#{CGI::unescape params[:description]}" /> 
<meta property="og:image"       content="#{CGI::unescape params[:image]}" />
</html>
EOS

  response
end