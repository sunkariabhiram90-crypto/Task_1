// Task 1 Student Management System

const students = [
    {
        id: 1,
        name: "Sai",
        department: "CSE",
        mark: 95
    },
    {
        id: 2,
        name: "John",
        department: "ECE",
        mark: 82
    },
    {
        id: 3,
        name: "Priya",
        department: "IT",
        mark: 68
    },
    {
        id: 4,
        name: "Krishna",
        department: "EEE",
        mark: 45
    },
    {
        id: 5,
        name: "Abhi",
        department: "CSE",
        mark: 76
    }
];

function displayStudentNames() {

    console.log("Student Names:");

    for (let student of students) {
        console.log(student.name);
    }
}

let totalMarks = function () {

    let total = 0;

    for (let student of students) {
        total += student.mark;
    }

    console.log("\nTotal Marks:", total);
};

const studentsAbove80 = () => {

    console.log("\nStudents Scored Above 80:");

    for (let student of students) {

        if (student.mark > 80) {
            console.log(student.name + " - " + student.mark);
        }

    }
};

function displayGrades() {

    console.log("\nStudent Grades:");

    for (let student of students) {

        let grade;

        if (student.mark >= 90) {
            grade = "A";
        }
        else if (student.mark >= 75) {
            grade = "B";
        }
        else if (student.mark >= 50) {
            grade = "C";
        }
        else {
            grade = "Fail";
        }

        console.log(student.name + " : " + grade);
    }
}

function studentDetails() {

    console.log("\nStudent Details:");

    for (let student of students) {

        console.log(
            "ID: " + student.id +
            ", Name: " + student.name +
            ", Department: " + student.department +
            ", Mark: " + student.mark
        );
    }
}

function printDetails(callback) {

    console.log("\nPrinting Student Details...");
    callback();
}

displayStudentNames();
totalMarks();
studentsAbove80();
displayGrades();
printDetails(studentDetails);

// Task 2 employee payroll system

const employees = [
    {
        id: 101,
        name: "Sai",
        salary: 25000,
        department: "HR"
    },
    {
        id: 102,
        name: "John",
        salary: 35000,
        department: "Development"
    },
    {
        id: 103,
        name: "Priya",
        salary: 45000,
        department: "Testing"
    },
    {
        id: 104,
        name: "Krishna",
        salary: 28000,
        department: "Support"
    },
    {
        id: 105,
        name: "Abhi",
        salary: 50000,
        department: "Development"
    }
];

function displayEmployeeNames() {

    console.log("Employee Names:");

    for (let employee of employees) {
        console.log(employee.name);
    }
}

let totalSalaryExpense = function () {

    let total = 0;

    for (let employee of employees) {
        total += employee.salary;
    }

    console.log("\nTotal Company Salary Expense: ₹" + total);
};

const highSalaryEmployees = () => {

    console.log("\nEmployees Earning Above ₹30,000:");

    for (let employee of employees) {

        if (employee.salary > 30000) {
            console.log(employee.name + " - ₹" + employee.salary);
        }

    }
};

function departmentDescriptions() {

    console.log("\nDepartment Descriptions:");

    for (let employee of employees) {

        switch (employee.department) {

            case "HR":
                console.log(employee.name + " : Human Resources");
                break;

            case "Development":
                console.log(employee.name + " : Software Development");
                break;

            case "Testing":
                console.log(employee.name + " : Quality Assurance");
                break;

            case "Support":
                console.log(employee.name + " : Customer Support");
                break;

            default:
                console.log(employee.name + " : Department Not Found");
        }
    }
}

function payrollReport() {

    console.log("\nPayroll Report:");

    for (let employee of employees) {

        console.log(
            "ID: " + employee.id +
            ", Name: " + employee.name +
            ", Salary: ₹" + employee.salary +
            ", Department: " + employee.department
        );
    }
}

function generatePayrollReport(callback) {

    console.log("\nGenerating Payroll Report...");
    callback();
}

