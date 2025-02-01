// Task 1
let prices = [10, 20, 30, 40, 50]; 
prices.push(60); 
prices.shift(); 
console.log("Updated Price List:", prices);
// Task 2
let orders = [2, 5, 3, 7, 4]; 
orders[2] += 5; 
let totalOrders = orders.reduce((total, quantity) => total + quantity, 0); 
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);
// Task 3
let employee = {
    name: "Alex Chaffee",
    role: "Developer",
    performanceScore: 85,
    isActive: true
};
employee.performanceScore = 90; 
employee.promotionEligible = employee.performanceScore > 80; 
console.log("Updated Employee:", employee);
// Task 4
let feedback = [
    { customerName: "Alice", feedbackText: "Great service!", rating: 5 },
    { customerName: "Bob", feedbackText: "Good experience.", rating: 4 },
    { customerName: "Charlie", feedbackText: "Could be better.", rating: 3 }
];
feedback.push({ customerName: "Diana", feedbackText: "Amazing!", rating: 5 }); 
console.log("Feedback List:", feedback);
// Task 5
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
