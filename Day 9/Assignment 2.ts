//! Question 2:
//? You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = [string, number, string, number, string, number];
const grades: SubjectGrade = ["Maths", 88, "English", 77, "Scince", 95];
const calculateGrades = (gradeArr: SubjectGrade) => {
  let sum: number = 0;
  gradeArr.forEach((elem) => {
    if (typeof elem === "number") {
      sum = sum + elem;
    }
  });
  return sum / 3;
};
console.log(calculateGrades(grades).toFixed(2));
