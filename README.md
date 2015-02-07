# generator-ngtasty [![NPM version](https://badge.fury.io/js/generator-ngtasty.svg)](https://www.npmjs.org/package/generator-ngtasty) [![NPM Downloads](http://img.shields.io/npm/dm/generator-ngtasty.svg)](https://www.npmjs.org/package/generator-ngtasty)
> This generator is the scaffolding tool for generate by Yeoman your collection 
of reusable UI components for AngularJS.

## Dependencies
- Package manager for javascript: [npm](https://www.npmjs.com/)
- Package management: [Bower](http://bower.io/) 
- The streaming build system: [Gulp](http://gulpjs.com/) 

## Usage
Installing Yeoman
```
npm install -g yo
```

Install `generator-ngtasty`:
```
npm install -g generator-ngtasty
```

Make a new directory, and `cd` into it:
```
mkdir new-collection && cd $_
```

Run `yo ngtasty` passing a collection name:
```
yo ngtasty [collection-name]
```

## Generators

Available generators:

* [ngtasty:component](#component)
* [ngtasty:filter](#filter)
* [ngtasty:service](#service)


### component
Generates a component

Example:
```bash
yo ngtasty:component myComponent
```

Produces `src/component/my-component.js`:
```javascript
angular.module('collectionName.component.myComponent', [])
.directive('myComponent', function () {
  // ...
});
```
and `src/component/test/my-component.spec.js`
```javascript
describe('Directive: myComponent', function () {
  // ...
});
```
and `template/my-component/my-component.html`
```html
<div></div>
```


### filter
Generates a filter

Example:
```bash
yo ngtasty:filter myFilter
```

Produces `src/filter/my-filter.js`:
```javascript
angular.module('collectionName.filter.myFilter', [])
.filter('myFilter', function () {
  // ...
});
```
and `src/filter/test/my-filter.spec.js`
```javascript
describe('Filter: myFilter', function () {
  // ...
});
```


### service
Generates a service

Example:
```bash
yo ngtasty:service myService
```

Produces `src/filter/my-service.js`:
```javascript
angular.module('collectionName.service.myService', [])
.factory('myService', function () {
  // ...
});
```
and `src/filter/test/my-service.spec.js`
```javascript
describe('Service: myService', function () {
  // ...
});
```


## Creator

Designed and built by Leonardo Zizzamia, like grandma used to make.

- <http://twitter.com/zizzamia>
- <http://github.com/zizzamia>
