//? Bucle FOR. A diferencia del while, el bucle tiene una estructura que se va a ejecutar una cantidad de veces YA definida
// El bicle for, lleva un indicador de veces a ejecutarse

//* En este ejemplo, ejecutaremos un conteo del 1 al 10. Cada numero sera enviado a la consola

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

/*
El bucle FOR lleva 3 partes esenciales a ejecutarse:
1) Una variable de inicio: Es el numero en el cual iniciara la EJECUCION
2) Un caso de corte, es decir hasta donde va a llegar o parar la ejecucion
3) Un incremento de unidades en la variable de inicio, osea que cada vez que ejecute la variable incrementara de a 1

for (variable de inicio, caso de corte, incrementador){
    pedazo de codigo que se va a ejecutar
}
*/
/*
let var_inicio = 1
const var_fin = 10

for (var_inicio; var_inicio <= var_fin; var_inicio++){
    console.log("var_inicio", var_inicio);
}

//* Llevamos este ejemplo a la manera PRACTICA de estructura JS (por convencion, lo escribimos de la siguiente manera:)

for (let inicio = 1; inicio <= 10; inicio++){
    console.log("Inicio ", inicio);
}
*/

//? Supongamos que tengo una lista de super, con lo que debo comprar. Teniendo esta lista, si quisiera saber cuales son cad auno de los item a comprar, deberia recorrer fila a fila, cada uno de los elementos que haya a adentro

const lista_compras = ["Arroz", "Azuca", "Harina", "Fideos", "Yerba", "Detergente", "Lavandina", "Tomate"]
console.log(lista_compras[0]);
console.log(lista_compras[1]);
console.log(lista_compras[2]);
console.log(lista_compras[3]);
console.log(lista_compras[4]);
console.log(lista_compras[5]);
console.log(lista_compras[6]);
console.log(lista_compras[7]);


for (let i; i < lista_compras.length; i++ ){ //length hace referencia a que i sea MENOR al largo de la lista cadena_compras
    console.log(lista_compras[i])
}

//*For, tiene una particularidad: Existen funciones PROPIAS  del for. Tenmos ademasne l for-in ; for-of; for-each

//? Ejecuta un codigo en base a cada uno de los elementos que se encuentre dentro

const animales = ["Gato", "Perro", "Loro","Iguana"]

animales.forEach((animal,index) => {
    console.log('El animal ${animal}, se encuentra en el indice ${index}.')//la primera expresion corresponde al valor que le vamos a poner a cada uno de los elementos
                              // poniendo index despues de animal, vemos en que parte esta ubicado la cadena o el elemento dentro
})
// Esto de arriba es lo mismo que poner:

for (let i = 0; i < animales.longht; i++){
    console.log(animales[i]);
}

//* For-of / For in

//? Crearemos una nueva constante para un objeto:
const usuario = {
    username: "Seba2023",
    email: "seba@gmail.com",
    edad: 36
}

//No puedo usar el For-Each o el for comun para recorrer objetos como en el caso de arriba

for(const dato of usuario){
    console.log(dato);
}

// For-of nos resulta util para recorrer arrays
for (const animal of animal){
    console.log(animal);
}

//For-in nos resulta util para recorrer OBJETOS
for (const dato in usuario) {
    console.log(dato);
}
// Por cada propiedad que esta en IN 
// Como accedia a la propiedad de un objeto? Teniendo la propieda del objeto puedo acceder a ella para visualizar su contenido mediante el BRACKET NOTATION

// Esto me permite acceder a cada uno de los indices que alla en el array, hasta el final...
for (const animal in animales) {
    console.log(animal);
}

//* Map: Estrucutra similar al for, pero que esta estrucutra nos devuelve algo UTILIZABLE.
// Tengo un array en el cual tengo numeros pares.
const numeros_pares = [2,4,6,8,10,12,14]
// A estos numeros pares quieor multiplicarlos por 3 y obtener un nuevo array con estos resultados

const nuevos_numeros = numeros_pares.map((num) => {
    return num*3
})
console.log(nuevos_numeros);
// Si hubieramos puesto un for-each este no iba a devolver nada, en cambio el map si me permite devolver un resultado, almacenarlo y poder utilizarlo en otro lado
