/*
Utilizar un bucle, mostrar la suma y la media de los  numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultasdo.
*/


var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce un número", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){

        suma = suma + numero;

        contador++;

    }
    console.log("La suma "+suma);
    console.log("El contador "+ contador);

}while(numero >= 0)
alert("La suma de todo los numero es " + suma)
alert("La media es " + (suma/contador))
    


/*
Utilizar un bucle, mostrar la suma y la media de los  numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultasdo.
*/










