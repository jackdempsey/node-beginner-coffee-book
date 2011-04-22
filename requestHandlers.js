(function() {
  var start, upload;
  start = function() {
    return console.log("Request handler 'start' was called.");
  };
  upload = function() {
    return console.log("Request handler 'upload' was called.");
  };
  exports.start = start;
  exports.upload = upload;
}).call(this);
