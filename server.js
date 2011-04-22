(function() {
  var http, start, url;
  http = require('http');
  url = require('url');
  start = function(route, handle) {
    var onRequest;
    onRequest = function(request, response) {
      var pathname;
      pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      route(handle, pathname);
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.write("Hello World");
      return response.end();
    };
    return http.createServer(onRequest).listen(8888);
  };
  exports.start = start;
}).call(this);
