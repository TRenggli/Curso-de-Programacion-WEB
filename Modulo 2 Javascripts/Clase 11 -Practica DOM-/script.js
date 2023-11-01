document.body.style.backgroundColor = "Lightgray"



// ADIVINAR NUMERO
const numeroAleatorio = Math.floor(Math.random() * 10) + 1 //aqui usamos la funcion math.random para generar un numero aleatorio, lo miltiplico por 10, y con la funcion math.flooer lo redondeo para abajo, y a eso le sumo 1 para que este entre 0 y 10 y no entre 0 y 9

// console.log(Math.random())
// console.log(numeroAleatorio())



function verificarNumero() {
    const numeroUsuario = Number(document.getElementById("Adivina Numero"), value) //esta funcion number lo que hace es pasar un string a numero
    const resultado = document.getElementById("resultado")

    if (numeroUsuario == numeroAleatorio){
        resultado.textContent = "Adivinaste el numero"
    } else {
        resultado.textContent = "No adivinaste el numero, intenta de nuevo"
    }
}

// CALCULADORA
let operando1 = ""
let operando2 = ""
let operandoActual = ""

// Creacion de Funciones
function agregarNumero(numero) {
    if (operacionActual == ""){// ""esto es un string vacio
        operando1 += numero // Si la operacion actual esta vacia, quiere decir que lo que estamos haciendo es poner el PRIMER numero, tipo el PRIMER operando
    } else {
        operando2 += numero
    } 
}



function operacion(operador){
    operacionActual = operador //podai ser el +, el -, el de /(dividir) o *(multiplicar)
}

function calcular() {
    const num1 = parseFloat(operando1)
    const num2 = parseFloat(operando2)
    let resultado

    switch(operacionActual){
        case '+':
            resultado = num1 + num2
            break
        
        case '-':
            resultado = num1 - num2
            break

        case '/':
            resultado = num1 / num2
            break
        
        case '*':
            resultado = num1 * num2
            break    
    }

    operando1 = resultado.toString() //lo tenemos en formato numero y lo ponemos como string para mostarlo en html
    operando2 = ""
    operandoActual = ""
    actualizarResultado() //Funcion que le va a mostrar al usuario el resultado
}

function borrar() {
    operando1 = ""
    operando2 = ""
    operandoActual = ""
    actualizarResultado()
}

function actualizarResultado() {
    document.getElementById("resultado").value = operando1 + operacionActual + operando2 //con el value, accedemos y trabajamos con el valor que contiene (en este caso) resultado
}