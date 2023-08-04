//Assignment 2
//Arrays-Finding the maximum value
const arr2 = [1, 2, 4, 5, 7, 9, 6, 3, 4, 2, 50];
const findMaxValue = (arr: number[]): number => {
  return Math.max(...arr);
};
console.log(findMaxValue(arr2));
