/*
Hacer un programa que indique todos los numeros que hay entre dos numeros  introducidos
*/

var numero1 = prompt("Introduce el primer numero", 0);
var numero2 = prompt("Introduce el segundo numero", 0);

document.write("<h1>"+numero1+" al "+numero2+"</h1>");

for( var i = numero1; i <= numero2; i++){
    document.write(i+"<br>")
}

