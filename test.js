import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import test from 'ava';
import isJpg from 'is-jpg';
import decompressTarxz from '.';

const readFileP = promisify(fs.readFile);

test('extract file', async t => {
	const buf = await readFileP(path.join(__dirname, 'fixture.tar.xz'));
	const files = await decompressTarxz()(buf);

	t.is(files[0].path, 'test.jpg');
	t.true(isJpg(files[0].data));
});

test('extract file using streams', async t => {
	const stream = fs.createReadStream(path.join(__dirname, 'fixture.tar.xz'));
	const files = await decompressTarxz()(stream);

	t.is(files[0].path, 'test.jpg');
	t.true(isJpg(files[0].data));
});

test('return empty array if non-valid file is supplied', async t => {
	const buf = await readFileP(__filename);
	const files = await decompressTarxz()(buf);

	t.is(files.length, 0);
});

test('throw on wrong input', async t => {
	await t.throwsAsync(decompressTarxz()('foo'), 'Expected a Buffer or Stream, got string');
});
