//* Calculadora con una suma en JS: Le voy a pedir al usuario 2 numeros, y los voy a sumar. Para finalizar mostrare el resuktado como alerta

 let numero_1 = prompt("Ingrese el primer numero: ")
 let numero_2 = prompt("Ingrese el segundo numero: ")



//let resultado = numero_1 + numero_2
//alert("La suma de los dos numeros es: " + resultado)

//El problema aqui es que al poner un + estamos concatenando dos datos de tipo string. Por ende tenemos que hacer una conversion para que la consola los tome como lo que realmente son, NUMEROS.
//para esto utilizamos el parseTIPOdeDATOALQUELOQUIEROCONVERTIR(Dato que quiero convertir)

let resultado = parseInt(numero_1) + parseInt(numero_2)
alert("La suma de los dos numeros es: "+ resultado)

//JS siempre va a intentar transformar los datos para poder sumar, restar, dividir, multiplicar o dividir

//Ej: Supongamos que tenemos que mostrar un string al usuario, el cual contiene varios datos, en un mensaje:
// Los datos son su nombre, ciudad y edad

let nombre = "Sebastian"
let ciudad = "Mar del Plata"
let edad = 20

alert("Hola " + nombre + " que bonita es la ciudad de  " + ciudad + ", Eres muy joven, no sabiaque tienes "+ edad + " años")

//* Estructurta de Datos
//* Template string
//Una manera mejor de escribir varias variables y/o datos es escribir variables directamente dentro de un unico string!!
//Para eso, utilizaremos la comilla invertida (¨¨) (cuyo atajo de teclado es alt+96) y dentro del string escribiremos las variables utilizando el signo $ seguido de las llaves {}

alert(`Hola ${nombre} que bonita es la ciudad de ${ciudad}. Eres muy joven! No sabia que tienes ${edad} años!`)

//! ATENCION: El uso de los template String nos va a ser muy util en el futuro. Recomiendo PRACTICARLO!!!

//* ARRAYS: Es un conjunto de datos ordenados que se almacenan dentro de una unica variable. Tomemos el ejemplo de una lista bde articulos.
// Para crear un array, utilizaremos los CORCHETES. Abrimos los corchetes para cargar los datos, y una vez finalizada la carga, cerramos los corchetes
// Los datos comienzan a partir del 0 y son CONCECUTIVOS, un dato despues del otro. !!!

let inventario = ["tornillos", "clavos", "arandelas", "bulones", "tuercas"]

// En el ejemplo de arriba tenemos 5 elementos. Arranca de 0, 1, 2, 3, hasta 4. Estas fueron las pocicones de los elementos
//Para acceder y ver un unico elemento d eesta lista, basta con llamar a la variable[numero de pocision en la que se encuentra el elemento que queremos ver]

inventario[2]

//HOMEWORK: Crear un Array, con minimo 6 elementos y consultar el primero, el ultimo y alguno de los del medio
let inventario2 = ["tornillos", "clavos", "arandelas", "bulones", "tuercas", "boca"]

inventario2[0]
inventario2[2]
inventario2[3]
inventario2[5]




