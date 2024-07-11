const inquirer = require('inquirer');
const qr = require('qr-image')
const fs = require('fs');


questions = [
    {
        type: 'input',
        message: "Please enter your name: ",
        name: "Name",
    },
    {
        type: 'input',
        message: "Please enter the URL: ",
        name: "URL",
    }
]

const prompt = inquirer.createPromptModule();

const asdf = async() => {
    const ans = await prompt(questions);
    const image = qr.image(ans.URL, {type: 'png'})

    image.pipe(fs.createWriteStream('image.png'));

    fs.writeFile('url.txt',ans.URL,(err) => {
        if(err){
            console.log(err);
        }
        console.log("File with url is saved");
    })
}

asdf();