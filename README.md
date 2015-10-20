[![Build Status](https://travis-ci.org/matthewp/promise-child.svg?branch=master)](https://travis-ci.org/matthewp/promise-child)
[![npm version](https://badge.fury.io/js/promise-child.svg)](http://badge.fury.io/js/promise-child)


# promise-child

Create a promise from a [ChildProcess](https://nodejs.org/api/child_process.html#child_process_class_childprocess).

## Install

```shell
npm install promise-child --save
```

## Use

```js
var promisify = require("promise-child");
var spawn = require("child_process").spawn;

var child = spawn("echo", ["hello"]);

promisify(child).then(function(code){
 // code === 0
});

promisify(child, {
  stdout: true
}).then(function(result){
  // result.code === 0
  // result.stdout -> Whatever stdout spit out.
});
```

## License

BSD 2 Clause
