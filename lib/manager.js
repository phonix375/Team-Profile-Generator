const Employee = require('./Employee');

class Manager extends Employee {
    constructor (title,name, id, email, number){
        super(title,name,id,email);
        this.number = number;
    }
    getNumber(){
        return this.number;
    }
}

module.exports = Manager;
