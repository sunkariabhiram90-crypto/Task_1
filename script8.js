//Task 1

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

function employeeReport(empArray) {

    let highSalaryEmployees = empArray.filter(
        emp => emp.salary > 40000 && emp.name.toUpperCase()
    );

    console.log("Employees with Salary Above ₹40,000");
    console.log(highSalaryEmployees);

    let firstEmployee = empArray.find(
        (emp) => emp.salary > 60000
    );

    console.log("\nFirst Employee with Salary Above ₹60,000");
    console.log(firstEmployee);

    let totalSalary = empArray.reduce(
        (total, emp) => total + emp.salary, 0 );

    console.log("\nTotal Company Salary Expense");
    console.log(totalSalary);

    let employeeNames = empArray.map(
        emp => emp.name.toUpperCase()
    );

    console.log("\nEmployee Names");
    console.log(employeeNames);
}

employeeReport(employees);


//Task 2

let student = {
    name: prompt("Enter your name"),
    age: Number(prompt("Enter your age")),
    percentage: Number(prompt("Enter your percentage"))
};

function checkAdmission(student) {

    if (student.age >= 18) {

        if (student.percentage >= 60) {
            return `${student.name} Admission Approved`;
        } else {
            return `${student.name} Admission Rejected - Percentage below 60`;
        }

    } else {
        return `${student.name} Admission Rejected - Age below 18`;
    }
}

console.log(checkAdmission(student));

//Task 3

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

function cartReport(items) {

    // Total Bill
    let totalBill = items.reduce(
        (total, item) => total + (item.price * item.qty),
        0
    );

    console.log("Total Bill: ₹" + totalBill);

    // Most Expensive Product
    let expensiveProduct = items.reduce(
        (highest, item) =>
            item.price > highest.price ? item : highest
    );

    console.log("\nMost Expensive Product:");
    console.log(expensiveProduct);

    // Product Names
    let productNames = items.map(
        item => item.product.toUpperCase()
    );

    console.log("\nProduct Names:");
    console.log(productNames);
}

cartReport(cart);

//Task 4

let signal = prompt("Enter Signal (red/yellow/green):");
let violation = confirm("Did the driver violate the rule?");

function trafficFine(signal, violation) {

    switch (signal.toLowerCase()) {

        case "red":
            console.log("Action: Stop");
            console.log("Fine Amount: ₹" + (violation ? 1000 : 0));
            break;

        case "yellow":
            console.log("Action: Wait");
            console.log("Fine Amount: ₹" + (violation ? 500 : 0));
            break;

        case "green":
            console.log("Action: Go");
            console.log("Fine Amount: ₹0");
            break;

        default:
            console.log("Invalid Signal");
    }
}

trafficFine(signal, violation);

//Task 5

let students = [];

let count = Number(prompt("Enter Number of Students:"));

for (let i = 1; i <= count; i++) {

    let name = prompt("Enter Student Name:");
    let mark = Number(prompt("Enter Student Mark:"));

    students.push({
        name: name,
        mark: mark
    });
}

function studentResult(studentList) {

    let passedStudents = studentList.filter(
        student => student.mark >= 35
    );

    console.log("Passed Students:");
    console.log(passedStudents);

    let failedStudents = studentList.filter(
        student => student.mark < 35
    );

    console.log("Failed Students:");
    console.log(failedStudents);

    let gradeList = studentList.map(student => {

        let grade;

        if (student.mark >= 90) {
            grade = "A";
        } else if (student.mark >= 75) {
            grade = "B";
        } else if (student.mark >= 35) {
            grade = "C";
        } else {
            grade = "F";
        }

        return student.name + " - Grade " + grade;
    });

    console.log("Grade List:");
    console.log(gradeList);
}

studentResult(students);

//Task 6

let customerName = prompt("Enter Customer Name:");
let numberOfItems = Number(prompt("Enter Number of Items:"));

let items = [];

for (let i = 1; i <= numberOfItems; i++) {
    let item = prompt("Enter Item " + i + ":");
    items.push(item);
}

function placeOrder(customerName, ...items) {

    let customer = customerName.trim().toUpperCase();

    console.log("Customer Name:", customer);

    let orderedItems = items.map(item => item.trim().toUpperCase());

    console.log("Ordered Items:");
    console.log(orderedItems);

    console.log("Total Item Count:", orderedItems.length);
}