displayEmployeeNames();
totalSalaryExpense();
highSalaryEmployees();
departmentDescriptions();
generatePayrollReport(payrollReport);


// Task 3 Online Food Order System

const foods = [
    {
        id: 1,
        foodName: "Chicken Biryani",
        price: 250,
        category: "Main Course"
    },
    {
        id: 2,
        foodName: "Veg Fried Rice",
        price: 180,
        category: "Main Course"
    },
    {
        id: 3,
        foodName: "Pizza",
        price: 300,
        category: "Fast Food"
    },
    {
        id: 4,
        foodName: "Ice Cream",
        price: 120,
        category: "Dessert"
    },
    {
        id: 5,
        foodName: "Burger",
        price: 220,
        category: "Fast Food"
    }
];

function displayFoodNames() {

    console.log("Food Names:");

    for (let food of foods) {
        console.log(food.foodName);
    }
}

let totalMenuValue = function () {

    let total = 0;

    for (let food of foods) {
        total += food.price;
    }

    console.log("\nTotal Menu Value: ₹" + total);
};

const foodsAbove200 = () => {

    console.log("\nFoods Above ₹200:");

    for (let food of foods) {

        if (food.price > 200) {
            console.log(food.foodName + " - ₹" + food.price);
        }

    }
};

function categoryDescriptions() {

    console.log("\nCategory Descriptions:");

    for (let food of foods) {

        switch (food.category) {

            case "Main Course":
                console.log(food.foodName + " : Full Meal Item");
                break;

            case "Fast Food":
                console.log(food.foodName + " : Quick Snack Item");
                break;

            case "Dessert":
                console.log(food.foodName + " : Sweet Dish");
                break;

            default:
                console.log(food.foodName + " : Category Not Found");
        }
    }
}

function orderConfirmation() {

    console.log("\nOrder Confirmed Successfully!");
    console.log("Your Food Will Be Delivered Soon.");
}

function placeOrder(callback) {

    console.log("\nProcessing Order...");
    callback();
}

displayFoodNames();
totalMenuValue();
foodsAbove200();
categoryDescriptions();
placeOrder(orderConfirmation);


// Task 4 Movie Ticket Booking System

const movies = [
    {
        movieName: "Pushpa 2",
        ticketPrice: 250,
        availableSeats: 50,
        language: "Telugu"
    },
    {
        movieName: "Leo",
        ticketPrice: 200,
        availableSeats: 0,
        language: "Tamil"
    },
    {
        movieName: "Jawan",
        ticketPrice: 220,
        availableSeats: 30,
        language: "Hindi"
    },
    {
        movieName: "Kalki",
        ticketPrice: 300,
        availableSeats: 15,
        language: "Telugu"
    }
];

function displayMovieNames() {

    console.log("Movie Names:");

    for (let movie of movies) {
        console.log(movie.movieName);
    }
}

let totalAvailableSeats = function () {

    let total = 0;

    for (let movie of movies) {
        total += movie.availableSeats;
    }

    console.log("\nTotal Available Seats:", total);
};

const bookingStatus = () => {

    console.log("\nBooking Status:");

    for (let movie of movies) {

        if (movie.availableSeats > 0) {
            console.log(movie.movieName + " : Booking Available");
        } else {
            console.log(movie.movieName + " : House Full");
        }

    }
};

function movieLanguages() {

    console.log("\nMovie Languages:");

    for (let movie of movies) {

        switch (movie.language) {

            case "Telugu":
                console.log(movie.movieName + " : Telugu Movie");
                break;

            case "Tamil":
                console.log(movie.movieName + " : Tamil Movie");
                break;

            case "Hindi":
                console.log(movie.movieName + " : Hindi Movie");
                break;

            default:
                console.log(movie.movieName + " : Language Not Found");
        }
    }
}

function bookingConfirmation() {

    console.log("\nTicket Booked Successfully!");
    console.log("Enjoy Your Movie.");
}

function bookTicket(callback) {

    console.log("\nProcessing Ticket Booking...");
    callback();
}

