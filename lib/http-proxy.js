var http = require('http');
var request = require('request');
var log = require('debug')('http-proxy');

module.exports = function (port) {
  var proxy = http.createServer(function (req, res) {
    log(req.url);
    request({
      method: req.method,
      url: req.url,
      headers: req.headers
    }).pipe(res);
  });

  proxy.on('error', function (e) {
    console.error('problem with request: ' + e.message);
  });

  port = port || 8080;
  proxy.listen(port, function () {
    console.log('http proxy server listen on ' + port);
  });
};