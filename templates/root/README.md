<%= _.slugify(_.humanize(appname)) %>
========================

## Quick start

Inject the `<%= scriptAppName %>` module into your app:
``` JavaScript
angular.module('myApp', ['<%= scriptAppName %>']);
```

## Development
For running the dev enviroment you just need install
all the dependencies by `npm`, the [node package manager][npm-site]. 

```
npm install -g bower
npm install -g gulp
npm install
bower install
```

Run dev enviroment, it's a watch script with several task running
like jshint, html2js, build and unit test on the js build files.
```
gulp build
gulp watch
```

#### Unit Tests
The easiest way to run the unit tests is to use the supplied npm script:

```
gulp test
```

[npm-site]: https://www.npmjs.org/
