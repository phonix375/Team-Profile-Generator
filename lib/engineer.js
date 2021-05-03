const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (title,name, id, email,github){
        super(title,name,id,email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
