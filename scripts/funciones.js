

//funcion que mostra una string por la consola
function saludar() {
    
    console.log("Hola, clase!");
}

saludar()

function saludo() {
    return "hola, clase!";
}

hola =  saludo();
console.log(hola);
console.log(saludo());

// función con un parámetro que mostra una string por la consola

function saludarPersona(nome) {
    console.log(`hola, ${nome}!`);   
}

saludarPersona("David");


function saludoPersona(nome) {
    return `hola, ${nome}!`;   
}

console.log(saludoPersona("Alberto"));

//una funcion a le que passes un DNI y te lo pase ofuscado


    function dniOfuscado(dni) {
        return dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X");
    }

   console.log(dniOfuscado("12345936G"));

   dni = "9876543G"
    // function ofuscarDni() {
    
    //    dni = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X");
       
    // }

    // ofuscarDni()
    // console.log(dni);

    function ofuscarDni() {
        dni = dniOfuscado(dni);
    }

    ofuscarDni();

    console.log(dni);