displayMovieNames();
totalAvailableSeats();
bookingStatus();
movieLanguages();
bookTicket(bookingConfirmation);



// Task 5 Hospital Patient Records

const patients = [
    {
        patientId: 101,
        patientName: "Ramesh",
        age: 65,
        disease: "Heart"
    },
    {
        patientId: 102,
        patientName: "Suresh",
        age: 45,
        disease: "Fever"
    },
    {
        patientId: 103,
        patientName: "Lakshmi",
        age: 72,
        disease: "Diabetes"
    },
    {
        patientId: 104,
        patientName: "Priya",
        age: 30,
        disease: "Skin"
    },
    {
        patientId: 105,
        patientName: "John",
        age: 68,
        disease: "Heart"
    }
];

function displayPatientNames() {
    console.log("Patient Names:");

    for (let patient of patients) {
        console.log(patient.patientName);
    }
}

function countPatients() {

    let count = 0;

    for (let patient of patients) {
        count++;
    }

    console.log("\nTotal Patients:", count);
}

function seniorPatients() {

    console.log("\nPatients Above Age 60:");

    for (let patient of patients) {

        if (patient.age > 60) {
            console.log(patient.patientName + " - " + patient.age + " Years");
        }

    }
}

function diseaseDepartments() {

    console.log("\nDisease Departments:");

    for (let patient of patients) {

        switch (patient.disease) {

            case "Heart":
                console.log(patient.patientName + " : Cardiology Department");
                break;

            case "Fever":
                console.log(patient.patientName + " : General Medicine Department");
                break;

            case "Diabetes":
                console.log(patient.patientName + " : Endocrinology Department");
                break;

            case "Skin":
                console.log(patient.patientName + " : Dermatology Department");
                break;

            default:
                console.log(patient.patientName + " : Department Not Found");
        }
    }
}

function appointmentConfirmation() {
    console.log("\nAppointment Confirmed Successfully!");
    console.log("Please Visit the Hospital on Time.");
}

function bookAppointment(callback) {
    console.log("\nBooking Appointment...");
    callback();
}

displayPatientNames();
countPatients();
seniorPatients();
diseaseDepartments();
bookAppointment(appointmentConfirmation);




// Task 6 Library Management System

const books = [
    {
        bookId: 101,
        bookName: "Java Programming",
        author: "James Gosling",
        price: 650,
        category: "Programming"
    },
    {
        bookId: 102,
        bookName: "Python Basics",
        author: "Guido van Rossum",
        price: 550,
        category: "Programming"
    },
    {
        bookId: 103,
        bookName: "Wings of Fire",
        author: "A.P.J Abdul Kalam",
        price: 450,
        category: "Biography"
    },
    {
        bookId: 104,
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        price: 350,
        category: "Novel"
    },
    {
        bookId: 105,
        bookName: "Data Structures",
        author: "Mark Allen Weiss",
        price: 700,
        category: "Programming"
    }
];

function displayBookNames() {
    console.log("Book Names:");

    for (let book of books) {
        console.log(book.bookName);
    }
}

function totalBookValue() {

    let total = 0;

    for (let book of books) {
        total += book.price;
    }

    console.log("\nTotal Book Value: ₹" + total);
}

function expensiveBooks() {

    console.log("\nBooks Above ₹500:");

    for (let book of books) {

        if (book.price > 500) {
            console.log(book.bookName + " - ₹" + book.price);
        }

    }
}

function bookCategories() {

    console.log("\nBook Categories:");

    for (let book of books) {

        switch (book.category) {

            case "Programming":
                console.log(book.bookName + " : Technical Book");
                break;

            case "Biography":
                console.log(book.bookName + " : Life Story Book");
                break;

            case "Novel":
                console.log(book.bookName + " : Fiction Book");
                break;

            default:
                console.log(book.bookName + " : Category Not Found");
        }
    }
}

function issueBook(bookName) {
    console.log("\nBook Issued Successfully!");
    console.log("Book Name : " + bookName);
}

