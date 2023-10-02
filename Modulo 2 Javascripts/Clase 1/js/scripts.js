/* Que es una variable? es un espacio de almacenamiento que nos permite guardar informacion
ej: --Primario:rgb(255,30,25)
en este ejemplo estoy guardando un color
tambien se puede guardar una fuente, un bloque de codigo, etc*/

/*
? Datos:
Tenemos distintos tipos de datos, pueden ser:
. Numericos: Enteros o flotantes
. Alfanumericos: string => Puede contener tanto letras, numeros y/o caracteres
. Booleanos: true/false => evaluaciones de expresiones

Como se si un dato es EXLUSIVAMENTE de tipo numerico o string
Si lo vamos a usar para operaciones matematicas, sera un dato del tipo NUMERICO, sino sera un dato string

? Variables: Es una CAJA

Primero mencionamos que tipo de dato que va a tener, y cual es la info

nombre = "Sebastian"
mascota = "Limon"
ciudad = "Mar del Plata"
*/

//*Para crear una variable utilizaremos ciertas reglas

// LET / CONST => Nos permite crear una variable para almacenar datos
// Sintaxis Correspondiente: primero creamos la variable y luego le ASIGNAMOS el dato a contener

let nombre = "Sebastian"
const mascota = "Limon"

//* La diferencia entre LET y CONST es que LET se puede cambiar el contenido de la misma, mientras que el contenido de CONST NO se puede cambiar

//Usar snake_case o camelCase segun lo conveniente. como tal se ve en la primera es separarlo con una barra, y en la segunda distinguir la segunda palabra empezando con una mayus
let direccion_empleo = "Av siempreviva 742"

let diasDelMes = 30
//Cada palabra a exepcion de la primera pongo su primera letra con mayusc

// A traves de un "console.log()", podremos visualizar resultados desde la consola de desarrollador en la apgina web
console.log("Frase desde mi documento JavaScript")
console.log(2+2);
console.log(6*8);
// Noostros vamos a usar esto para nosotros, para ver el comportamiento del documento

// Para el usuario

alert("Mensaje desde la ventana de Alerta en JavaScript")

// Como pedir un dato desde la ventana de alerta?
// Para esto utilizaremos el prompt: Es una ventana de alerta pero con la posibilidad de ingresar los datos

let nombre_alumno = prompt("Diganos su Nombre: ")
// Cuando el usuario escribe el dato y pone aceptar en la alerta, lo que escribio se guarda en el prompt
// Como veran cree en la misma linea la variable ley que es el resultado del prompt

// Tambien puedo combinar variables como los datos que yo quiera poner
alert("Hola", nombre_alumno)
// Al tener dos datos separados, los tengo que concatenar con un +. Unir dos string para que se tranformen en uno solo

alert("Bienvenido " + nombre_alumno)

