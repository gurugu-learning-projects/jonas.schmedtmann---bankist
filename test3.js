const fs = require('fs');
const crypto = require('crypto');
const { pipeline } = require('stream');

const hashStream = crypto.createHash('sha256');
hashStream.setEncoding('base64');

const inputStream = fs.createReadStream('./4gb_file');
const outputStream = fs.createWriteStream('./checksum.txt');

pipeline(inputStream, hashStream, outputStream, err => {
  err && console.error(err);
});
