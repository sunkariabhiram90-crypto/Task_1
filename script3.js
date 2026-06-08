// Task 1

let basicSalary = 25000;

let hra = basicSalary * 20 / 100;
let bonus = basicSalary * 10 / 100;

let totalSalary = basicSalary + hra + bonus;

let tax = totalSalary * 5 / 100;

let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

// Task 2

let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade : A+");
}
else if (marks >= 80) {
    console.log("Grade : A");
}
else if (marks >= 70) {
    console.log("Grade : B");
}
else if (marks >= 60) {
    console.log("Grade : C");
}
else {
    console.log("Grade : Fail");
}

// Task 3

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin") {

    if (password === "12345") {
        alert("Login Success"), console.log("Welcome, " , username , "!");
    } else {
        alert("Invalid Password"), console.log("Login Failed");
    }

} else {
    alert("Invalid Username"), console.log("Login Failed");
}

// Task 4

let balance = 5000;

let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount <= 0) {
    alert("Please enter a valid amount");
} else if (withdrawAmount > balance) {
    alert("Insufficient Balance"), console.log("Current Balance :", balance);
} else {
    balance -= withdrawAmount;

    alert(
        "Withdrawal Success\n" +
        "Withdrawn Amount : " , withdrawAmount , "\n" +
        "Remaining Balance : " , balance
    );
    console.log("Remaining Balance :", balance);
}


// Task 5

let purchaseAmount = Number(prompt("Enter Purchase Amount:"));

let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 20 / 100;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 10 / 100;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 5 / 100;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount : " , purchaseAmount);
console.log("Discount : " , discount);
console.log("Final Amount : " , finalAmount);


// Task 6

let helmet = confirm("Do you have a Helmet?");
let license = confirm("Do you have a License?");

if (!helmet && !license) {
    alert("Fine : ₹3000"), console.log("Fine : " , 3000);   
}
else if (!helmet) {
    alert("Fine : ₹1000"), console.log("Fine : " , 1000);   
}
else if (!license) {
    alert("Fine : ₹2000"), console.log("Fine : " , 2000);
}
else {
    alert("No Fine. Drive Safely!"), console.log("No Fine. Drive Safely!");
}

// Task 7

let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {

    if (attendance[i] === "P") {
        presentDays++;
    } else {
        absentDays++;
    }

}

console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);

// Task 8

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key , " : " , product[key]);
}

// Task 9

let distance = Number(prompt("Enter Distance in KM:"));

let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = 100 + ((distance - 5) * 15);
}
else {
    fare = 175 + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" , fare);


// Task 10

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("\nEmployee Details:");

let i = 0;
while (i < employees.length) {
    console.log(
        "ID :", employees[i].id,
        "| Name :", employees[i].name,
        "| Salary :", employees[i].salary
    );

    i++;
}

let highest = employees[0];
let lowest = employees[0];

let totalSalary1 = 0;

for (let i = 0; i < employees.length; i++) {

    totalSalary1 += employees[i].salary;

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }
}

let totalEmployees = employees.length;

console.log("\nHighest Salary Employee:");
for (let key in highest) {
    console.log(key , " : " , highest[key]);
}

console.log("\nLowest Salary Employee:");
for (let key in lowest) {
    console.log(key , " : " , lowest[key]);
}

console.log("Total Employees :", totalEmployees);

console.log("Total Salary Expenditure :", totalSalary1);