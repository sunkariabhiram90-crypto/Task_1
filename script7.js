//Task 1

function trafficSignal(signal) {
    switch (signal.toLowerCase()) {
        case "red":
            console.log("Stop");
            break;

        case "yellow":
            console.log("Get Ready");
            break;

        case "green":
            console.log("Go");
            break;

        default:
            console.log("Invalid Signal Color");
    }
}

let signal = prompt("Enter Signal Color (Red, Yellow, Green)");
trafficSignal(signal);

//Task 2

function employeeAttendance() {

    console.log("     EMPLOYEE ATTENDANCE REPORT");

    for (let i = 1; i <= 30; i++) {
        console.log(`Employee ${i} Present`);
    }
}

employeeAttendance();

// Task 3

function atmWithdrawal() {

    let balance = 10000;
    let withdraw = 500;
    let transaction = 1;

    console.log("        ATM WITHDRAWAL");

    while (balance > 0) {

        balance -= withdraw;

        console.log(`Transaction ${transaction}`);
        console.log(`Withdrawn : ₹${withdraw}`);
        console.log(`Balance   : ₹${balance}`);

        transaction++;
    }

    console.log("ACCOUNT BALANCE IS ZERO");
}

atmWithdrawal();

// Task 4

function checkAdmission(student) {

    let [name, age, percentage, examStatus] = student;

    name = name.trim().toUpperCase();

    if (age >= 18) {
        if (percentage >= 70) {
            if (examStatus.toLowerCase() === "passed") {
                console.log(`${name} : Admission Approved`);
            } else {
                console.log(`${name} : Admission Rejected - Entrance Exam Not Passed`);
            }
        } else {
            console.log(`${name} : Admission Rejected - Percentage Less Than 70`);
        }
    } else {
        console.log(`${name} : Admission Rejected - Age Less Than 18`);
    }
}

let student = [
    prompt("Enter Student Name:"),
    Number(prompt("Enter Age:")),
    Number(prompt("Enter Percentage:")),
    prompt("Enter Exam Status (Passed/Failed):")
];

checkAdmission(student);


// Task 5

function deliveryStatus(orderDetails) {

    let [customerName, foodItem, deliveryAddress] = orderDetails;

    customerName = customerName.trim().toUpperCase();
    foodItem = foodItem.trim().toUpperCase();
    deliveryAddress = deliveryAddress.trim();

    console.log(`Hello ${customerName}`);
    console.log(`Your order for ${foodItem} has been confirmed.`);
    console.log(`Delivery Address: ${deliveryAddress}`);
    console.log("Food will be delivered shortly.");
}

let orderDetails = [
    prompt("Enter Customer Name:"),
    prompt("Enter Food Item:"),
    prompt("Enter Delivery Address:")
];

deliveryStatus(orderDetails);


// Task 6

function calculateSalary(basicSalary) {
    return basicSalary;
}

function calculateBonus(salary) {
    return salary * 0.15;
}

let employee = [
    prompt("Enter Employee Name:"),
    Number(prompt("Enter Basic Salary:"))
];

employee = employee.map(value => typeof value === "string" ? value.trim() : value);

let employeeName = employee[0]
    .toLowerCase()
    .replace(employee[0][0], employee[0][0].toUpperCase());

let salary = calculateSalary(employee[1]);
let bonus = calculateBonus(salary);

console.log(`Employee Name : ${employeeName}`);
console.log(`Salary : ₹${salary}`);
console.log(`Bonus : ₹${bonus}`);
console.log(`Final Salary : ₹${salary + bonus}`);


// Task 7

function generateInvoice(productName, amount, discountPercent, discount, finalAmount) {
    console.log("========== INVOICE ==========");
    console.log(`Product Name   : ${productName}`);
    console.log(`Original Price : ₹${amount}`);
    console.log(`Discount       : ${discountPercent}%`);
    console.log(`Discount Amt   : ₹${discount}`);
    console.log(`Final Amount   : ₹${finalAmount}`);
    console.log("=============================");
    console.log("Order Confirmed Successfully");
}

function applyDiscount(productName, amount, callback) {

    let discountPercent;

    if (amount < 5000) {
        discountPercent = 5;
    } else if (amount < 10000) {
        discountPercent = 10;
    } else {
        discountPercent = 15;
    }

    let discount = amount * discountPercent / 100;
    let finalAmount = amount - discount;

    callback(productName, amount, discountPercent, discount, finalAmount);
}

