'use strict'

// arrays, arreglos, matrices
// Es una colecciones de datos que puede tener una variable, valores


var nombre = "Aaron";
var nombres = ["Victor", "Juan", "Peter", 23, true];

var lenguajes = new Array("PHP", "JS", "JAVA", "PHYTON");

// 
document.write("<h1>Lenguaje de progración 2022</h1>");
// document.write(lenguajes[0])

document.write("<ul>");


//  for( var i = 0; i < lenguajes.length; i++){
//     document.write("<li>"+lenguajes[i]+"</li>")
//  }


lenguajes.forEach((elemento, indix, array)=>
    document.write("<li>"+indix+" - "+elemento+"</li>")
);


 document.write("</ul>");
