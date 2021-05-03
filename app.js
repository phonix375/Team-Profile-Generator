const inquirer = require('inquirer');
const members = [];
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const htmlGenerator =require('./lib/htmlGenerator')
const fs = require('fs');


const promptManager = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Name of the team manager'
    },
    {
        type: 'number', 
        name: 'id',
        message: 'Manager id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Manager email address'
    },
    {
        type: 'input',
        name: 'number',
        message: 'Office number'
    }

]).then(manager => {
    
    members.push(new Manager('Manager',manager.name,manager.id,manager.email,manager.number));
})
};


const promptTeamMember = manager => {
    return inquirer.prompt([
        {
        
            type: 'checkbox',
            name: 'title',
            message:'add a member',
            choices:[
                'Engineer',
                'Intern',
                'Done'
            ],
            validate: selected => {
                if (selected.length > 1 || selected.length == 0){
                    return false;
                }else{
                    return true;
                }
            },
            
        },
        {
            type: 'input',
            name: 'name',
            message: 'Memeber name',
            when: answers => {
                if (answers.title[0] != 'Done'){
                    return true;
                }return false;
            }
        },
        {
            type: 'number', 
            name: 'id',
            message: 'Member id',
            when: answers => {
                if (answers.title[0] != 'Done'){
                    return true;
                }return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager email address',
            when: answers => {
                if (answers.title[0] != 'Done'){
                    return true;
                }return false;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'github username',
            when: answers => {
                if (answers.title[0] === 'Engineer'){
                    return true;
                }return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'School name',
            when: answers => {
                if(answers.title[0] === 'Intern'){
                    return true;
                }return false;
            }
        },
        {
            type:'confirm',
            name: 'addAnotherMember',
            message: 'You want to add another member ? ',
            default: false,
            when: answers => {
                if (answers.title[0] != 'Done'){
                    return true;
                }return false;
            }

        }    
        
    ]).then(answers => {
        if(answers.title[0] === 'Engineer'){
            members.push(new Engineer('Engineer',answers.name,answers.id,answers.email,answers.github));
        }
        else if(answers.title[0] === 'Intern'){
            members.push(new Intern('Intern',answers.name,answers.id,answers.email,answers.school));
        }
        if(answers.addAnotherMember){
            return promptTeamMember();
        }else{
            return;
        }
    });
};

const mockData = [
    new Manager('Manager','Alex kotliar',1,'kotliar.alex@gmail.com','555-555-555'),
      new Engineer ('Engineer','Andrii bessarab',2,'bessarab@gmail.com','phonix375'),
      new Engineer ('Engineer','Andrii bessarab',2,'bessarab@gmail.com','phonix375'),
      new Engineer ('Engineer','Andrii bessarab',2,'bessarab@gmail.com','phonix375'),
      new Engineer ('Engineer','Andrii bessarab',2,'bessarab@gmail.com','phonix375'),
      new Engineer ('Engineer','Andrii bessarab',2,'bessarab@gmail.com','phonix375'),
      new Intern ('Intern','Andrii bessarab',2,'bessarab@gmail.com','ORT Tech'),
      new Intern ('Intern','Andrii bessarab',2,'bessarab@gmail.com','ORT Tech')

]

promptManager().then(promptTeamMember).then(() => {
    const content = htmlGenerator(members);
    fs.writeFile('./dist/index.html',content,function(err){
        if(err){
            return console.log(err)
        }
        console.log("Index file was created!")
    })
});