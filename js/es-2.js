/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare
per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(),
di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


/* -------------------------------------------------------------------------- */
/*                                 Exercise 2                                 */
/* -------------------------------------------------------------------------- */

//? Creare un array contenente oggetti di studenti 
//? Ciclare su tutti gli studenti e stampare nome e cognome 
//? Chiedere all'utente con 3 prompt, 
//? di aggiungere nuovo oggetto studente con nome, cognome ed età

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

    //Print the student's name:
    console.log("Nome: " + currentElement.firstName);
}

