'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createBenchmarkFiles = function createBenchmarkFiles() {
  if (['dist'].indexOf(this.name) < 0) {
  	return false;
  }
  var srcPath = 'benchmarks/' + this.name;
  var distPath = 'benchmarks/' + this.appname;
  this.template(srcPath + '/benchmark.js', distPath + '/benchmark.js');
  this.template(srcPath + '/bp.conf.js', distPath + '/bp.conf.js');
  this.template(srcPath + '/main.html', distPath + '/main.html');
};
