var request = require('request');
var r = request.defaults({ 'proxy': 'http://localhost:8080' });

r.get('http://www.baidu.com', function (err, res, body) {
  console.log(body);
});