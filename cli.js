var program = require('commander');
var fs = require('fs-extra');
var hp = require('./lib/http-proxy.js');

program
  .version(fs.readJsonSync('./package.json').version)
  .option('-p, --port <n>', 'listen port')
  .parse(process.argv);

process.on('uncaughtException', function(e) {
  console.error('process Caught exception: ' + e.stack);
});

hp(program.port);