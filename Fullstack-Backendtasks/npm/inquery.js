const inquirer = require('inquirer');

questions = [
    {
        type: 'input',
        message: "Please enter your name: ",
        name: "Name",
    }
]

const prompt = inquirer.createPromptModule();

const aswn = async() => {
    const bla = await prompt(questions);
    console.log(bla.Name);
}

aswn();

