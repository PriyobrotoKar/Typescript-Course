//Assignment 1
//Arrays-Calculating Average
const arr = [1, 2, 4, 5, 7, 9, 6, 3, 4, 2];
const calculateAverage = (arr: number[]): number => {
  const sum: number = arr.reduce((num1, num2) => {
    return num1 + num2;
  });
  return sum / arr.length;
};
// console.log(calculateAverage(arr));
