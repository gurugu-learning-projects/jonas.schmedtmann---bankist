const fs = require('fs');
const readable = fs.createReadStream('./text.txt', {
  encoding: 'utf8',
  highWaterMark: 20,
});

// readable.on('data', chunk => {
//   console.log(`Read ${chunk.length} bytes\n${chunk.toString()}`);
// });

(async () => {
  for await (const chunk of readable) {
    console.log(`Read ${chunk.length} bytes\n${chunk.toString()}`);
  }
})();
