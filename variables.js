// userName es una variable que tiene dentro una String
userName = "Omar";
userSurname = 'Olmedo';
const ESPACIO = " ";

// una String con backticks es un template literal
userTitle = `Professor`;

console.log(userTitle);
console.log(userName);
console.log(userSurname);

console.log(userTitle, userName, userSurname);

userName = "Pablo";

console.log(userTitle + ' ' + userName + ' ' + userSurname);
console.log(userTitle + ESPACIO + userName + ESPACIO + userSurname);

userSurname = "Rodríguez";

console.log(`¿Qué tal estás, ${userName} ${userSurname}?`);

userAge = 33; // Number
userExperience = 10;
userHasHair = false; // Boolean

console.log(userName + userAge);
console.log(userAge + userExperience);

userExperience = "diez";
console.log(userAge + userExperience);

console.log("Edad: " + userAge, "\nAños de experiencia: " + userExperience);

// ESPACIO = "-";

a = 1;
b = 2;

c = a;
a = b;
b = c;

console.log(a, b); // 2, 1

[a, b] = [b, a]

console.log(a, b); // 1, 2

// TODO: arrays, objects 

const PI = "3.1415"
radi = 4

console.log("Area de del circlo es: " + [PI * radi **2]);d