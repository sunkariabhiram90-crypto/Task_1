//Task 1

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

let grade =
  marks >= 90 ? "Grade A" :
  marks >= 75 ? "Grade B" :
  marks >= 60 ? "Grade C" :"No Grade";

console.log("Marks:", marks);
console.log("Result:", result);
console.log("Grade:", grade);


//Task 2

let salary = 25000;
let bonus = salary * 10 / 100;
let finalSalary = salary;
finalSalary += bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);


//Task 3

let email = "admin@gmail.com";
let password = "12345";

let userEmail = prompt("Enter Email");
let userPassword = prompt("Enter Password");

(userEmail === email && userPassword === password) ?
    (alert("Login Success"), console.log("Login Successful")) :
    (alert("Login Failed"), console.log("Login Failed"));


//Task 4

let price = 2000;
let discount = price > 1000 ? price * 0.20 : 0;
let finalAmount = price - discount;

console.log("Original Price :", price);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

//Task 5

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);

console.log("Last Product :", products[products.length - 1]);

console.log("Total Products :", products.length);

//Task 6

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log("Employee Details :", employee);
console.log("Employee Name :", employee.name);
console.log("Salary :", employee.salary);


//Task 7

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let discount1 = totalBill * 10 / 100;
let finalAmount1 = totalBill - discount1;

console.log("Total Bill :", totalBill);
console.log("Discount :", discount1);
console.log("Final Amount :", finalAmount1);

//Task 8

let age = 19;
let result1 = age >= 18 ? "Eligible for Voting" : "Not Eligible";
console.log(result1);


//Task 9

let a = 10;

console.log("Initial Value :", a);

console.log("a++ :", a++);
console.log("After a++ :", a);

console.log("++a :", ++a);
console.log("After ++a :", a);

console.log("a-- :", a--);
console.log("After a-- :", a);

console.log("--a :", --a);
console.log("After --a :", a);

//task 10

let isPresent = true;
let completedTask = true;
let result2 = (isPresent && completedTask) ? "Eligible for Salary" : "Not Eligible";
console.log(result2);


//Bonus Task

let employees = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID :", employees.id);
console.log("Employee Name :", employees.name);
console.log("Department :", employees.department);
console.log("Salary :", employees.salary);
console.log("Experience :", employees.experience, "Years");

let Supplement = employees.salary * 10 / 100;
let Total_Salary = employees.salary + Supplement;
console.log("Supplement :", Supplement);
console.log("Final Salary :", Total_Salary);

let performance = employees.experience >= 2 ? "Good" : "Average";
console.log("Performance Status :", performance);