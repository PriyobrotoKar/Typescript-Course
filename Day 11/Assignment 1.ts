// ! HomeWork Time
// ! Here is the function overloading Example? Which I wilt tell you in tomorrow video
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }

// ? You need to code the same using he Generics Types.

const add = <T, U>(a: T, b: U): string[] => {
  return [typeof a, typeof b];
};

const resultl = add<number, number>(5, 10); // Output:15
const result2 = add("Hello,", ["world!"]); // Output: "Hello, world!"
console.log(resultl);
console.log(result2);
