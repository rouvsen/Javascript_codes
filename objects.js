// let javid1 = {
//     name: "Javid",
//     surname: "Khalilov",
//     age: 27
// }

// console.log(javid1);

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// let javid2 = new Person("Javid", "Khalilov", 27);
// console.log(javid2);

// class Person {
//     salary = 0;
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
// }

// let rovshan = new Person("Rovshan", "Maharramov", 21);
// rovshan.salary = 300;
// console.log(rovshan);

// let Person = function(name, surname, age) {

//     if(!(this instanceof Person)) {
//         return new Person(name, surname, age);
//     }

//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// Person.prototype.calculateYear = function() {
//     return new Date().getFullYear() - this.age;
// }

// let rovshan = new Person('Rovshan', 'Maharramov', 21);
// console.log(rovshan);//Person type-inda olan rovshan Object-ini print edecek
// // console.log(rovshan.calculateYear());//Person type-inda olan rovshan Object-inin year-ini print et

// let javid = new Person("Javid", "Khalilov", 27);
// console.log(javid);

// let taleh = Person("Taleh", "Taghi", 20);
// console.log(taleh);

// function Employee(name, salary) {
//     if(!(this instanceof Employee)) {
//         return new Employee(name, salary);
//     }

//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype.calculateSalary = function() {
//     let month = new Date().getMonth() + 1;
//     let tax = 0;
//     let total = this.salary * month;

//     if(total <= 20000) {
//         tax = total * 0.2;
//     } else if(total > 20000 && total <= 30000) {
//         tax = total * 0.25;
//     } else {
//         tax = total * 0.3;
//     }

//     return {
//         tax: tax,
//         paid: total - tax
//     }
// }

// let emp1 = new Employee('Javid', 4500);
// let emp1_salary = emp1.calculateSalary();
// let emp1_salaryInfo = `${emp1.name} adli ishci umumi ${emp1_salary.tax} AZN vergi
// tutulmasi ile ${emp1_salary.paid} AZN maash almisdir.`;

// let emp2 = new Employee('Rovshan', 7000);
// let emp2_salary = emp2.calculateSalary();
// let emp2_salaryInfo = `${emp2.name} adli ishci umumi ${emp2_salary.tax} AZN vergi
// tutulmasi ile ${emp2_salary.paid} AZN maash almisdir.`;

// console.log(emp1_salaryInfo);
// console.log(emp2_salaryInfo);

//Object.create(extend etmek istediyin Object || Class, indiki Object ozellikleri 
//{ name: {value - keywordu ile deyer teyin etmek} meselen name property-sine} 

// let javid = {
//     calculateAge: function() {
//         return new Date().getFullYear() - this.yearOfBirth;
//     }
// }

// // console.log(javid);

// let rovshan = Object.create(javid, { //inherit edir javid Object-inden ve elave Oz Ozellikleri
//     name: {value: 'Rovshan'},
//     surname: {value: 'Maharramov'},
//     yearOfBirth: {value: 2001}
// })

// console.log(rovshan);
// console.log(rovshan.yearOfBirth);
// console.log(rovshan.calculateAge());

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2022 - this.yearOfBirth;
// }

// let Teacher = function(name, yearOfBirth, job, subject) {
//     Person.call(this, name, yearOfBirth, job);
//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.constructor = Teacher;

// let teacher1 = new Teacher('Javid', 1995, 'Senior Software Engineer', 'IT Coordinator');

// console.log(teacher1);
// console.log(teacher1.calculateAge());

//Person Constructor
// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayMyName = function(){
//     console.log(`My name is ${this.name}.`);
// }

// let person1 = new Person("Javid");
// person1.sayMyName();

// //Teacher Constructor
// function Teacher(name, branch){
//     Person.call(this, name);
//     this.branch = branch;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constrcutor = Teacher;

// Teacher.prototype.teach = function(){
//     console.log(`I teach ${this.branch}`);
// }

// let teacher1 = new Teacher('Rovshan', "Programming");
// teacher1.sayMyName();
// teacher1.teach();

// //Student Constructor
// function Student(name, group){
//     Person.call(this, name)
//     this.group = group;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.consturctor = Student;

// Student.prototype.sayGroup = function(){
//     console.log(`My group is ${this.group}`);
// }

// let student1 = new Student('Abbas', 'L3');
// student1.sayMyName();
// student1.sayGroup();

// //Headmaster Constructor
// function Headmaster(name, branch){
//     Teacher.call(this, name, branch);
// }

// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constrcutor = Headmaster;

// Headmaster.prototype.sayResult = function(){
//     console.log(`I'm ${this.name} who My speciality is ${this.branch}, so I would like to say that all the tasks have been done.`);
// }

// let headmaster1 = new Headmaster('Javid', "Computer Science");
// console.log(headmaster1);
// headmaster1.sayMyName(); //Person Constructor
// headmaster1.teach();     //Teacher Constructor
// headmaster1.sayResult(); //Headmaster Constructor

//Callback Functions
// function multipByTwo(a, b, c, callback){

//     let arr = [];

//     for(let i = 0; i < 3; i++){
//         arr[i] = callback(arguments[i] * 2);
//     }

//     return arr;
// }

// let val;

