# decompress-tarxz [![Build Status](http://img.shields.io/travis/kevva/decompress-tarxz.svg?style=flat)](https://travis-ci.org/kevva/decompress-tarxz)

> tar.xz decompress plugin


## Install

```
$ npm install --save decompress-tarxz
```


## Usage

```js
var Decompress = require('decompress');
var tarXz = require('decompress-tarxz');

var decompress = new Decompress()
	.src('foo.tar.xz')
	.dest('dest')
	.use(tarXz({strip: 1}));

decompress.run(function (err, files) {
	console.log('Files extracted successfully!'); 
});
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var tarXz = require('decompress-tarxz');
var vinylAssign = require('vinyl-assign');

gulp.task('default', function () {
	return gulp.src('foo.tar.xz')
		.pipe(vinylAssign({extract: true}))
		.pipe(tarXz({strip: 1}))
		.pipe(gulp.dest('dest'));
});
```


## API

### tarXz(options)

#### options.strip

Type: `number`  
Default: `0`

Remove leading directory components from extracted files.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
