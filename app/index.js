'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var wiredep = require('wiredep');
var chalk = require('chalk');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = this._.slugify(this._.humanize(this.appname));
  this.scriptAppName = this._.camelize(this.appname);

  this.pkg = require('../package.json');
  this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
  if (!this.options['skip-welcome-message']) {
    this.log(yosay());
    this.log(
      chalk.magenta(
        'Created all you need to start coding your personal collection of UI components' +
        '\n'
      )
    );
  }
};

Generator.prototype.packageFiles = function packageFiles() {
  this.template('root/_bowerrc', '.bowerrc');
  this.template('root/_jshintrc', '.jshintrc');
  this.template('root/_gitignore', '.gitignore');
  this.template('root/bower.json', 'bower.json');
  this.template('root/package.json', 'package.json');
  this.template('root/gulpfile.js', 'gulpfile.js');
  this.template('root/karma.conf.js', 'karma.conf.js');
  this.template('root/LICENSE', 'LICENSE');
  this.template('root/README.md', 'README.md');
};