let productDetails = [
    prompt("Enter Product Name:").trim(),
    Number(prompt("Enter Product Price:"))
];

let productName =
    productDetails[0].charAt(0).toUpperCase() +
    productDetails[0].slice(1).toLowerCase();

let amount = productDetails[1];

applyDiscount(productName, amount, generateInvoice);


// Task 8

function* promotionalOffers(customer) {

    let [customerName, amount] = customer;

    customerName = customerName.trim();
    customerName =
        customerName.charAt(0).toUpperCase() +
        customerName.slice(1).toLowerCase();

    console.log(`\nCustomer Name : ${customerName}`);
    console.log(`Shopping Amount : ₹${amount}`);
    console.log("==============================");

    if (amount >= 10000) {

        let discount = amount * 20 / 100;
        let finalAmount = amount - discount;

        yield `20% OFF`;
        yield `Discount Amount : ₹${discount}`;
        yield `Final Amount : ₹${finalAmount}`;
        yield `Free Delivery`;
        yield `Buy 1 Get 1`;

    } else if (amount >= 5000) {

        let discount = amount * 10 / 100;
        let finalAmount = amount - discount;

        yield `10% OFF`;
        yield `Discount Amount : ₹${discount}`;
        yield `Final Amount : ₹${finalAmount}`;
        yield `Free Delivery`;

    } else if (amount >= 1000) {

        let discount = amount * 5 / 100;
        let finalAmount = amount - discount;

        yield `5% OFF`;
        yield `Discount Amount : ₹${discount}`;
        yield `Final Amount : ₹${finalAmount}`;

    } else {

        yield `No Offers Available`;
        yield `Final Amount : ₹${amount}`;
    }
}

let shoppingDetails = [
    prompt("Enter Customer Name:"),
    Number(prompt("Enter Shopping Amount:"))
];

shoppingDetails = shoppingDetails.map(value =>
    typeof value === "string" ? value.trim() : value
);

let offers = promotionalOffers(shoppingDetails);

console.log("====== SHOPPING INVOICE ======");

let offer = offers.next();

while (!offer.done) {
    console.log(offer.value);
    offer = offers.next();
}

console.log("==============================");

//Task 9


function mergeStudents(scienceStudents, commerceStudents) {

    let allStudents = [...scienceStudents, ...commerceStudents];

    return allStudents.map(student =>
        student.trim().charAt(0).toUpperCase() +
        student.trim().slice(1).toLowerCase()
    );
}

let scienceStudents = ["abhiram", "rahul", "kiran"];

let commerceStudents = ["naveen", "surya", "lokesh"];

let studentDatabase = mergeStudents(
    scienceStudents,
    commerceStudents
);

console.log("===== STUDENT DATABASE =====");

studentDatabase.forEach((student, count) => {
    console.log(`${count + 1}. ${student}`);
});


//Task 10

function calculateMarks(studentName, ...marks) {

    studentName =
        studentName.trim().charAt(0).toUpperCase() +
        studentName.trim().slice(1).toLowerCase();

    let totalMarks = marks.reduce((total, mark) => total + mark, 0);

    console.log("===== EXAM REPORT =====");
    console.log(`Student Name   : ${studentName}`);
    console.log(`Total Subjects : ${marks.length}`);
    console.log(`Marks          : ${marks.join(", ")}`);
    console.log(`Gain Marks    : ${totalMarks}`);
    console.log(`Total Marks    : ${MaxMarks}`);
}

let studentName = prompt("Enter Student Name:");
let MaxMarks = prompt("Enter Total Marks:");

let totalSubjects = Number(prompt("Enter Number of Subjects:"));

let marks = [];

for (let i = 1; i <= totalSubjects; i++) {
    marks.push(Number(prompt(`Enter Subject ${i} Marks:`)));
}

calculateMarks(studentName, ...marks);



//Task 11

function displayEmployee(employee1) {

    let { name, department, salary, experience } = employee1;

    name =
        name.trim().charAt(0).toUpperCase() +
        name.trim().slice(1).toLowerCase();

    department =
        department.trim().charAt(0).toUpperCase() +
        department.trim().slice(1).toLowerCase();

    console.log("===== EMPLOYEE PROFILE =====");
    console.log(`Name       : ${name}`);
    console.log(`Department : ${department}`);
    console.log(`Salary     : ₹${salary}`);
    console.log(`Experience : ${experience} Years`);
}

