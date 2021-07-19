/* -------------------------------------------------------------------------- */
/*                                 Exercise 1                                 */
/* -------------------------------------------------------------------------- */
//* Link a variable to an html element and set variable to contain list items
var displayElement = document.getElementById("display");
var listItems = "";

//* Create a "student" object and enter three properties: firstName, lastName, age:
var student = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 26
};
console.log(student);

//* Create an "for-in" loop to print all object properties:
for (var property in student) {
    listItems += "<li>" + student[property] + "</li>";
}
displayElement.innerHTML = listItems;

