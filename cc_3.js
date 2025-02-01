// Task 1: Product Price Management
let prices = [10, 20, 30, 40, 50]; // Initialize array with 5 prices
prices.push(60); // Add a new price
prices.shift(); // Remove the first price
console.log("Updated Price List:", prices);
// Task 2: Modifying Customer Orders
let orders = [2, 5, 3, 7, 4]; // Initialize array with 5 order quantities
orders[2] += 5; // Increase the third order quantity by 5
let totalOrders = orders.reduce((total, quantity) => total + quantity, 0); // Calculate total orders
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);
// Task 3: Employee Performance Tracking
let employee = {
    name: "Alex Chaffee",
    role: "Developer",
    performanceScore: 85,
    isActive: true
};
employee.performanceScore = 90; // Update performance score
employee.promotionEligible = employee.performanceScore > 80; // Add new property
console.log("Updated Employee:", employee);
// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Alice", feedbackText: "Great service!", rating: 5 },
    { customerName: "Bob", feedbackText: "Good experience.", rating: 4 },
    { customerName: "Charlie", feedbackText: "Could be better.", rating: 3 }
];
feedback.push({ customerName: "Diana", feedbackText: "Amazing!", rating: 5 }); // Add new feedback
console.log("Feedback List:", feedback);
// Task 5: Inventory Management System
let inventory = {
    itemName: "Laptop",
    stockCount: 10,
    price: 1200,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());