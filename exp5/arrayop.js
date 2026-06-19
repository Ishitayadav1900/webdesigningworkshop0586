let person = { name: "John",
     age: 30 ,
     city: "New York"
};
console.log(person); 

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
typeof 
console.log(typeof person); // Output: object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);// Output: 1
console.log(numbers[1]);// Output: 2
console.log(numbers[2]);// Output: 3
console.log(numbers[3]);// Output: 4
console.log(numbers[4]);// Output: 5
console.log(typeof numbers); // Output: object

let mixedArray = [1, "Hello", true, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray[0]); //output: 1
console.log(mixedArray[1]); //output: Hello
console.log(mixedArray[2]); //output: true
console.log(mixedArray[3]); //output: { name: "Alice" }
console.log(mixedArray[4]); //output: [1, 2, 3]
console.log(typeof mixedArray); // Output: object
console.log(numbers.length); // Output: 5

//normalfunction with no parameter
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

//normal function 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // Output: 15

//function expression
let divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5

//normal function with expression
let add = function(a, b) {
    return a + b;
};
console.log(add(7, 8)); // Output: 15

//arrow function with no parameter
let sayHello = () => {
    console.log("Hello!");
};
sayHello(); // Output: Hello!

//arrow function with single parameter
let square = x => x * x;
console.log(square(4)); // Output: 16

//arrow function with one parameter
const greetuser = name => `Hello, ${name}!`;
console.log(greetuser("Alice")); // Output: Hello, Alice!

//arrow function with multiple parameters
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 10)); // Output: 15

//map on array
let numbersArray = [1, 2, 3, 4, 5];
let squaredNumbers = numbersArray.map(num => num * 5);
console.log(squaredNumbers); // Output: [5, 10, 15, 20, 25]

let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); // Output: [2, 4]

let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 15

let students = [
    { name: "Alice", age: 60, marks: 85 },
    { name: "Bob", age: 22, marks: 75 },
    { name: "Charlie", age: 21, marks: 90 }
];  

let marks= students.map(student => student.marks);
console.log(marks); // Output: [85, 75, 90]
 
let names = students.map(student => student.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

let topStudent = students.filter(student => student.marks > 80);
console.log(topStudent); // Output: [{ name: "Alice", age: 60, marks: 85 }, { name: "Charlie", age: 21, marks: 90 }]

let totalMarks = students.reduce((accumulator, student) => accumulator + student.marks, 0);
console.log(totalMarks); // Output: 250

//mixed object
let mixedobject = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
    greet: function() {
        console.log("Hello");
        //arrow function in object
        let arrowGreet = () => {
            console.log("Hi");
        };
    }
};
console.log(mixedobject.name); // Output: Alice
console.log(mixedobject.age); // Output: 25
console.log(mixedobject.hobbies); // Output: ["reading", "traveling", "coding"]
console.log(mixedobject.hobbies[0]); // Output: reading
console.log(mixedobject.hobbies[1]); // Output: traveling
console.log(mixedobject.hobbies[2]); // Output: coding

console.log(mixedobject.address); // Output: { street: "123 Main St", city: "New York", country: "USA" }
console.log(mixedobject.address.street); // Output: 123 Main St
console.log(mixedobject.address.city); // Output: New York
console.log(mixedobject.address.country); // Output: USA

mixedobject.greet(); // Output: Hello
mixedobject.address.greet(); // Output: Hi

//object inside array
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(people[0]); // Output: { name: "Alice", age: 25 }
console.log(people[1]); // Output: { name: "Bob", age: 30 }
console.log(people[2]); // Output: { name: "Charlie", age: 35 }
console.log(people[0].name); // Output: Alice
console.log(people[0].age); // Output: 25
console.log(people[1].name); // Output: Bob
console.log(people[1].age); // Output: 30
console.log(people[2].name); // Output: Charlie
console.log(people[2].age); // Output: 35

let company = {
    name: "Tech Company",
    employees: ["Alice", "Bob", "Charlie"],
};
console.log(company.name); // Output: Tech Company
console.log(company.employees); // Output: ["Alice", "Bob", "Charlie"]
console.log(company.employees[0]); // Output: Alice
console.log(company.employees[1]); // Output: Bob
console.log(company.employees[2]); // Output: Charlie
