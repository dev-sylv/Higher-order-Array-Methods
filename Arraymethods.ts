// In the following shopping cart: add, remove, edit items.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

// 1. Add "Meat" in the beginning of your shopping cart if it has not been already added.
let addMeat = shoppingCart.unshift("Meat");
console.log(shoppingCart);

// 2. Add "Sugar" at the end of your shopping cart if it has not been already added.
let addSugar = shoppingCart.push("Sugar");
console.log(shoppingCart);

// 3. Remove "Honey" if you are allergic to honey.
let removeHoney = shoppingCart.splice(4, 1);
console.log(shoppingCart);

// 4. Modify Tea to "Green Tea".
console.log(shoppingCart.indexOf("Tea"));
shoppingCart.splice(3, 1, "green tea");
console.log(shoppingCart);

let modifyTea = shoppingCart.fill("Green Tea", 3, 4);
console.log(shoppingCart);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let checkCompanies = "Twitter";

itCompanies.includes(checkCompanies)
  ? console.log("Company exists")
  : console.log("Company is not found");
