// DATA STRUCTURE

//OBJECTS
 let person = {
     name: "John",
     age: 32,
     partTime: false,
     showInfo: function (realAge) {
         console.log(`${this.name} is ${realAge}`);
     }
};
console.log(person.name);
console.log(person.age);
console.log(person.partTime);
person.showInfo(40);
console.log(person);
console.log(person.showInfo);


//ARRAYS
const grades = [100, 70, 90, 80, 60, 60, 70, 80, 90];
let gradeSum = 0;
for (let i = 0; i < grades.length; i++) {
    gradeSum += grades[i];
}
console.log(gradeSum/grades.length);

//MAPS
const course = new Map();
course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});
console.log(course);
console.log(course.react);
console.log(course.get("react"));
const details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1, 2]]
]);
console.log(details.size);
details.forEach(function (item) {
    console.log(item);
}
);
console.log(details.get("items"));
console.log(details.get(2));
console.log(details.get(new Date()));


//SETS
const books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");
console.log(books);
console.log(books.size);
console.log(books.has("Oliver Twist"));
books.delete("Oliver Twist");
console.log(books.has("Oliver Twist"));
books.clear();
console.log(books.size);
const data = [1, 2, 3, 4, 5, 5, 5, 6, 6];
const set = new Set(data);
console.log(set);
console.log(set.size);
console.log(set.has(5));
set.add(10);
console.log(set);
console.log(set.size);
set.delete(4);
console.log(set);
console.log(set.size);
set.clear();
console.log(set);
console.log(set.size);