let employee1 = {
    name: prompt("Enter Employee Name:"),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Salary:")),
    experience: Number(prompt("Enter Experience (Years):"))
};

displayEmployee(employee1);


//Task 12

function filterProducts(products, amount1, choice) {

    let filteredProducts = products.filter(product => {

        if (choice.toLowerCase() === "above") {
            return product.price > amount1;
        } else {
            return product.price < amount1;
        }

    });

    console.log(`===== PRODUCTS ${choice.toUpperCase()} ₹${amount1} =====`);

    filteredProducts.forEach(product => {

        let productName =
            product.name.trim().charAt(0).toUpperCase() +
            product.name.trim().slice(1).toLowerCase();

        let category =
            product.category.trim().charAt(0).toUpperCase() +
            product.category.trim().slice(1).toLowerCase();

        console.log(`Name     : ${productName}`);
        console.log(`Price    : ₹${product.price}`);
        console.log(`Category : ${category}`);
        console.log("------------------------");
    });

}

let products = [
    {
        name: " laptop ",
        price: 5500,
        category: " electronics "
    },
    {
        name: " mouse ",
        price: 800,
        category: " electronics "
    },
    {
        name: " mobile ",
        price: 1800,
        category: " electronics "
    },
    {
        name: " watch ",
        price: 4500,
        category: " accessories "
    }
];

let amount1 = Number(prompt("Enter Amount:"));
let choice = prompt("Filter Above or Below?");

filterProducts(products, amount1, choice);

//Task 13

function findPremiumCustomer(customers) {

    let premiumCustomer = customers.find(
        customer => customer.purchaseAmount > 50000
    );

    if (premiumCustomer) {

        let customerName =
            premiumCustomer.name.trim().charAt(0).toUpperCase() +
            premiumCustomer.name.trim().slice(1).toLowerCase();

        console.log("===== PREMIUM CUSTOMER =====");
        console.log(`Customer Name   : ${customerName}`);
        console.log(`Purchase Amount : ₹${premiumCustomer.purchaseAmount}`);
    } else {
        console.log("No Premium Customer Found");
    }
}

let customers = [
    {
        name: " rahul ",
        purchaseAmount: 25000
    },
    {
        name: " kiran ",
        purchaseAmount: 45000
    },
    {
        name: " abhiram ",
        purchaseAmount: 65000
    },
    {
        name: " naveen ",
        purchaseAmount: 80000
    }
];

findPremiumCustomer(customers);

//Task 14

function calculateExpenses(companyName, expenses) {

    companyName =
        companyName.trim().charAt(0).toUpperCase() +
        companyName.trim().slice(1).toLowerCase();

    let totalExpense = expenses.reduce(
        (total, expense) => total + expense,
        0
    );

    console.log("===== COMPANY EXPENSE REPORT =====");
    console.log(`Company Name  : ${companyName}`);
    console.log(`Expenses      : ${expenses.join(", ")}`);
    console.log(`Total Expense : ₹${totalExpense}`);
}

let companyName = prompt("Enter Company Name:");

let expenseCount = Number(
    prompt("Enter Number of Expenses:")
);

let expenses = [];

for (let i = 1; i <= expenseCount; i++) {
    expenses.push(
        Number(prompt(`Enter Expense ${i}:`))
    );
}

calculateExpenses(companyName, expenses);

//Task 15

function verifyPlayers(players) {

    let allEligible = players.every(
        player => player.age >= 18
    );

    console.log("   GAMING TOURNAMENT REPORT");

    players.forEach((player, index) => {

        let playerName =
            player.name.trim().charAt(0).toUpperCase() +
            player.name.trim().slice(1).toLowerCase();

        console.log(
            `${index + 1}. ${playerName} (${player.age} Years)`
        );
    });


    if (allEligible) {
        console.log("STATUS : APPROVED ");
        console.log("MESSAGE: All Players Are Eligible");
    } else {
        console.log("STATUS : REJECTED ");
        console.log("MESSAGE: Some Players Are Under 18");
    }

    console.log("=================================");
}

let playerCount = Number(
    prompt("Enter Number of Players:")
);

let players = [];

for (let i = 1; i <= playerCount; i++) {

    players.push({
        name: prompt(`Enter Player ${i} Name:`),
        age: Number(prompt(`Enter Player ${i} Age:`))
    });

}

