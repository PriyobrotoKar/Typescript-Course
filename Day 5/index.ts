//DAY 5
//Functions
const isDivisibleBy4and8 = (num: number): boolean => {
  return (num % 4 && num % 8) === 0;
};
console.log(isDivisibleBy4and8(10));
