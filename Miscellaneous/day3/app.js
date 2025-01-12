//function PersonMaker(name ,age){
  //  const person ={
    //    name:name,
      //  age:age,
        //talk(){
          //  console.log(`hi my name is ${this.name}`);
        //},
    //};
    //return person;
//}
//let p1 =PersonMaker("nisha",21);
class person{
    constructor(name, age){
        this.name =name;
        this.age =age;

    }
    talk(){
        console.log(`Hi ,My name is ${this.name}`);
    }
}
let p1 =new person("admin" ,24);
let p2 =new person("eve",56);
//for inherentance




//function PersonMaker(name ,age){
//  const person ={
//    name:name,
//  age:age,
//talk(){
//  console.log(`hi my name is ${this.name}`);
//},
//};
//return person;
//}
//let p1 =PersonMaker("nisha",21);
class person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;

    }
    talk() {
        console.log(`Hi ,My name is ${this.name}`);
    }
}
//let p1 =new person("admin" ,24);
//let p2 =new person("eve",56);
class student extends person{
    constructor(name, age, marks) {
        console.log("student class constructor");
        this.marks = marks;
        super(name, age);//parent class constructor is being called
    }
}
class teachers extends person {
    constructor(name, age, subject) {
        
        super(name, age);
        this.subject = subject;
    }
}