// function addOne(a) {
//     return a + 1;
// }

// function addTwo(a) {
//     return a + 2;
// }

// function addThree(a) {
//     return a + 3;
// }

// val = multipByTwo(5, 10, 15, function(a){
//     return a + 7;
// });
// console.log(val);

//Immediate Functions - Application Run olunduqda cemi 1 defe ishe salinir
// (
//     function(name){

//         let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//         let currentDay = new Date().getDay();// 0~6

//         currentDay = days[currentDay];

//         console.log(`Welcome ${name}, Today is ${currentDay}`);
//     }('Javid')
// );

// (
//     function(name){
//         let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//         let currentDay = new Date().getDay();// 0~6

//         currentDay = days[currentDay];

//         console.log(`Welcome ${name}, Today is ${currentDay}`);
//     }('Rovshan')
// )

//Function-dan function gondermek
// function clientHobby(hobbyName){

//     switch(hobbyName){//the lates version of switch-case doing break that all case.

//         case 'car':
//             return function(name){
//                 console.log(`Hello ${name}, do you have a car?`);
//             }
        

//         case 'book':
//             return function(name){
//                 console.log(`Hello ${name}, what is your favourite book?`);
//             };
        

//         case 'software':
//             return function(name, type){
//                 console.log(`Hello ${name}, are you interested in ${type}?`);
//             };
        

//         default:
//             return function(enthusiasm){
//                 return `Senin ${enthusiasm}-a hevesin yarana biler, maraqlan mence.`;
//             };

//     }//switch block

// }//function block

// let carHobby = clientHobby('car');
// carHobby('Javid');

// let bookHobby = clientHobby('book');
// bookHobby('Taleh');

// let softwareHobby = clientHobby('software');
// softwareHobby('Rovshan', 'Node.js');

// let differentHobby = clientHobby('computer');
// let result = differentHobby('Hardware and Software ~ all.');
// console.log(result);

//Getter and Setters.

// let javid = {
//     name: 'Javid',
//     surname: 'Khalilov',
//     branch: 'Teacher',
//     getName: function(){
//         return this.name;
//     },
//     getSurname: function(){
//         return this.surname;
//     },
//     getBranch: function(){
//         return this.branch;
//     },
//     setName: function(newName){
//         this.name = newName;
//     },
//     setSurname: function(newSurname){
//         this.surname = newSurname;
//     },
//     setBranch: function(newBranch){
//         this.branch = newBranch;
//     }
// }

// console.log(javid.getName());
// console.log('Javid\'s old branch: ' + javid.getBranch());
// javid.setBranch('IT Drector');
// console.log('Javid\'s new branch: ' + javid.getBranch());

// let person = {
//     name: 'Sadik',
//     surname: 'Turan',
//     get fullName(){
//         return `${this.name + ' ' + this.surname}`;
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.name = parts[0];
//         this.surname = parts[1];
//     }
// }

// person.fullName = 'Rovshan Maharramov';

// console.log(person.fullName);

//call, apply, bind methods : you can use simple and complex versions.
// let print = function(){
//     console.log('Welcome ' + this.name);
// }

// let javid = {
//     name: 'Javid'
// }

// let taleh = {
//     name: 'Taleh'
// }

// let rovshan = {
//     name: 'Rovshan'
// }

// print.call(javid);
// print.apply(taleh);
// bindRovshan = print.bind(rovshan);
// bindRovshan();

//call, apply, bind - function gets parameters.
// let print = function(a, b){
//     console.log('Welcome ' + this.name + '. ' + 'Are you interested in ' + a + ' or ' + b + '?');
// }

// let javid = {
//     name: 'Javid'
// }

// print.call(javid, 'Java', 'Javascript');
// print.apply(javid, ['C#', 'Python']);

// bindJavid = print.bind(javid);
// bindJavid('Java', 'Javascript');

//Examples on call, apply and bind methods.
// let javid = {
//     name: 'Javid',
//     print: function(){
//         console.log(
//             "Welcome " + this.name + '.'
//         );
//     }
// }

// let taleh = {
//     name: 'Taleh'
// }

// javid.print.call(taleh);
// javid.print.apply(taleh);
// bindTaleh = javid.print.bind(taleh);
// bindTaleh();

// Examples on call, apply and bind methods with a few parameters.
// let javid=  {
//     name: 'Javid',
//     min: 30,
//     max: 70,
//     compare: function(value){
//         if(typeof value !== 'number'){
//             return false;
//         } else {
//             return value >= this.min && value <= this.max;
//         }
//     }
// }

// let taleh = {
//     name: 'Taleh',
//     min: 70,
//     max: 100
// }

// // console.log(javid.compare.call(taleh, 30));
// // console.log(javid.compare.apply(taleh, [69]));
// bindTaleh = javid.compare.bind(taleh, 50);
// console.log(bindTaleh());

//try-catch Exception Handling.
// try{
//     console.log('Javid, Taleh, Rovshan');//try-da xeta bash vermeyende catch block-u islemir
// } catch(e){
//     console.log('Javid teacher is Head of IT Department.');
//     console.log(e.name);
//     console.log(e.message);
//     console.log(typeof e);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof Error);
// } finally{ console.log('Everything is okay.') }//finally ise her zaman ishleyir.

