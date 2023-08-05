//?we want to create a function that formats the value passed to it in a specific way based on its type:

//  If the input is a number,it should add a dollar sign and format it with two decimal places
//  If the input is a bootean,it should return "Yes" for true and "No" for false.
//  If the input is a string,it should capitalize the first letter.

const format = (value: number | boolean | string): string => {
  if (typeof value === "number") {
    return `$${value / 100}`;
  } else if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  } else {
    return value.charAt(0).toUpperCase() + value.substring(1);
  }
};
console.log(format(502315));
console.log(format("typescript"));
console.log(format(false));
