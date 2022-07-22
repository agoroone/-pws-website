class Student{

    constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date (dob);
    }


    getFullName (){
        return`${this.firstName} ${this.lastName}`
    }

    getBirthYear (){
        return this.dob.getFullYear();
    }

}

const oluwakemi = new Student('oluwakemi', 'onajimi', '04-02-2000');
console.log(oluwakemi);
console.log(oluwakemi.getFullName());

const Chidu= new Student('Chidu', 'Ugochukwu', '04-02-1990');
console.log (Chidu);
console.log(Chidu.getFullName());