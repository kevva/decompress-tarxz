# decompress-tarxz [![Build Status](https://travis-ci.org/kevva/decompress-tarxz.svg?branch=master)](https://travis-ci.org/kevva/decompress-tarxz)

> tar.xz decompress plugin


## Install

```
$ npm install --save decompress-tarxz
```


## Usage

```js
const decompress = require('decompress');
const decompressTarxz = require('decompress-tarxz');

decompress('unicorn.tar.xz', 'dist', {
	plugins: [
		decompressTarxz()
	]
}).then(() => {
	console.log('Files decompressed');
});
```


## API

### decompressTarxz()(buf)

#### buf

Type: `Buffer`

Buffer to decompress.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
