function toStringExtension(){
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
        toString() {
            let result=Object.keys(this).reduce((acc,key)=>{
                acc.push(`${key}: ${this[key]}`);
                return acc;
            },[]).join(', ');
            return `${this.constructor.name} (${result})`;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course=course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
console.log(p.toString()==='Person (name: Pesho, email: Pesho@pesh.com)');