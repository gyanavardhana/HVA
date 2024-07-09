const fs = require('fs');

fs.unlink('C:/Users/91888/Downloads/HVA/Fullstack-Backendtasks/Filesystem/message.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted successfully');
    }
});
