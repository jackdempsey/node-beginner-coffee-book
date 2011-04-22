http = require 'http'
url = require 'url'

start = (route, handle) ->
  onRequest = (request, response) ->
    pathname = url.parse(request.url).pathname
    console.log "Request for #{pathname} received."

    route handle, pathname

    response.writeHead 200, "Content-Type": "text/html"
    response.write "Hello World"
    response.end()

  http.createServer(onRequest).listen 8888

exports.start = start
