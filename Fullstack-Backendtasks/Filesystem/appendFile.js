const fs = require('fs');

fs.appendFile('C:/Users/91888/Downloads/HVA/Fullstack-Backendtasks/Filesystem/message.txt', '\nI am appending this text to the file', (err) => {
    if(err){
        console.log(err)
    }
    console.log('Data appended successfully');
});