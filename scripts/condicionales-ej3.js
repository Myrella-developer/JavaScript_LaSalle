function calcular() {
    let operacion = prompt("Introduzca la operación que desea realizar (+, -, *, /, %)")
    if (!"+-*/%".includes(operacion)) {
        alert("Eso no es un símbolo aceptable");
        return;
    }

    let x = parseFloat(prompt("introduzca el primer numero"))
    if (isNaN(x)) {
        alert("El número introducido no es válido")
        return;
    }

    let y = parseFloat(prompt("introduzca el segundo numero"))
    if (isNaN(y)) {
        alert("El número introducido no es válido")
        return;
    }

    switch (operacion) {
        case "+" :
            console.log("El resultado es: " + (x + y));
            break;
        case "-":
            console.log("El resultado es: " + (x - y));
            break;
        case "*":
            console.log("El resultado es: " + (x * y));
            break;
        case "/":
            if (y !== 0) {
                console.log("El resultado es: " + (x / y));
            } else {
                alert("No se puede dividir por cero");
            }
            break;
        case "%":
            if (y !== 0) {
                console.log("El resultado es: " + (x % y));
            } else {
                alert("No se puede dividir por cero");
            }
            break;
        default:
            alert("Eso no es un símbolo aceptable");
            break;
    }
}

calcular();


        