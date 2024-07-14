// TODO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)


function getAnimal() {
    let animal = prompt("Introduzca un animal").trim().toLowerCase();

    if (animal == "perro") {
        console.log("Tienes un 🐶 debes sácalo a pasear 3 veces al dia y darle ración de la buena");
    } else if(animal == "gato") {
        console.log("Tienes un 🐱 debes sácalo a pasear 3 veces al dia y darle ración de la buena");
    } else if (animal == "serpiente") {
        console.log("Tienes una 🐍 debes darle ratón y pequeñas aves crudas");
    } else if (animal == "mono") {
        console.log("Tienes un 🐒 debes darle muchas frutitas");
    } else if (animal == "pez") {
        console.log("Tienes un 🐠 Ponle de comer pero no mucha comida");
    } else {
        alert("No hay instruciones para este animal");
    }
}


