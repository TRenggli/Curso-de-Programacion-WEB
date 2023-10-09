// Estructuras combinadas: Nuestros ARRAYS y OBJETOS, pueden combinarse entre si, para obtenerse DIFERENTES estructuras con ambos TIPOS DE DATOS:

const alumnos_curso = [
    {nombre:"juan",curso: "Prohramacion"}, 
    {nombre: "pepe", curso:"Ingles"},
    {nombre: "seba", curso: "Diseño Grafico"}
]

// Como se conforma el array grande?
// [{}, {}, {}]

// Adentro de este array tengo objetos, y para acceder a objetos, tengo qie entrar mediante propiedades

// En este caso, ingresamos al indice 2, y luego a la propiedad nombre
alumnos_cursos[2]["nombre"]
//estructura.[indice][propiedad]

//* Veamos un ejemplo en el cual un OBJETO, contiene adentro un ARRAY de elementos. En este ejercicio, veremos cual es la segunda materia, que nos enseña el profesor
// Cual es la forma? {prop1,prop:[], prop:[]}
const profesor = {
    nombre: "Miguel", 
    curso: ["html/css", "js", "python"],
    horarios: ["mañana", "noche"]
}

profesor.cursos[1]
//estructura.propiedad[indice]

//* Crearemos una estrucutra mas compleja, y haremos una lista de items a cumplir:

const usuario = {
    nombre: "Sebastian", 
    ciudad: "Mar del plata", 
    mascotas: ["Firulais", "Gamora"], 
    banda_favorita: "Nirvana", 
    temas_favoritos: [{cancion:"in bloon", artista: "Nirvana"} , {cancion: "Californication", artista: "Red hot chili pappers"}], 
    profesion:{nombre: "Profesor", Institucion: "Global Academy", antiguedad: "1 año"}
}

/* 
1. Cuales son las mascotas del profe?
2. Cual es el nombre de su segundo tema favorito?
3. En que institucion trabaja?
*/

//1:
profesor.mascotas[0]
profesor.temas_favoritos[1][cancion] //tambien puede ser: profesor.temas_favoritos[1].cancion YA que al ser una propiedad puedo mencionarla un punto, total ya estoy adentro de ese sub-array

profesor.profesion.institucion //cadena de propiedades, tambien puede haber cadena de indices. 


//! HOMEWORK:
/*

*/

//* FUNCIONES: Estructuras que envuelven bloques de codigo, que solo se ejecutaran si estas son llamadas. La idea es crear bloques de codigo que sean reutilizables llamandolos las veces que queramos

//? Ejemplo: Tenemos un codigo que pide nombre /fecha de nacimiento del usuario, lo saluda y le dice su edad

/*const nombre = promp("Diganos su nombre ")
const anio_nat = prompt("Indique su año de nacimiento")
alert(`Hola ${nombre}, tu edad es ${2023-anio_nat}`)
*/

//* Para no escribir este codigo todas las veces que lo queramos volver a utilizar, lo metemos en una funcion
// function (indica que esto es una funcion) nombre de la funcion (aqui adentro ponemos parametros que va a utilizar la funcion) seguido de llaves que abarcaran el codigo {}
function saludar ()  {
    //*BLOQUE DE CODIGO
    const nombre = promp("Diganos su nombre ")
    const anio_nat = prompt("Indique su año de nacimiento")
    alert(`Hola ${nombre}, tu edad es ${2023-anio_nat}`)
}

// uNA VEZ CREADA LA FUNCION COMO LA DEJE ARRIBA, LA TENGO QUE INVOCAR

saludar()
alert("funcion ejecutada OK")
saludar()
alert("funcion ejecutada OK 2")
saludar()
alert("funcion ejecutada OK 3")