displayBookNames();
totalBookValue();
expensiveBooks();
bookCategories();
issueBook("Java Programming");


//Task 7 E-Commerce Product Dashboard

const products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 50000,
        stock: 15
    },
    {
        productId: 102,
        productName: "Mobile",
        price: 25000,
        stock: 8
    },
    {
        productId: 103,
        productName: "Headphones",
        price: 2000,
        stock: 20
    },
    {
        productId: 104,
        productName: "Keyboard",
        price: 1500,
        stock: 5
    },
    {
        productId: 105,
        productName: "Mouse",
        price: 800,
        stock: 12
    }
];

function displayProducts() {

    console.log("Product Names:");

    for (let product of products) {
        console.log(product.productName);
    }
}

function inventoryValue() {

    let totalValue = 0;

    for (let product of products) {
        totalValue += product.price * product.stock;
    }

    console.log("\nTotal Inventory Value: ₹" + totalValue);
}

function lowStockProducts() {

    console.log("\nProducts with Stock Less Than 10:");

    for (let product of products) {

        if (product.stock < 10) {
            console.log(product.productName + " - Stock: " + product.stock);
        }

    }
}

function stockStatus() {

    console.log("\nStock Status:");

    for (let product of products) {

        if (product.stock < 10) {
            console.log(product.productName + " : Low Stock");
        } else {
            console.log(product.productName + " : In Stock");
        }

    }
}

function productReport() {

    console.log("\nProduct Report Generated Successfully!");
}

function generateReport(callback) {

    console.log("\nGenerating Product Report...");
    callback();
}

displayProducts();
inventoryValue();
lowStockProducts();
stockStatus();
generateReport(productReport);

// Task 8 College Admission System

const applicants = [
    {
        name: "Sai",
        age: 19,
        percentage: 85,
        department: "CSE"
    },
    {
        name: "John",
        age: 17,
        percentage: 75,
        department: "ECE"
    },
    {
        name: "Priya",
        age: 20,
        percentage: 58,
        department: "IT"
    },
    {
        name: "Krishna",
        age: 18,
        percentage: 90,
        department: "EEE"
    },
    {
        name: "Abhi",
        age: 21,
        percentage: 65,
        department: "CSE"
    }
];

function displayApplicants() {

    console.log("Applicant Names:");

    for (let applicant of applicants) {
        console.log(applicant.name);
    }
}

function checkEligibility() {

    console.log("\nEligibility Status:");

    for (let applicant of applicants) {

        if (applicant.age >= 18 && applicant.percentage >= 60) {
            console.log(applicant.name + " : Eligible");
        } else {
            console.log(applicant.name + " : Not Eligible");
        }

    }
}

function countEligibleStudents() {

    let count = 0;

    for (let applicant of applicants) {

        if (applicant.age >= 18 && applicant.percentage >= 60) {
            count++;
        }

    }

    console.log("\nTotal Eligible Students:", count);
}

function departmentNames() {

    console.log("\nDepartments:");

    for (let applicant of applicants) {

        switch (applicant.department) {

            case "CSE":
                console.log(applicant.name + " : Computer Science Engineering");
                break;

            case "ECE":
                console.log(applicant.name + " : Electronics and Communication Engineering");
                break;

            case "IT":
                console.log(applicant.name + " : Information Technology");
                break;

            case "EEE":
                console.log(applicant.name + " : Electrical and Electronics Engineering");
                break;

            default:
                console.log(applicant.name + " : Department Not Found");
        }
    }
}

function admissionResult() {
    console.log("\nAdmission Results Generated Successfully!");
}

function generateAdmissionResult(callback) {
    console.log("\nGenerating Admission Results...");
    callback();
}

displayApplicants();
checkEligibility();
countEligibleStudents();
departmentNames();
generateAdmissionResult(admissionResult);

// Task 9 Bus Reservation System

