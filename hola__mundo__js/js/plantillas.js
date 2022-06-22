'use strict'

// Plantillas de texto

var nombre = prompt("METE TU NOMBRE");
var apellido = prompt("METE TUS APELLIDOS");


// var texto = "Mi nombre es "+ nombre + " Mi apellido es "+apellido;

var texto = `

 Mi nombre es: ${nombre}<br>
 Mi apellido es : ${apellido}


`

document.write(texto);