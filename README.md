# The API Mobile Automation Test Framework

> The following automation framework was created for providing the support of API tests.

## The main stack of technologies: 

- [typescript](https://www.typescriptlang.org)
- [superagent](https://visionmedia.github.io/superagent)
- [superagent-bluebird-promise](https://www.npmjs.com/package/superagent-bluebird-promise)
- [mochaJS](https://mochajs.org)
- [chaiJS](http://www.chaijs.com)

## The main config files:

- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [mocha.opts](mocha.opts)

### The general structure of test framework for API Mobile:

- [models](src/models)
- [services](src/services)
- [tests](test)

### Features

- [Timeouts](http://visionmedia.github.io/superagent/#timeouts)
> Recommended to use timeouts: Sometimes networks and servers get "stuck" and never respond after accepting a request.
  Set timeouts to avoid requests waiting forever.


### How to execute tests? 

#### Environment Local:

```sh
$ npm install
$ ./node_modules/.bin/mocha test.js OR npm test
```

### Plugins

| Plugin | LINK |
| ------ | ------ |
| JSON Reporter | [JSON Reporter]() |





