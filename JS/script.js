/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22

*/

const firstName = prompt("What's your name?");

const lastName = prompt("What's your last name?");

const favouriteColor = prompt("What's your favourite color?");

const outputText = firstName + lastName + favouriteColor + 22;

document.getElementById("out-put-text").innerHTML = outputText