placeOrder(customerName, ...items);

//Task 7

let balance = 10000;
alert("balance is :" +balance)

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        return balance;
    }
    return "Insufficient Balance";
}

function checkBalance() {
    return balance;
}

let choice = prompt(
    "Choose Transaction:\n1. Deposit\n2. Withdraw\n3. Check Balance"
);

switch (choice) {

    case "1":
        let depositAmount = Number(prompt("Enter Deposit Amount:"));
        console.log("Updated Balance: ₹" + deposit(depositAmount));
        break;

    case "2":
        let withdrawAmount = Number(prompt("Enter Withdraw Amount:"));
        console.log("Updated Balance: ₹" + withdraw(withdrawAmount));
        break;

    case "3":
        console.log("Current Balance: ₹" + checkBalance());
        break;

    default:
        console.log("Invalid Choice");
}

//Task 8

let bookedSeats = [];

function bookSeat() {

    let seat = prompt("Enter Seat Number:").trim().toUpperCase();

    if (bookedSeats.includes(seat)) {
        console.log(seat + " Already Booked");
    } else {
        bookedSeats.push(seat);
        console.log(seat + " Booking Confirmed");
    }
}

function displayBookedSeats() {

    console.log("\nBooked Seats:");

    bookedSeats.forEach(seat => console.log(seat));

    console.log("Total Booked Seats: " + bookedSeats.length);
}

let totalSeats = Number(prompt("How Many Seats Do You Want To Book?"));

for (let i = 1; i <= totalSeats; i++) {
    bookSeat();
}

displayBookedSeats();

//Task 9

let username = prompt("Enter Username:");
let email = prompt("Enter Email:");
let password = prompt("Enter Password:");

function validateLogin(username, email, password) {

    if (username.includes(" ")) {
        console.log("Username should not contain spaces");
    }
    if (!email.includes("@")) {
        console.log("Invalid Email");
    }
    if (password.length < 8) {
        console.log("Password must be at least 8 characters");
    }
    else {
        console.log("Login Validation Successful");
    }
}

validateLogin(
    username.trim(),
    email.trim().toLowerCase(),
    password.trim()
);

//Task 10

function productDashboard() {

    fetch("https://fakestoreapi.com/products")

        .then(function (response) {
            return response.json();
        })

        .then(function (products) {

            // Count Total Products
            console.log("Total Products: " + products.length);

            // Display Product Titles
            console.log("\nProduct Titles:");

            products.forEach(function (product) {
                console.log(product.title.toUpperCase());
            });

            // Find Products Above ₹500
            let expensiveProducts = products.filter(function (product) {
                return product.price > 500;
            });

            console.log("\nProducts Above ₹1000:");

            if (expensiveProducts.length > 0) {

                expensiveProducts.forEach(function (product) {
                    console.log(
                        product.title.toUpperCase() +
                        " - ₹" +
                        product.price
                    );
                });

            } else {
                console.log("No Products Found Above ₹1000");
            }

        })

        .catch(function (error) {
            console.log("Error: " + error.message);
        });

}

productDashboard();

//Task 11

let dob = prompt("Enter Your DOB (YYYY-MM-DD)");

function birthdayDetails(dob) {

    let date = new Date();

    // Set DOB
    date.setFullYear(dob.split("-")[0]);
    date.setMonth(dob.split("-")[1] - 1);
    date.setDate(dob.split("-")[2]);

    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    console.log("Day: " + date.getDate());
    console.log("Month: " + (date.getMonth() + 1));
    console.log("Year: " + date.getFullYear());
    console.log("Weekday Name: " + weekDays[date.getDay()]);
}

birthdayDetails(dob);

//Task 12

let plans = ["Mobile", "Basic", "Standard", "Premium"];

let userPlan = prompt("Enter Plan Name:");

function netflixSubscription(plan) {

    let selectedPlan = plan.trim().toLowerCase();

    let benefit =
        selectedPlan === "mobile"
            ? "Watch on 1 Mobile Device"
            : selectedPlan === "basic"
            ? "Watch on 1 Screen in HD"
            : selectedPlan === "standard"
            ? "Watch on 2 Screens in Full HD"
            : selectedPlan === "premium"
            ? "Watch on 4 Screens in Ultra HD"
            : "Invalid Plan";

    console.log("Available Plans:", plans.join(", "));
    console.log("Selected Plan:", selectedPlan.toUpperCase());
    console.log("Benefit:", benefit);
}

