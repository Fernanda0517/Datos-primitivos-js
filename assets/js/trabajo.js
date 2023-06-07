// IndexOf
const nombre = "Fernanda";
const letra = "a";
const indice = nombre.indexOf(letra);
console.log(indice);

//LastIndexOf
const nombre1 = "Fernanda Rodriguez";
const letra1 = "e";
const indice1 = nombre1.lastIndexOf(letra1);
console.log(indice1); 

//funcion que devuelva un string con el primer caracter en mayuscula del string ingresado por el parametro
//escriba la funcion buscarSpamque devuelva verdadero si el string que se ingresa como parametro contiene la palabra viagra o xxx en cualquien convinacion entre mayusculas y minusculas
//convertir moneda a entero crear funcion

function buscarSpam(cadena) {
  let palabrasClave = ["viagra", "xxx"];

  for (let i = 0; i < palabrasClave.length; i++) {
    let palabra = palabrasClave[i];
    if (cadena.toLowerCase().indexOf(palabra.toLowerCase()) !== -1) {
      return true;
    }
  }

  return false;
}

let texto = prompt("Ingresa un mensaje:");
let mensaje = buscarSpam(texto) ? "El mensaje contiene spam" : "El mensaje no contiene spam";
alert(mensaje);