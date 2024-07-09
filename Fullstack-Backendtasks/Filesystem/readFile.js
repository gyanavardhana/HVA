const fs = require('fs');

fs.readFile('C:/Users/91888/Downloads/HVA/Fullstack-Backendtasks/Filesystem/message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    }
);