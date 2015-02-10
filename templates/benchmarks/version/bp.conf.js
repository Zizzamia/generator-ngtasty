module.exports = function(config) {
  config.set({
    scripts: [{
      id: 'angular',
      src: 'bower_components/angular/angular.min.js'
    },{
      id: '<%= moduleName %>',
      src: 'bower_components/<%= _.slugify(moduleName) %>/<%= moduleName %>.min.js'
    },{
      src: '<%= _.slugify(moduleName) %>-benchmark.js',
    }]
  })
};

