/* -------------------------------------------------------------------------- */
/*                                 Exercise 2                                 */
/* -------------------------------------------------------------------------- */

//* Link a variable to an html element and set variable to contain list items
var displayElement = document.getElementById("display");
var listItems = "";

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

    // Print in html first name and last name:
    listItems += "<li>" + "Nome e cognome: " + currentElement.firstName + " " + currentElement.lastName + "</li>";
}
displayElement.innerHTML = listItems;



//* Ask the user to enter a new student object with first name, last name and age:
// Ask for student first name
do {
    var userFirstName = prompt("Inserisci il nome dello studente");
    console.log("User firstName: ", userFirstName);
} while (!userFirstName || userFirstName.trim() === " " || !isNaN(userFirstName));


// Ask for student last name
do {
    var userLastName = prompt("Inserisci il cognome dello studente");
    console.log("User lastName: ", userLastName);
} while (!userLastName || userLastName.trim() === " " || !isNaN(userLastName));


// Ask for student age
do {
    var userAge = prompt("Inserisci l'età dello studente");
    console.log("User age: ", userAge);
} while (!userAge || isNaN(userAge));



//* Create a new student object with the data entered by the user:
var newStudent = {
    firstName: userFirstName,
    lastName: userLastName,
    age: userAge
};

console.log(newStudent);

//* Add the new student to the student array:
studentsList.push(newStudent);
console.log("Dati studente: ", newStudent);
console.log(studentsList);

//* Print in html first name, last name and age:
listItems += "<li>" + "Nome e cognome: " + newStudent.firstName + " " + newStudent.lastName + "; Age: " + newStudent.age + "</li>";
displayElement.innerHTML = listItems;