verifyPlayers(players);

//Task 16

function checkReactCandidates(candidates) {

    let reactAvailable = candidates.some(
        candidate => candidate.skill.toLowerCase() === "react"
    );

    console.log("      JOB PORTAL REPORT");

    candidates.forEach((candidate, index) => {

        let candidateName =
            candidate.name.trim().charAt(0).toUpperCase() +
            candidate.name.trim().slice(1).toLowerCase();

        let skill =
            candidate.skill.trim().charAt(0).toUpperCase() +
            candidate.skill.trim().slice(1).toLowerCase();

        console.log(
            `${index + 1}. ${candidateName} - ${skill}`
        );
    });


    if (reactAvailable) {
        console.log("STATUS : FOUND ");
        console.log("MESSAGE: At Least One Candidate Knows React");
    } else {
        console.log("STATUS : NOT FOUND ");
        console.log("MESSAGE: No Candidate Knows React");
    }

    console.log("=================================");
}

let candidateCount = Number(
    prompt("Enter Number of Candidates:")
);

let candidates = [];

for (let i = 1; i <= candidateCount; i++) {

    candidates.push({
        name: prompt(`Enter Candidate ${i} Name:`),
        skill: prompt(`Enter Candidate ${i} Skill:`)
    });

}

checkReactCandidates(candidates);

//Task 17

let mobileNumber = prompt("Enter Mobile Number:").trim();

let validStarts = ["6", "7", "8", "9"];

let validateMobile = function (number) {

    let isValidLength = number.length === 10;

    let isValidStart = validStarts.some(
        digit => number.startsWith(digit)
    );

    console.log("      MOBILE VALIDATION");
    console.log(`Mobile Number : ${number}`);

    if (isValidLength && isValidStart) {
        console.log("STATUS  : VALID ");
        console.log("MESSAGE : Mobile Number Accepted");
    } else {
        console.log("STATUS  : INVALID ");
        console.log("MESSAGE : Invalid Mobile Number");
    }

};

validateMobile(mobileNumber);

//Task 18

let generateSlug = function(title) {

    let slug = title.trim().toLowerCase().split(" ").join("-");

    console.log("       URL SLUG GENERATOR");
    console.log(`Original Title : ${title}`);
    console.log(`URL Slug       : ${slug}`);
};

let courseTitle = prompt("Enter Course Title:");

generateSlug(courseTitle);

//Task 19

function sortEmployees(employees, order) {

    employees.forEach(emp => {
        emp.name =
            emp.name.trim().charAt(0).toUpperCase() +
            emp.name.trim().slice(1).toLowerCase();
    });

    let sortedEmployees = employees.sort((a, b) => {

        if (order === "high") {
            return b.salary - a.salary; 
        } else {
            return a.salary - b.salary; 
        }

    });

    console.log("     EMPLOYEE SORT DASHBOARD");

    sortedEmployees.forEach((emp, index) => {
        console.log(`${index + 1}. ${emp.name} - ₹${emp.salary}`);
    });

}

let employeeCount = Number(prompt("Enter number of employees:"));

let employees = [];

for (let i = 1; i <= employeeCount; i++) {
    employees.push({
        name: prompt(`Enter Employee ${i} Name:`),
        salary: Number(prompt(`Enter Employee ${i} Salary:`))
    });
}

let choice1 = prompt("Sort by salary? (high/low)").toLowerCase();

sortEmployees(employees, choice1);

//Task 20

function createBookingIDs(movies) {

    let bookingData = movies.map((movie, index) => {

        let cleanMovie = movie.trim().toUpperCase().split(" ").join("");

        let code = cleanMovie.slice(0, 4);

        let numberPart = Math.floor(1000 + Math.random() * 9000);

        return {
            movieName:
                movie.trim().charAt(0).toUpperCase() +
                movie.trim().slice(1).toLowerCase(),

            bookingID: `${code}-${numberPart}`
        };
    });

    console.log("      MOVIE BOOKING SYSTEM");

    bookingData.map((item, index) => {
        console.log(`${index + 1}. ${item.movieName}`);
        console.log(`   Booking ID: ${item.bookingID}`);
    });

}

let movieCount = Number(prompt("Enter number of movies:"));

let movies = [];

for (let i = 1; i <= movieCount; i++) {
    movies.push(prompt(`Enter Movie ${i} Name:`));
}

createBookingIDs(movies);