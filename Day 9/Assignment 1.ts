//! Question 1:
//? You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

type ProductInfo = [string, number, number];
const product1: ProductInfo = ["Asus Vivobook", 50000, 100];
const product2: ProductInfo = ["apple", 20, 2000];
console.log({ product1, product2 });
