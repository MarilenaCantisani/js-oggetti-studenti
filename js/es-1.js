/* Creare un oggetto che descriva uno studente,
con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in
tutte le proprietà dell'oggetto.*/

//? #1: Creare un nuovo oggetto "studente"
//? #2: Aggiungere tre proprietà: nome / cognome / età
//? #3: Collegare tramite una variabile l'id di un elemento in html
//? #4: Creare un ciclo for-in 
//? #5: Far stampare all'interno del ciclo tutte le proprietà dell'oggetto in pagina.

/* -------------------------------------------------------------------------- */
/*                                 Exercise 1                                 */
/* -------------------------------------------------------------------------- */

//* #1: Create a "student" object and enter three properties: firstName, lastName, age:
var student = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 26
};
console.log(student);

//* Link a variable to an html element:
var displayElement = document.getElementById("display");


