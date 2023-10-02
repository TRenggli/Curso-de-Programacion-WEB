//*Objetos: son estructuras armadas por PROPIEDADES que almacenan valores

const verduras = ["papa", "batata", "zanahoria", "tomate"]
verduras[1]

//aqui abajo tengo mi correspondiente objeto, con sus propiedades (nombre, edad, ciudad y profesion) y sus respectivos valores para cada propiedad
const formulario = {
    nombre:"Sebastian", 
    edad:36, 
    ciudad: "Mar del plata", 
    profesion: "programador"
}

//a diferencia de los array, no importa en que pocision esten las propiedades, siempre seran o mantendran su valor

// Accederemos a los valores de las propiedades, de la siguiente maneras:

//1ra manera: DOT NOTATION (A TRAVES DEL PUNTO)
// basicamente ponemos el nombre de nuestro objeto, seguido de un punto y el nombre de la propiedad a la que quiro acceder
formulario.profesion

//2do metodo: BRAKET NOTATION (A TRAVES DE CORCHETES). la propiedad debe ir entre comillas
//accedo a los elementos llamando mediante corchetes (como en los arrays) pero enves por el indice y/o pocision, por la propiedad (en comillas obvio)
formulario["edad"]

// En los objetos, ambien podemos tener diferentes propiedades. Esto significa que no siempre, el objeto tendra como propiedad caracteres alfabeticos! Incluso podremos ver numeros
const jugadores = {
    1: "Emiliano Martinez",
    4: "Cristian Romero",
    7: "Rodrigo de Paul",
    10: "Leonel Messi",
    11: "Angen DiMaria",
    "D.T": "Scaloni"
}

//Esta mal
jugadores.10
//*Esta bien
jugadores[10]
jugadores["D.T"]

// Como podemos agregarle una propiedad a un objeto? Simplemente llamaremos al objeto, y crearemos su propiedad desde el propio llamado de la propiedad, y le pasamos el valor
jugadores[9] = "Julian Alvarez"

jugadores.ayudante = "Walter Samuel"

jugadores[9]
jugadores
alert(jugadores)

//no puedo visualizar objetos mediante alertas, por eso lo de arriba no apareceria. Si lo mandamos por console.log si lo podremos ver pero no verlo  mediante alerta
alert(jugadores[9])

// Crearemos un objeto desde la pantalla del PROMPT de mnuestro navegador

const propiedad = promp("Indique el nombre de la propiedad")
const valor = prompt("Indique el valor de la propiedad")

const test = {}

//! PARA CREAR OBJETOS CON PROPIEDADES QUE SERAN DEFINIDAS POR EL USUARIO USEMOS LA DEFINICION MEDIANTE BRACKET NOTATION, y dentro del objeto, indiquemos LA VARIABLE que va a ser la que dara el nombre a la propiedad

for (let i = 0; i < 4; i++) {
    const propiedad = promp("Indique el nombre de la propiedad")
    const valor = prompt("Indique el valor de la propiedad")
    
    test[propiedad] = valor
    console.log(test)
}

// Los objetos trabajan a partir de las denominadas CLASES
//Metodos para objetos: Los objetos creados, no tienen en si mismos, METODOS ASOCIADOS, sino que los metodos provienen de la clase object

//keys, nos permite analizar un array con todas sus propiedades
Object.keys(formulario)

//values nos permite visualizar un array con los VALORES de TODAS LAS PROPIEDADES
Object.values(formulario)

//Crea un array enorme, y dentro del mismo crea un array para cada propiedad, y dentro de este "sub array", la propiedad sera el indice 0 y el valor el indice 1
Object.entries(formulario)
Object.entries(formulario)[1]//si pongo despues corchete y un numero, mostrare una pocision que esa pocision sera un array en el que estaran metida la propiedad y valor
Object.entries(formulario)[0][1] //Agregandole el segundo corchete, vamos alindice 0 en el que se encuentra el "nombre", y la propiedad nombre que valor tiene? "Sebastian" en este caso
jugadores.

verduras
