/* TODO: crea una función que pida por prompt si quieres camiseta, 
pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por 
consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"*/

function getProducto(item, color, talla) {
   console.log("Has pedido: " + item + " de Color: " + color + " y talla: " + talla);
};

getProducto(item = prompt("Deseas comprar una camiseta, pantalon o gorra? "), color = prompt("de que color deseas? "), 
talla = prompt("Dime tu talla: "));
