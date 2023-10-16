//* Switch: Busca una coincidencia con el parametro que le pasaremos para verificar que porcion de codigo se ejecutara
//* Crearemos un programa que segun la CATEGORIA que le pasemos al buscador, nos devolvera cuales son los articulos que tenemos

const categoria = "ropa"

switch(categoria){     
    case 'ropa':
        console.log("Medias. remeras, shorts");
        break //el break es para que en caso de que surga la coincidencia con el cas, el swict se rompa y el codigo siga para adelante
    case 'deportes':
        console.log("Pelotas, raquetas, palos de golf");
        break
    case 'deportes':
        console.log("Zapatillas, botines");
        break
    case 'deportes':
        console.log("Ctaegoria no encontrada");
        break        


}

const test = ''

//* Comparar un mismo caso con Swict y con un If else para ver la diferencia

if(test>0){
    console.log("Numero mayor a 0");
} else{
    console.log("Numero igual o menor a 0")
}
//! SWITCH NO EVALUA EXPRESIONES DEL TIPO BOOLEANAS
switch (test){
    case (test > 0):
        console.log("Numero mayor a 0");
        break
    case (test <= 0) :
        console.log("Numnero menor o igual a 0");
        break
    default:
        console.log("No hay respuesta")        
}

// Se utilizara swict para comparar si el valor de una variable es IGUAL a lo que los casos. Osea que no podemos hacer comparaciones si es diferente, mayor o igual como en el if

//Cajero: Segun la expresion dada, evaluaremos cual sera el codigo a ejecutarse

const cajero = 3

switch(cajero) {
    case 1:
        console.log("Ingreso de dinero");
        break
    case 2:
        console.log("Retiro de dinero");
        break
    case 3:
        console.log("Consulta tu saldo");
        break
    case 4:
        console.log("Slsiendo del programa");
        break
    default:
        console.log("Opcion no valida");
        break        


}

if (cajero === 1) {
    console.log("Ingreso de dinero");
} else if (cajero == 2) {
     console.log("Retiro de dinero");
} else if (cajero === 3){
    console.log("Consulta tu saldo");
} else if (cajero === 4){
    console.log("Slsiendo del programa");
} else {
    console.log("Opcion no valida")
}

// Aqui pusimos lo mismo pero como seria en el caso del swict y lo mismo pero con forma de If e If else. Si nos fijamos, en el if usamos triple igual ya que tambien comparamos si el tipo de dato es igual

//* Bucles. Son estructuras que se repiten en un bloque de codigo mientras se evalua cierta condicion
//* Supongamos que tienenq ue adibinar mi edad en un programa

//? Usaremos un bucle while para repetir una estructura: Este bucle mantedra repitiendo la estructura de codigo indicando mienbtras que su condicion sea verdadera

const edad_profe = 36
const edad_arriesgada = 1 //Le doy un valor x para que se ejecute. Si abajo el while tiene que ser distinto de 36 para que la condicoo se ejecute, pongo un numero distinto a 36 y asi que se ejecute el while

while (edad_arriesgada !== 36) {
    const edad_arriesgada = parseInt(prompt("Adivine la edad del profe: "))

    if (edad_profe === edad_arriesgada) {
        alert("Acertaste!");
        break //poniendo un break aqui hago que una vez que el usuario acerto, el bucle se rompa y termine aqui
    } else {
        alert("No es la edad correcta! Arriesga de nueva");
    }
}