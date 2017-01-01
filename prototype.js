function Person(name, age) {
  this.name = name;
  this.age = age;
}
// var Person3 = new Person('이철희', 26);
// Person.walk = function(speed) {
//   console.log(speed);
// }
// var Person4 = new Person('김지원', 24);

// Person3.walk(20);
// Person4.walk(40);

Person1.walk = function(speed) {
  console.log(speed);
}

var Person1 = new Person('고기훈', 25);
var Person2 = new Person('김은찬', 25);

console.log(Person1.name);
Person1.walk(10);

Person.prototype.walk = function(speed, ee) {
  console.log(speed * 2 * ee);
}
Person1.walk(10);
Person1.walk(20, 30);
