require 'sinatra'
get '/' do
  response = <<-EOS
 <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# com-linkedin-today-p: http://ogp.me/ns/fb/com-linkedin-today-p#">
<meta property="fb:app_id"      content="318731064857073" /> 
<meta property="og:type"        content="com-linkedin-today-p:story" /> 
<meta property="og:url"         content="#{params[:url]}" /> 
<meta property="og:title"       content="#{params[:title]}" /> 
<meta property="og:description" content="#{params[:description]}" /> 
<meta property="og:image"       content="#{params[:image]}" />
EOS

  response
end