// esta función está en el atributo onClick de los titulos de sección
function clicEnSeccion() {
    console.log("Has hecho click en un título de sección");
}


function clicEnSubtitulo() {
    console.log("Has hecho click en Subtitulo");
}

let subtitulo = document.querySelector("h3")
subtitulo.addEventListener("click", clicEnSubtitulo)

//esta función esta en todos los párrafos
function clicEnParrafo() {
    console.log("Has hecho clic en un párrafo");
}

let parrafo = document.querySelectorAll("p")

let numParr = 1

// for(let i = 0; i < parrafos.length; i++) {
//     parrafos[i].addEventListener("click", ()=> console.log(`Has hecho clic en párrafo número ${i +1}`))
// }

parrafos.forEach((parrafo, i) =>{
    parrafo.addEventListener("click", ()=> console.log(`Has hecho clic en párrafo número ${i +1}`))
})
console.log(parrafos);