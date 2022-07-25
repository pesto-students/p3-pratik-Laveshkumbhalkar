const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
// console.log(Person);
// TODO: create the class Teacher and a method teach

const Teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };
};

Teacher.prototype = new Person();
const him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
