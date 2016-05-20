'use strict';
const decompressTar = require('decompress-tar');
const fileType = require('file-type');
const lzmaNative = require('lzma-native');

module.exports = () => buf => {
	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError(`Expected a Buffer, got ${typeof buf}`));
	}

	if (!fileType(buf) || fileType(buf).ext !== 'xz') {
		return Promise.resolve([]);
	}

	return lzmaNative.decompress(buf).then(decompressTar());
};
