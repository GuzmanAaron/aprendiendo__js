// Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales.
// Si los  números no son un número o son menores o iguales a cerp, nos los vuelva a pedir.
var num1= parseInt(prompt("Introduce el primer número", 0));
var num2= parseInt(prompt("Introduce el segundo número", 0));
while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
     num1= parseInt(prompt("Introduce el primer número", 0));
     num2= parseInt(prompt("Introduce el segundo número", 0));
}


if(num1 == num2){
    alert("Son números iguales");
}
else if(num1>num2){
    alert("El primer número es mayor "+num1);
    alert("El segundo número es menor "+num2);
}
else if(num1<num2){
    alert("El primer número es menor "+num1);
    alert("El segundo número es mayor "+num2);
}else{
    alert("Ingresa un número correcto")
}


