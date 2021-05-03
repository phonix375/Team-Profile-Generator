const Employee = require('./Employee');

class Intern extends Employee {
    constructor (title,name, id, email,school){
        super(title,name,id,email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
