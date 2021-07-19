/* -------------------------------------------------------------------------- */
/*                                 Exercise 2                                 */
/* -------------------------------------------------------------------------- */

//* Create an array containing student objects: 
var studentsList = [
    {
        firstName: "Mario",
        lastName: "Rossi"
    },
    {
        firstName: "Irene",
        lastName: "Bianchi"
    },
    {
        firstName: "Elisa",
        lastName: "Verdi"
    }
];
console.log(studentsList);

//* Loop on the elements to print first name and last name: 
for (var i = 0; i < studentsList.length; i++) {
    var currentElement = studentsList[i];

    //Print student names:
    console.log("FirstName: " + currentElement.firstName);

    //Print student surname:
    console.log("LastName: " + currentElement.lastName);
}


//* Ask the user to enter a new student object with first name, last name and age:
// Ask for student first name
var userFirstName = prompt("Inserisci il nome dello studente");
console.log("User firstName: ", userFirstName);

// Ask for student last name
var userLastName = prompt("Inserisci il cognome dello studente");
console.log("User lastName: ", userLastName);

// Ask for student age
var userAge = prompt("Inserisci l'età dello studente");
console.log("User age: ", userAge);


//* Create a new student object with the data entered by the user:
var newStudent = {
    firstName: userFirstName,
    lastName: userLastName,
    age: userAge
};

console.log(newStudent);

//* Add the new student to the student array:
studentsList.push(newStudent);
console.log(studentsList);



