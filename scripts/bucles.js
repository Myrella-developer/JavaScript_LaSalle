console.log("%cBucles", "font-weight: bold");

for (let i = 0; i < 10; i++) {  // inicialización del contador, comprobación para seguir, incremento
    console.log("Hola " + i);
}

console.log("----------------------");

for (let i = 9; i >= 0; i--) {
    console.log("Hola " + i);
}

console.log("----------------------");

alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++) {  // ejecuta el bucle tantas veces como elementos tiene el array
    console.log("Hola, " + alumnos[i]);
}

console.log("----------------------");

for (const alumno of alumnos) {     // recorrer un array sin indice
    console.log("Hola, " + alumno);
    // ! alumnos[alumnos.indexOf(alumno)] = "Omar"         MALA IDEA
}

for (let i = 0; i < alumnos.length; i++) {  // recorrer un array con indice
    // const alumno = alumnos[i];
    // console.log("Hola, " + alumno);
    alumnos[i] = alumnos[i].toUpperCase()  // modifica los elementos del array
}

console.log("----------------------");

professor = {
    nom: "Omar",
    cognoms: "Olmedo Ferrer",
    edat: 33,
    localitat: "Piera"
}

for (const propietat in professor) {
    if (Object.hasOwnProperty.call(professor, propietat)) {
        const element = professor[propietat];
        console.log(`La propietat ${propietat} del professor té un valor de ${element}`);
    }
}

console.log("----------------------");

let i = 0;
while (i < 10) {
    console.log("Hola " + i);
    i++;
}

console.log("----------------------");

alumnos.forEach(alumno => {
    console.log("Hola, " + alumno);
});


// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente

for (i = 0; i< 5; i++){
    console.log('%cHola mundo', 'color: red');

    for (let y = 0; y < 5; y++){
        console.log('%cHola mundo', 'color: blue');

    }
    
}


// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

for (let i = 0; i <= 20; i++) { 
   if(i % 2 == 0){
        console.log("Hola " + i);
   } else if (i % 3 == 0){
        console.log("Adeus" + i);
   }else if(i % 5 == 0){
        console.log("Qué tal?");
   }
}

// TODO: haz un contador que muestre en la consola los números del 1 al número que introduzcas como parámetro (hasta 1000 como máximo)

let numero = prompt("Dime un numero entre el 1 al 1000");

for(let i = 1; i <=numero; i++){
    console.log(i);
}

// TODO: haz un contador que solo muestre los números que contengan un dígito que esté contenido en la cadena definida por el usuario (usando prompt) hasta 100

let digitos = prompt("Introduce una cadena de digitos (0-9): ");

if(/\d+$/.test(digitos)){
    for(let i = 0; i<= 100; i++){
        let digitoStr = i.toString();
    
        for (let j = 0; j < digitos.length; j++){
            if(digitoStr.includes(digitos[j])){
                console.log(i);
                break;
            }
        }
    }
} else{
    console.log("Introduzca un digito valido");
}
// TODO: lista de la compra. Haz que un prompt se repita hasta que el usuario introduzca una palabra clave (usa BREAK); hasta entonces, cada palabra introducida será un ítem de la lista de la compra, que se mostrará después de que el usuario la detenga con el formato:
//                       Lista de la compra:
//                       - Pan
//                       - Mantequilla
//                       - Agua


let listaCompra = [];
let palabraClave = "stop";

while (true) {

    let item = prompt("Introduce un ítem para la lista de la compra (o 'STOP' para terminar):").toLowerCase();

    if (item === palabraClave) {
        break;  
    }

    if (item) {
        listaCompra.push(item);
    } else {
        console.log("No has introducido ningún ítem. Inténtalo de nuevo.");
    }
}

console.log("Lista de la compra:");
listaCompra.forEach(item => {
    console.log(`- ${item}`);
});
