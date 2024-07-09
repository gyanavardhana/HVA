const fs = require('fs')

fs.writeFile('C:/Users/91888/Downloads/HVA/Fullstack-Backendtasks/Filesystem/message.txt', "Hi , I am a new file",(err)=>{
    if(err){
        console.log(err)
    }
    console.log('File created successfully');
})