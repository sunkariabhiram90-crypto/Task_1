// Task 1
let age = Number(prompt("Enter your age:"));

if (age <= 12) {
    console.log("Child");
} 
else if (age <= 19) {
    console.log("Teenager");
} 
else if (age <= 59) {
    console.log("Adult");
} 
else if (age >= 60) {
    console.log("Senior Citizen");
} 
else {
    console.log("Invalid Age");
}

// Task 2

let salary = Number(prompt("Enter your salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
}
else if (salary >= 20000 && salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
}
else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary: " , salary);
console.log("New Salary: " , newSalary);

// Task 3

let units = Number(prompt("Enter units consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = units * 7;
}
else {
    bill = units * 10;
}

console.log("Units Consumed: " , units);
console.log("Total Bill: ₹" , bill);

// Task 4

let balance = 10000;
let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));

if (withdrawalAmount <= balance) {
    balance = balance - withdrawalAmount;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" , balance);
} else {
    console.log("Insufficient Funds");
}

// Task 5  

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    alert("Login Successful"),
    console.log("Login Successful");
} else {
    alert("Invalid Username or Password"),
    console.log("Invalid Username or Password");
}

// Task 6

let rechargeAmount = Number(prompt("Enter Recharge Amount:"));

if (rechargeAmount >= 499) {
    console.log("Netflix Offer");
}
else if (rechargeAmount >= 299) {
    console.log("2GB Extra Data");
}
else {
    console.log("No Offer");
}

// Task 7

let color = prompt("Enter Traffic Signal Color:(red, yellow, green)");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}

// Task 8

let workingDays = 365;
alert("Total Working Days in a Year: " + workingDays);
let presentDays = Number(prompt("Enter Present Days:"));

let attendancePercentage = (presentDays / workingDays) * 100;

console.log("Attendance Percentage: " , attendancePercentage , "%");

if (attendancePercentage >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task 9

let ticketPrice = 500;
let numberOfTickets = Number(prompt("Enter Number of Tickets:"));

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

alert("ticket is confirmed.");

console.log("Ticket Price: ₹" , ticketPrice);
console.log("Number of Tickets: " , numberOfTickets);
console.log("Total Amount: ₹" , totalAmount);
console.log("GST (5%): ₹" , gst);
console.log("Final Amount: ₹" , finalAmount);

// Task 10

let foodCost = Number(prompt("Enter Food Cost:"));
let discount = 0;
let finalBill;

if (foodCost > 2000) {
    discount = foodCost * 10 / 100;
    finalBill = foodCost - discount;
} else {
    finalBill = foodCost;
}

console.log("Food Cost: ₹" , foodCost);
console.log("Discount: ₹" , discount);
console.log("Final Bill: ₹" , finalBill);

// Task 11

let age1 = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height (cm):"));
let weight = Number(prompt("Enter Weight (kg):"));

if (age1 >= 18) {

    if (height >= 160) {

        if (weight >= 55) {
            console.log("Selected for Police Recruitment");
        } else {
            console.log("Rejected: Weight should be at least 55 kg");
        }

    } else {
        console.log("Rejected: Height should be at least 160 cm");
    }

} else {
    console.log("Rejected: Age should be at least 18 years");
}

// Task 12

let sub1 = Number(prompt("Enter Subject 1 Marks:"));
let sub2 = Number(prompt("Enter Subject 2 Marks:"));
let sub3 = Number(prompt("Enter Subject 3 Marks:"));
let sub4 = Number(prompt("Enter Subject 4 Marks:"));
let sub5 = Number(prompt("Enter Subject 5 Marks:"));

let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
let maxMarks = Number(prompt("Enter Maximum Total Marks:"));

let percentage = (totalMarks / maxMarks) * 100;
let grade;

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else {
    grade = "Fail";
}

console.log("Obtained Marks: " , totalMarks);
console.log("Maximum Marks: " , maxMarks);
console.log("Percentage: " , percentage + "%");
console.log("Grade: " , grade);

// Task 13

let time = Number(prompt("Enter Time (0-23):"));

switch (true) {
    case (time >= 6 && time < 14):
        console.log("Morning Shift");
        break;

    case (time >= 14 && time < 22):
        console.log("Afternoon Shift");
        break;

    case ((time >= 22 && time <= 23) || (time >= 0 && time < 6)):
        console.log("Night Shift");
        break;

    default:
        console.log("Invalid Time");
}

// Task 14

let age2 = Number(prompt("Enter Age:"));
let salary1 = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (age2 >= 21 && salary1 >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}

// Task 15

let distance = Number(prompt("Enter Distance (KM):"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Distance: " + distance + " KM");
console.log("Total Fare: ₹" , fare);

// Task 16

let number = Number(prompt("Enter a Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Task 17

let password1 = prompt("Enter Password:");

let count = 0;

for (let ch of password1) {
    count++;
}

if (count < 6) {
    console.log("Weak Password");
}
else if (count <= 10) {
    console.log("Medium Password");
}
else {
    console.log("Strong Password");
}

// Task 18

let salary2 = Number(prompt("Enter Salary:"));
let experience1 = Number(prompt("Enter Experience (Years):"));

let bonus;
let finalSalary;

if (experience1 >= 0 && experience1 <= 2) {
    bonus = salary2 * 5 / 100;
}
else if (experience1 >= 3 && experience1 <= 5) {
    bonus = salary2 * 10 / 100;
}
else {
    bonus = salary2 * 20 / 100;
}

finalSalary = salary2 + bonus;

console.log("Salary: ₹" , salary2);
console.log("Bonus: ₹" , bonus);
console.log("Final Salary: ₹" , finalSalary);

// Task 19

let count1 = 10;

while (count1 >= 1) {
    console.log(count1);
    count1--;
}

console.log("Happy New Year");

// Task 20

let degreeCompleted = confirm("Is Degree Completed?");
let communicationGood = confirm("Is Communication Good?");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degreeCompleted) {

    if (communicationGood) {

        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical Score should be at least 70");
        }

    } else {
        console.log("Rejected: Communication Skills are not good");
    }

} else {
    console.log("Rejected: Degree is not completed");
}