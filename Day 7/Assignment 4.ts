//Assignment 4
const companies = [
  "Realme",
  "Samsung",
  "Apple",
  "Adobe",
  "Microsoft",
  "Facebook",
  "Google",
  "Flipkart",
  "Amazon",
  "Netflix",
  "Disney",
  "Accenture",
];
const compStartingWithA = companies.filter(
  (company) => company.charAt(0) === "A"
);
console.log(compStartingWithA);