netflixSubscription(userPlan);

//Task 13

const patients = [
    { id: 101, name: "Rahul", status: "Critical" },
    { id: 102, name: "Kavin", status: "Normal" },
    { id: 103, name: "John", status: "Critical" },
    { id: 104, name: "Arun", status: "Normal" }
];

function patientManagement() {

    // Find Critical Patients
    let criticalPatients = patients.filter(
        patient => patient.status.toLowerCase() === "critical"
    );

    console.log("Critical Patients:");
    console.log(criticalPatients);

    // Find Patient By ID
    let patientId = Number(prompt("Enter Patient ID:"));

    let patient = patients.find(
        patient => patient.id === patientId
    );

    if (patient) {
        console.log("\nPatient Found:");
        console.log(patient);
    } else {
        console.log("\nPatient Not Found");
    }

    // Count Total Patients
    console.log("\nTotal Patients: " + patients.length);
}

patientManagement();

//Task 14

let inventory1 = [
    { id: 1, product: "Laptop", quantity: 10 },
    { id: 2, product: "Mouse", quantity: 25 }
];

let inventory2 = [
    { id: 3, product: "Keyboard", quantity: 15 },
    { id: 4, product: "Monitor", quantity: 8 }
];

function inventoryManagement() {

    // Merge Arrays using Spread Operator
    let mergedInventory = [...inventory1, ...inventory2];

    console.log("Merged Inventory:");
    console.log(mergedInventory);

    // Destructuring
    let { id, product, quantity } = mergedInventory[0];

    console.log("\nProduct Details:");
    console.log("ID:", id);
    console.log("Product:", product);
    console.log("Quantity:", quantity);

    // User Input
    let newId = Number(prompt("Enter Product ID:"));
    let newProduct = prompt("Enter Product Name:");
    let newQuantity = Number(prompt("Enter Quantity:"));

    // Add New Product using Spread Operator
    let updatedInventory = [
        ...mergedInventory,
        {
            id: newId,
            product: newProduct.trim().toUpperCase(),
            quantity: newQuantity
        }
    ];

    console.log("\nUpdated Inventory:");
    console.log(updatedInventory);
}

inventoryManagement();

//Task 15

let groupMembers = [];

let totalMembers = Number(prompt("Enter Number of Members:"));

for (let i = 1; i <= totalMembers; i++) {

    let member = prompt("Enter Member " + i + " Name:");

    let memberName =
        member.trim().charAt(0).toUpperCase() +
        member.trim().slice(1).toLowerCase();

    groupMembers.push(memberName);
}

let action = prompt(
    "Choose Action:\n" +
    "1. Add Member\n" +
    "2. Remove Member\n" +
    "3. Insert Member At Position"
);

if (action === "1") {

    let member = prompt("Enter Member Name:");

    let memberName =
        member.trim().charAt(0).toUpperCase() +
        member.trim().slice(1).toLowerCase();

    let addPosition = prompt(
        "Add Member At:\n" +
        "1. Beginning\n" +
        "2. End"
    );

    if (addPosition === "1") {

        groupMembers.unshift(memberName);

        console.log(memberName + " Added At Beginning position");

    } else {

        groupMembers.push(memberName);

        console.log(memberName + " Added At Ending position");
    }

} else if (action === "2") {

    let removePosition = prompt(
        "Remove Member From:\n" +
        "1. Beginning\n" +
        "2. End"
    );

    if (removePosition === "1") {

        let removedMember = groupMembers.shift();

        console.log(removedMember + " Removed From starting position");

    } else {

        let removedMember = groupMembers.pop();

        console.log(removedMember + " Removed From Ending position");
    }

} else if (action === "3") {

    let position = Number(
        prompt("Enter Position To Insert:")
    );

    let member = prompt("Enter Member Name:");

    let memberName =
        member.trim().charAt(0).toUpperCase() +
        member.trim().slice(1).toLowerCase();

    groupMembers.splice(position - 1, 0, memberName);

    console.log(memberName + " Inserted Successfully");
}

console.log("\nFinal Group Members:");

groupMembers.forEach(member => {
    console.log(member);
});