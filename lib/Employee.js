class Employee {
    constructor(title,name, id, email){
        this.title = title
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName(){
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
};

module.exports = Employee;