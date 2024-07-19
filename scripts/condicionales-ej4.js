/* TODO: crea una función que pida por prompt si quieres camiseta, 
pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por 
consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"*/

// crea una función que divida dos números enteros y te devuelva en un array el cociente y el resto (residuo) [cociente, residuo]

function division(q, p) {
   return [parseInt(q/p), q%p]
}

a = 27
b = 7
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);

a = 2773457
b = 7245
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);

// crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"

function pedido() {
   let prenda = prompt(`Elige la prenda que quieres pedir: 
camiseta 👕, pantalón 👖 o gorra 🧢`).toLowerCase()

   if (!["camiseta", "gorra", "pantalon", "pantalón"].includes(prenda)) {
       console.log("Prenda incorrecta, elige otra!");
       return pedido();
   }

   let color = prompt(`Elige de qué color quieres la prenda:
rojo 🔴, azul 🔵, verde 🟢 o amarillo 🟡`).toLowerCase()

   if (!["roja", "rojo", "azul", "amarilla", "amarillo", "verde"].includes(color)) {
       console.log("Color no disponible, vuelve al inicio!");
       return pedido();
   }

   if (color == "roja") color = "rojo"
   if (color == "amarilla") color = "amarillo"
   
   let talla = prompt(`Elige la talla de tu prenda:
S, M, L, XL`).toUpperCase()

   if (!["S", "M", "L", "XL"].includes(talla)) {
       console.log("Talla no disponible, vuelve al inicio!");
       return pedido();
   }

   let articulo = ["pantalon", "pantalón"].includes(prenda) ? "un" : "una" // operador ternario: equivalente a un if else

   let pedidoCompleto = `Has pedido ${articulo} ${prenda} de color ${color} talla ${talla}`
   console.log(pedidoCompleto);
}

// crea una función que esté al principio de todo del script y te permita decidir cuál de los cuatro ejercicios anteriores se ejecuta

function elegirFuncion() {
   let func = parseInt(prompt(`Elige el número de la función que quieres ejecutar:
   1: calculadora
   2: pedido ropa
   3: cuidado de animales
   4: comprobador de nombres compuestos`))

   if (func == NaN) return; 

   if (![1, 2, 3, 4].includes(func)) {
       console.log("No es una función válida, recarga la página para elegir otra");
       return;
   }

   switch (func) {
       case 1:
           calcular();
           break;
       case 2:
           pedido();
           break;
       case 3:
           animalico();
           break;
       case 4:
           nombreCompuesto();
           break;
   }

   console.log("Recarga la página para elegir otra función");
}

elegirFuncion()