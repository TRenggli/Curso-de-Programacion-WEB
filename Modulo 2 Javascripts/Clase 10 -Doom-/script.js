// DOM: Document Objet Model => Es una representacion jerarjica de la estrucutra d eun documento html. Permite a javascrpt acceder y manipular elementos html, 
//asi como responder a eventos de la pagina

// Seleccion de elementos: 
// document.getElementById('id') => Devuelve un elemento htm con el id seleccionado
// document.getElementByClassName('class') = > Devuleve una coleccion de elementos HTML con la clase especificada
// document,getElementByTagName('tag') => Devuelve un elemento html con el tag especificado
// document. querySelectorAll('selector') => Devuelve todos los elementos que coincidan con el selector especificado (tipo devuelve una lista)

//Ejemplos:
// Para acceder al titulo, la primer seleccion por ejemplo no podemos usar ya que h1, osea el titulo no tiene ningun id
// El segundo tampoco nos sirve ya que nos devuelve una lista, y es para clases.

const titulos = document.getElementsByTagName("h1") // coleccion de elementos

// Cpturamnos los elementos del DOM
const titulos2 = document.querySelector("h1") // Imprimo solo la etiqueta que ponga aqui
const subtitulo = document.querySelector(".subtitulo") //Al ser una clase y usar el query selector, tengo que poner un .NombreDeLaClase

const dato = document.getElementById("#Dato")
const dato2 = document.getElementById("Dato")

// Modificamos el valkor de un elemento HTML usando textContent / innerText /InnerHTML
titulos.textContent = "Aprendiendo a modificar el valor de un elemento HTML"
// Cambiar el titulo de la pagina mediante aqui, java
titulos.innerHTML = "Hola mundo"
titulos.innertext = "<h2>Hola mundo"// La diferencia es que DENTRO de h1, creo una etiqueta h2 y a esa h2 le doy el tecto 




subtitulo.style.fontWeight = "bold" //si despues del style pongo un punto mas, a continuacion tendre acceso a todas las propiedades de CSS
subtitulo.style.color = "red"
subtitulo.style.backgroundColor = "blue"
document.body.style.backgroundColor = "lightgray" //De esta manera, aplicandole este estilo al documento, se lo estoy aplocando a todo el BODY basicamente
//font-weight en CSS
//fontWeight en java. La diferencia est en que se saca el guion y se pone la primer letra de la segunda palabra en Mayuscula

// si queremos agregar estilos que tenemos en un archivo.css..
//NombreDeEtiquetaOClase.TipoDeEtiquetalista.meotodAElegir
dato.classlist.add("js")

//Si queremos remover una propiedad..
dato.classlist.remove("dato")

// Si ya tiene la clase mencionada, la va a sacar, y si no tienen la clase mencionada entre parentesis, la AGREGARA. Depende su estado
dato.classList.toggle("dato")

// Supongamos que queremos cambiar la imagen. Tipo hacer una galeria
img.setAttribute(
    "src", 
    "https://th.bing.com/th/id/R.3463db5c926734878e8485307cd97f30?rik=Upems716fCOWBg&pid=ImgRaw&r=0"
)

// Setearemos un nuevo atributo. Con el get obtendremos el valor que tiene
const alt = img.getAttribute("alt")

// Y aqui le damos el nuevo atributo
if (alt == "futbol"){
    img.setAttribute("alt", "Pelota")
}

// Por ejemplo si tenemos una lista en donde cada imagen tiene su propio ID, lo podremos cambiar
img.setAtributte("data-id", "1")

console.log(alt)
console.log(titulos)
