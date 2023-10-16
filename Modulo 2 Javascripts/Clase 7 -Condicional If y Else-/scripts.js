//CONDICIONALES. Son estructuras que toman decisiones del tipo LOGICAS. El codigo analiza una estructura y determina una
//condicion de VERDADERO o FALSE. (un resultado BOOLEANO)
// Para este tipo de operaciones BOOLEANAS usamos operadores LOGICO

//Tipos de operadores:

// Operadores Logicos ARITMETICOS: > (mayor), < (menor), >=(mayor o igual), <= (menor o igual)
// Operadores Logicos de DATOS: == (igual en valor), === (igual en tipo de dato y valor que almacenan),!= (diferente en valor), !== (diferente en tipo y en valor que almacenan)


// Comparaciones EJEMPLOS
/*
10 > 9 resultado==> Verdadero (true)
11 > 6 resultado==> Falso (false)
5.5 >= 5.5 resultado==> Verdadero (true)
6.0 <= 6.1 resultado==> Verdadero (true)

"b" >= "B" resultado==> para esta comparativa lo que hace es comparar el ASCCI de los caracteres
" " >= "B". aqui cabe aclarar que el espacio generado por la barra espaciadora, es DISTINTO al que se genera mediante las teclas alt+255 ya que mediante el ascci tienen ambos dos valores diferentes

*/

const.persona = {
    nombre: "Seba",
    edad: 36,
    ciudad: "Mar del Plata"
}

persona.ciudad == "Mar del Plata" //verdadero
persona.ciudad != "Bs" //falso
persona.nombre != "Seba" //falso
persona.edad != "36" //falso

persona.nombre != "Seba" //falso
persona.edad != "36" //falso

!!! USAR OPERADORES DE TIPO Y VALOR PARA LOS COMPARATIVAS
*/

//* Condicoonal IF: Esta palabra reservada nos permite usar la comparativa logica

const color_semaforo = "Amarillo"

/* if (*comparativa logica a aplicar*) {
    dentro de las llaves escribimos el codigo a ejecuta en caso de que la condicion de arriba SE CUMPLA
}
*/

    function semaforo(color){
        if (color === "Rojo"){
            return "Detengase."
        }
        if (color === "Amarillo"){
            return "Precaucion."
        }
        if (color === "Verde"){
            return "Avance"
        }
    }

 // Nuestros if se ejecutan cuando la validacion es VERDADERA
 semaforo(color_semaforo)
 
 //* contexto de ejecucion y el uso del ELSE IF

 color = "Verde" // si aqui no es igual a ninguno de los if de abajo, ejecutara el codigo que pongamos en el ultimo else

 if (color === "Rojo"){
    return "Detengase."
}
    else if (color === "Amarillo"){
        return "Precaucion."
}
    else if (color === "Verde"){
        return "Avance"
}  else{
    return "Semaforo fuera de servicio"
}


// Ejemplo con if/ else if / else
// En un edificio hay 3 departamentos: Los primeros dos tienen gente habitando: "Seba" esta en el primero y "fer" en el segundo
// el 3er depto esta desabitado. Por ultimo los otros botones del portero, solo llama a porteria.COMPARATIVASHagamos el programa que si el usuario toca el 1 o 2, llamara al dueño correspondiente.COMPARATIVASSi toca el 3 dira "Depto "

function portero(numero){
    if (numero === 1){
        return "Detengase."
    }
    else if (numero === 2){
        return "Precaucion."
    }
    else if (numero === 3){
        return "Avance"
    }
    else{
        return "Lamando a porteria"
    }
}

const depto = 9

portero(depto)

/*
HOMEWORK: Crear un condicional que trabaje con un numero de productos:  este numero sera el stock. En una variable llamada stock, almacenaremos un numero que sera utilizado
de la siguiente manera. Si ese numero es igual a 0, dira "No hay stock disponible", si es menor o igual a 10, dira "queda poco stock", y si es mayor a 10 dira "stock suficiente".
Em caso de que se ingrese un dato que no sea numero, arrojara el mensaje que dira "campo de dato no valido". Crear una funcion que tendra dentro del condiconal, y ejecutar esa funcion para verificar que el dato que devuelva correctamente