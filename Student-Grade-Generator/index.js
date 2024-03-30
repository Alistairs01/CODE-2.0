// write a program that prompts the user to input student marks
// input should be >= 0 <= 100
// Then output the correct grade
// x > 79 = A
// x = 60 to 79 = B
// x = 59 to 49 = C
// x = 40 to 49 = D
// x < 40 = E


// assigning the correct grade to the correct marks
// create a function studentGrades 
// set parameters to marks
// use if else
document.getElementById("entermarks").onclick = function() {
    // Get the marks entered by the user
    let marks = parseFloat(document.getElementById("marks").value);
//function studentGrades(grade) {
    if (marks >= 0 && marks <= 100) {
        if (marks >= 80) {
            marks = "A";
        } else if (marks >= 60) {
            marks = "B";
        } else if (marks >= 50) {
            marks = "C";
        } else if (marks >= 40) {
            marks = "D";
        } else if (marks >= 0) {
                marks = "E";
        }
        } else {
            marks = "Invalid entry";
        }
       return  alert(`Your grade is: ${marks}`);
}



