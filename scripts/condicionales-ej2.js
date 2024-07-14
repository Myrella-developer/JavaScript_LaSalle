// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

function getName() {

let name =  prompt('Dime tu nombre competo y tu primer apellido');  
var nombreComposto = name.split(" ").length;
console.log(nombreComposto);
    if (nombreComposto > 1) {
        console.log("Tienes un nombre composto");
    } else {
        console.log("No tienes un nombre composto");
    }
}

getName(name = prompt("Introduzca tu nombre: "));

