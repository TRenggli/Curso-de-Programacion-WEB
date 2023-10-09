//* Funciones con PARAMETROS y sentencia RETURN

const numero_1 = parseInt(prompt("Ingrese el primer numero: "))
const numero_2 = parseInt(prompt("Ingrese el segundo numero: "))

function suma (num1, num2){
    //el nombre que le pongamos a los parametros, tiene que ser ese mismo nombre el que tambien vamos a usar dentro del bloque de codigo
    const result = num1+num2
    alert(`El resultado de la suma es: ${resul}`)
}

function multiplicar (num1, num2){

    const result = num1*num2
    alert(`El resultado de la suma es: ${resul}`)
}

//! La variable que va a entrar a la funcion NO NECESARIAMENTE tiene que llamarse igual que el nombre de los parametros

sumar(num1,num2)
multiplicar(numero_1, numero_2)

//* Razonar parametros con respecto a los argumentos para la funcion

function animales(a, b, c){
alert(`El primer animal es ${c}`)
alert(`El segundo animal es ${a}`)
alert(`El tercer animal es ${b}`)
}

const animal = "Vaca"

animales (animal, "Perro", "Gato")


//* Devolucion de una funcion: El RETURN

function CalcularPromedio(a, b, c){
    const promedio = (a+b+c)/3
    return promedio
}
// Para no perder el resultado que me da la funcion, ademas de decirle que me "retorne ese dato en el bloque de codigo, creo otra variable para asi en esa variable guardar el resultado de la funcion y no perderlo"
const prom_alumno = calcularPromedio(5, 9, 3)
alert(`El promedio de juansito fue de: ${prom_alumno}`)

//* Funcion con return

function DatosAlumnos(nombre, curso, edad){
    const alumno = {name:nombre, course: curso, age: edad}
    return alumno
}

const alumno = DatosAlumno("Seba", "Programacion", 25)
console.log(alumno);

//* ARROW FUNCTION (Funcion FLECHA): Se caracteriza por almacenarse en una avriable, y luego se interpreta la ejecucion.
//segun el tamaño de la funcion, puede NO tener llaves, e inclusive puede no tener el return EXPLICITAMENTE ESCRITO

/*
function CalcularCubo (num) {
    const res = num*num*num
    return res
}
*/

const calcularCubo = (num) => {
    const res = num*num*num
    return res
}
// La diferencia es que antes lo que era el NOMBRE DE LA FUNCION, ahora es el NOMBRE DE LA VARIABLE, y los parentesis con el argumento van despues del igual, y lo que era que se iba a ejecutar, va despues de la flecha y llaves...
// La funcion NO va a requerir llaves cuando solo contenga una sola linea. Si ocupa dos o mas lleva llaves {}
// Tambien si tiene una sola linea, no necesitare el return. A

const resultado = calcularCubo(6)
console.log(resultado);

//! LAS ARROW FUNCTION NO TIENEN HOSTING, OSEA QUE SI IMPORTA EL LUGAR DESDE DONDE SE LA LLAME
// A diferencia de las funciones convenciones,en este caso, al no ejecutarse PRIMERO la funcion y despues la llamada no sirve, esta mal
// Hay que declararlas antes de utilizarlas
/*
const resultado = calcularCubo(6)
const calcularCubo = (num) => {
    const res = num*num*num
    return res
}

console.log(resultado);
*/

//! HOMEWORK:
/*
1. Crear una funcion que reciba por parametros, tres argumentos
2. Construir un objeto dentro de la funcion con estos 3 argumentos, y utilizando el return, devolverlo y almacenarlo en una variable
3. Luego, con ese objeto, hacer un alert que diga `Hola, ${nombre} que linda es la ciudad de ${ciudad}, vives alli hace ${edad] años`
*/

function tarea (nombre, ciudad, edad) {
    const datos = {name:nombre , city: ciudad , years: edad}
    return datos
}

const datos= tarea ("Tomas", "San Martin", 20)
alert (`Hola ${nombre}, parece que vivis hace tiempor en la ciudad de ${ciudad}, y tenes ${edad}`)
console.log(datos);