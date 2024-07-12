const fs = require('fs');
const util = require("util");

// callbacks
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Callbacks: ${data}`);
    }
  });
  

// promise
const readFilePromise = util.promisify(fs.readFile);

readFilePromise('data.txt', 'utf8' )
  .then((data) => {
    console.log(`Promises: ${data}`);
  })
  .catch((err) => {
    console.error(err);
  });



// async

async function readFile() {
    try {
      const data = await readFilePromise('data.txt', 'utf8');
      console.log(`Await ${data}`);
    } catch (err) {
      console.error(err);
    }
  }
  
  readFile();
  