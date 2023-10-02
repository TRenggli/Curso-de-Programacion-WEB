//Los Metodos son funciones que, al ejecutarlas pasara algo. vEREMOS ESTOS METODOS ASOCIADOS A LOS ARRAYS

const nombres = ["seba", "nancy", "lucas", "tatiana"]
// Agregar metodos a mi array. Puedo usar el push o unshift

//*push():nos ubica un nuevo elemento al final de nuestro array
const elemento_quitado = nombres.pop() //salida => elemento_quitado= "Tatiana"

//*unshift(): Agrega un elemento AL PRINCIPIO del array

nombres.unshift("Carlos") //salida=> const nombres = ["Carlos","seba", "nancy", "lucas", "tatiana"]

//*pop(): quita el ULTIMO elemento del array y nos devuelve cual fue

const elemento_quitado2 = nombres.pop() //salida => elemento_quitado= "Tatiana"
                                       // const nombres = ["seba", "nancy", "lucas"]

//*shift(): Quita el primer elemento del array y nos devuelve CUAL FUE

const elemento_quitado3 = nombres.shift() //salida => elemento_quitado= "Seba"
                                          //const nombres = ["nancy", "lucas", "tatiana"]


// Metodos de Array splice y slice
const frutas = ["Manzana", "kiwi", "Pomelo", "Frutilla", "Melon", "uva", "mandarina", "sandia"]

// Array slice nos devuelve UNA PORCION de nuestro array, para esa "copia" almacenarla y/o usarla en otra array
// en el parentesis primero ponemos desde que pocision queremos arrancar para tomar seguido de una "," y despues hasta que elemento queremos agarrar, osea su pocisiob
//*slice NO modifica el array original
const frutas_slice = frutas.slice(1,6)
frutas_slice ["Kiwi", "Pomelo", "Frutilla", "Melon", "Uva", "Mandarina"]

// Array splace
//
// SI modifica el array original, ademas si despues de los numeros, pongo alguna palabra u algo, eso se va a agregar entre medio de los elementos que quedaron solos en el array original
// osea en este caso quedo naranja y sandia solos en el array original, y naranja se va a insertar en medio de estos
const frutas_splace = frutas.splace(1,6, "Naranja")
frutas_splice ["Kiwi", "Pomelo", "Frutilla", "Melon", "Uva", "Mandarina"]
frutas ["Manzana", "Naranja", "sandia"]

//* lenght nos dira cuantos INDICES hay en el array
nombres.length() // solucion=> 4

// Sort hace un ordenamiento de nuestro array de forma ASCENDENTE. Si lo queremos de forma DESCENDENTE es poniendo despues del sort(). el reverse()
nombres.sort(a, b)
nombres.sort().reverse()

//! EJEMPLO CASO NUMERICO

const numeros = [10, 6, 19, 23, 3 ,39, 2, 4, 45]

numeros.sort((a,b) => a-b) // Ordena los elementos de forma ascendente comparando si el primero es mas CHICO que el siguiente, y asi sucesivamente
numeros.sort((a,b) => b-a) // Ordena los elementos de forma ascendente comparando si el primero es mas GRANDE que el siguiente, y asi sucesivamente

//*Concat(): Unificando arrays

const animales_selva = ["Monos", "Yaguaretes"]
const animales_desiertos = ["Monos", "Yaguaretes"]
const animales_sabanas = ["Elefantes", "leones"]

const arca_de_noe = animales_selva.concat(animales_desiertos, animales_sabanas)
arca_de_noe ["Monos", "Yaguaretes", "Monos", "Yaguaretes", "Elefantes", "leones"]

//*Destructuring: toma los elementos de un array y los maneja de forma INDIVIDUAL
const combiandos = [...animales_selva,...animales_desiertos,...animales_sabanas]

//! HOMEWORK: Crear un Array de articulos de tienda de deportes: zapatillas, pelotas, medias, botines, etc
/*
1. Agregaran al final del array un nuevo elemento
2. Luego quitaran el primer elemento del array
3. Insertar un nevo elemento en el indice 3, quitando el anterior (si estaba en el indice 3 zapatillas, lo quitaran y pondran alli algo distinto
4. Ordenar alfabeticamente de manera ASCENDENTE el Array)
5. Crearemos 3 array nuevos , cada uno con 2 elementos, y aplicando un destructuring o concat, creando un array nuevo que contenga el contenido de esos 3 array
*/