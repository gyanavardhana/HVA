const path = require('path');

const currdir = __dirname;

const combpath = path.join(currdir,'public','Index.html');

console.log(
    `
    currpath: ${currdir}
    combined or joined path: ${combpath}
    `
);