const passengers = [
    {
        passengerId: 101,
        name: "Sai",
        seatNumber: 1,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 102,
        name: "John",
        seatNumber: 2,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 103,
        name: "Priya",
        seatNumber: 5,
        ticketPrice: 350,
        busType: "Non-AC"
    },
    {
        passengerId: 104,
        name: "Krishna",
        seatNumber: 8,
        ticketPrice: 700,
        busType: "Sleeper"
    },
    {
        passengerId: 105,
        name: "Abhi",
        seatNumber: 10,
        ticketPrice: 700,
        busType: "Sleeper"
    }
];

function displayPassengerNames() {

    console.log("Passenger Names:");

    for (let passenger of passengers) {
        console.log(passenger.name);
    }
}

function totalCollection() {

    let total = 0;

    for (let passenger of passengers) {
        total += passenger.ticketPrice;
    }

    console.log("\nTotal Collection: ₹" + total);
}

function occupiedSeats() {

    console.log("\nOccupied Seats:");

    for (let passenger of passengers) {
        console.log("Seat No " + passenger.seatNumber + " : Occupied");
    }
}

function busTypeDetails() {

    console.log("\nBus Types:");

    for (let passenger of passengers) {

        switch (passenger.busType) {

            case "AC":
                console.log(passenger.name + " : AC Bus");
                break;

            case "Non-AC":
                console.log(passenger.name + " : Non-AC Bus");
                break;

            case "Sleeper":
                console.log(passenger.name + " : Sleeper Bus");
                break;

            default:
                console.log(passenger.name + " : Bus Type Not Found");
        }
    }
}

function ticketConfirmation() {

    console.log("\nTicket Confirmed Successfully!");
    console.log("Have a Safe Journey.");
}

function generateTicket(callback) {

    console.log("\nGenerating Ticket...");
    callback();
}

displayPassengerNames();
totalCollection();
occupiedSeats();
busTypeDetails();
generateTicket(ticketConfirmation);

// Task 10 Mobile Store Management

const mobiles = [
    {
        brand: "Samsung",
        model: "Galaxy S24",
        price: 75000,
        stock: 10
    },
    {
        brand: "Apple",
        model: "iPhone 15",
        price: 80000,
        stock: 5
    },
    {
        brand: "Redmi",
        model: "Note 13",
        price: 18000,
        stock: 20
    },
    {
        brand: "OnePlus",
        model: "12R",
        price: 45000,
        stock: 8
    },
    {
        brand: "Realme",
        model: "Narzo 70",
        price: 15000,
        stock: 15
    }
];

function displayMobiles() {

    console.log("Mobile Names:");

    for (let mobile of mobiles) {
        console.log(mobile.brand + " " + mobile.model);
    }
}

let totalStockValue = function () {

    let total = 0;

    for (let mobile of mobiles) {
        total += mobile.price * mobile.stock;
    }

    console.log("\nTotal Stock Value: ₹" + total);
};

const expensiveMobiles = () => {

    console.log("\nMobiles Above ₹20,000:");

    for (let mobile of mobiles) {

        if (mobile.price > 20000) {
            console.log(mobile.brand + " " + mobile.model + " - ₹" + mobile.price);
        }

    }
};

function brandCategory() {

    console.log("\nBrand Categories:");

    for (let mobile of mobiles) {

        switch (mobile.brand) {

            case "Samsung":
                console.log(mobile.model + " : Android Premium Brand");
                break;

            case "Apple":
                console.log(mobile.model + " : iOS Premium Brand");
                break;

            case "Redmi":
                console.log(mobile.model + " : Budget Android Brand");
                break;

            case "OnePlus":
                console.log(mobile.model + " : Flagship Android Brand");
                break;

            case "Realme":
                console.log(mobile.model + " : Mid-Range Android Brand");
                break;

            default:
                console.log(mobile.model + " : Brand Not Found");
        }
    }
}

function salesReport() {

    console.log("\nSales Report Generated Successfully!");
}

function generateReport(callback) {

    console.log("\nGenerating Sales Report...");
    callback();
}

displayMobiles();
totalStockValue();
expensiveMobiles();
brandCategory();
generateReport(salesReport);