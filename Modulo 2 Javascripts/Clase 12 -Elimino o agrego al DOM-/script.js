// Seguimos con DOM. Agregamos elementos al DOM
// 1. Crear un elemento
// 2. Agregarle contenido al elemento recien creado
// 3. Agregarle atributos
// 4. Agregarlo al DOM

// 1. Crear un elemento
const div = document.createElement("h1") //escribimos la etiqueta que queremos crear

// 2. Agregarle contenido al elemento recien creado
h1.textContent = "Este es el titulo de mi web"

// 3. Agregarle atributos
h1.setAttribute("class", "titulo") // a h1 le agregamos una clase llamada "titulo"

// 4. Agregarlo al DOM
// importante indicar DONDE vamos a agregar este elemento, en que lugar
// Las comento ya que hare una galeria de imagenes
// document.body.appendChild(h1) //se lo ingresamos al hijo del body (en este caso tendremos un h1 dentro del body). 

// document.body.insertBefore(h1) // ponerlo ANTES del body (o la etiqueta que pongamos despues de document) (sirve mejor para cuando tengamos un div o algo creado)

// Otro ejemplo
// const game = document.querySelector("#game")
const img = document.createElement("img")
img.setAttribute("src", "https://picsum.photos/200/300")
// game.appendChild(img)
setTimeout(() => {
    game.appendChild(img)
}, 2000)


/*
Eliminamos un elemento del DOM
game.removeChild(img) //le pasamos la etiqueta o elemento que queremos eliminar
Otro ejemplo de eliminar
const parrafo = document.querySelector("p")
parrafo.remove()

setTimeout(() => {
    parrafo.remove()
}, 2000)

 EVENTOS
document.body.addEventListener("mousemove", (evento) => { //Se le pasan dos parametros, el primero es el nombre del evento y el segundo es la Funcion a ejecutar cada vez que se produzca el evento
    console.log(evento)

})

 Ejemeplo
 1. Seleccionar el elemento
imagen.addEventListened("click", (e) =>{
    console.log("Hiciste click en la imagen")
})
 Tengamos en cuenta que yo arriba escribi que la imagen aparezca 2 segundos despues y esto se ejecuta apenas incia el codigo, que imagen apretare si no esta todavia? ERROR!!

 Ejemplo 2. Hacer click en la imagen y agrandarla.
imagen.addEventListened("click", (e) =>{
    imagen.style.borderRadius = "50%" // Redondeamos la imagen
    imagen.style.transition = "all ls ease"
    imagen.style.transform = "rotate(360deg)"
})
*/

// Galeria de imagenes Interactiva

// Creamos un diccionario para darle un indice a cda imagen
const imagenes = {
    1: "https://th.bing.com/th/id/R.690b0f6befdaf6688692a4ac8daaadb3?rik=gnsikG%2fetL7m0g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jrHsHaiCBi0%2fVSamGhUG4BI%2fAAAAAAABKtM%2fH7BKybW0nwc%2fw1200-h630-p-k-no-nu%2fO83A6069.jpg&ehk=9EFgBmgABcQi%2blzmaAfgz1otidUg5HxSiWe4Sn85qy4%3d&risl=&pid=ImgRaw&r=0",
    2: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-pyramid-lake-jasper-national-park-design-picscarson-ganci.jpg",
    3: "https://th.bing.com/th/id/OIP.DWGFD20rie-Q3r2shu88tAHaDK?pid=ImgDet&w=750&h=320&rs=1",
    4: "https://th.bing.com/th/id/R.4dd50aacf9ee97742c08ff05317d78c1?rik=RcR4UecmbTzPiw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mwTC89DsfcI%2fUaUOsRjdvPI%2fAAAAAAAARwY%2feVc1iHdBFl8%2fs1600%2fLamborgini%2bVeneno%2b1%2bcarros%2bdeportivos%2b2.013.jpg&ehk=I6627tD8pr1a0qTFgza2rwvhLdV%2fJSzM8X%2f2QHLxiXQ%3d&risl=&pid=ImgRaw&r=0",
    5: "https://1.bp.blogspot.com/-7njozmBFcu8/UVt85cQB9MI/AAAAAAAAbkk/cZvETNs19EI/s1600/2014-McLaren-P1.jpg"
}

let imagenActual = 1
    let totalImagenes = 5

function cambiarImagen(incremento) {
    imagenActual += incremento
    if(imagenActual > totalImagenes){
        imagenActual = 1
    } 
    if (imagenActual < 1) {
        imagenActual = totalImagenes
    }
    const imagen = document.querySelector("#imagen")

    imagen.setAttribute("src", imagenes[imagenActual])
}

// Capturamos los botones
const botonAnterior = document.querySelector("#boton-anterior")
const botonSiguiente = document.querySelector("#boton-siguiente")
const imagen = document.querySelector("#imagen")

// Crear un evento para cada boton
botonAnterior.addEventListener("click", () => {
    cambiarImagen(-1)
})

botonSiguiente.addEventListener("click", () => {
    cambiarImagen(1)
})

document.body.addEventListened("keydown", (e) => {
    if (e.key == "ArrowLeft") { //imagen anterior con la flecha de la izquierda
        cambiarImagen(-1)
    }
    if (e.key == "ArrowRight") {
        cambiarImagen(1) // Siguiente imagen con la flecha de la derecha
    }
})


// https://th.bing.com/th/id/R.690b0f6befdaf6688692a4ac8daaadb3?rik=gnsikG%2fetL7m0g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jrHsHaiCBi0%2fVSamGhUG4BI%2fAAAAAAABKtM%2fH7BKybW0nwc%2fw1200-h630-p-k-no-nu%2fO83A6069.jpg&ehk=9EFgBmgABcQi%2blzmaAfgz1otidUg5HxSiWe4Sn85qy4%3d&risl=&pid=ImgRaw&r=0 
// https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-pyramid-lake-jasper-national-park-design-picscarson-ganci.jpg
// https://th.bing.com/th/id/OIP.DWGFD20rie-Q3r2shu88tAHaDK?pid=ImgDet&w=750&h=320&rs=1
// https://th.bing.com/th/id/R.4dd50aacf9ee97742c08ff05317d78c1?rik=RcR4UecmbTzPiw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mwTC89DsfcI%2fUaUOsRjdvPI%2fAAAAAAAARwY%2feVc1iHdBFl8%2fs1600%2fLamborgini%2bVeneno%2b1%2bcarros%2bdeportivos%2b2.013.jpg&ehk=I6627tD8pr1a0qTFgza2rwvhLdV%2fJSzM8X%2f2QHLxiXQ%3d&risl=&pid=ImgRaw&r=0
// https://1.bp.blogspot.com/-7njozmBFcu8/UVt85cQB9MI/AAAAAAAAbkk/cZvETNs19EI/s1600/2014-McLaren-P1.jpg