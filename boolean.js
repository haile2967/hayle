/*// 1. Object Literal or Object initializer
const ob1 = {};
const ob2 = {
  name: "Abebe",
};
const ob3 = {
  name: "Abebe",
  show: function () {
    return this.name;
  },
};
console.log(ob1);
console.log(ob2.name);
console.log (ob3.show());
// 2. Object.create() method
const Employer = {
  Name: "Abebe",
  salary: 1000,
};
const Lecturer = Object.create(Employer); // we use Employer object as prototype for creating object lecturer.
console.log (Lecturer.Name);
// 3. Object constructors.*/
const ob11 = new Object (); // this method of creating object is not recommended now day.
/// 4. function constructors
function EmployerList(name, salary) {
  this.name = name;
  this. salary = salary;
}
const object1 = new EmployerList("Abebe", 10000);
//console.log(object1.name);
//5. Function Constructor with prototype
function person () {}
person.prototype.name = "Abebe";
person.prototype.salary = 10000;
const object2 = new person ();
//console.log(object2.sallary);
//6. ES6 class syntax
class person1 {
  constructor(name) {
    this.name = "Abebe";
  }
  show1 = () => {
    return this.name;
  };
}
const object3 = new person1();
//console.log (object3.show1());
// 7. Singleton pattern
let object4 = new (function () {
  this.name = "Abebe4";
  this. salary = 1000;
})();
console.log(object4.name);
