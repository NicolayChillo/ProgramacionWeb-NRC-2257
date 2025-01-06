///////////////////////////////////////////////////////////////////////////////
//                               Funciones    
///////////////////////////////////////////////////////////////////////////////

//Funciones declaradas

function miFuncion(a,b){
    console.log("La suma es: " + (a + b));
}
miFuncion(2,3);


//return -> retorna un valor de la funcion

function miFuncion2(a,b){
    return a + b;
}
let resultado = miFuncion2(2,3);
console.log(resultado);




//Funciones de tipo expresion
//Declaracion de funcion de tipo expresion

let sumar = function(a,b){ return a + b; }
resultado = sumar(1,2);
console.log(resultado);

//Funciones de tipo self-invoking
//Son funciones que se llaman a si mismas
//Se utilizan para proteger el ambito de las variables
//Funciones anonimas
//Se pueden utilizar cuando se carga un programa, solo se puede llamar una vez

(function(a,b){
    console.log("Ejecutando la funcion: " + (a + b)); }
) (3,4);

function total(x,y){
    console.log(arguments.length);

    return x + y;
}

total(1,2);


//FUNCIONES TIPO FLECHA o ARROW FUNCTIONS

const multiplicar = (x, y) => x * y;
console.log(multiplicar(3,4));

const cuadrado = x => x * x;
console.log(cuadrado(3));

//Funcion anonima
//Es una funcion sin nombre que se puede almacenar en una variable para ser llamada en cualquier momento
//Se puede utilizar en cualquier lugar donde se requiera una expresion
//Se puede utilizar en eventos, callbacks, etc

setTimeout(function(){
    console.log("Funcion anonima");
}, 1000);


const operaciones = { sumar: (a,b) => a +b};

console.log(operaciones.sumar?.(3,4));
console.log(operaciones.resta?.(5,4));


///////////////////////////////////////////////////////////////////////////////
//                       EJERCICIO FUNCIONES
///////////////////////////////////////////////////////////////////////////////

//Crear una funcion declarada llamada calcularPromedio que reciba 3 numeros como parametros y devuelva el promedio de los mismos

function calcularPromedio(a,b,c){
    return (a + b + c) / 3;
}
//console.log(calcularPromedio(3,4,5));

// Declara una funion expresada llamada determinarMayor que reciba 2 numeros como parametros y devuelva el mayor de los dos

let numMayor = function determinarMayor(a,b){ return (a > b) ? a : b;}
//console.log(numMayor(3,4));

//Crear una fucnnion flecha llamada esPar que reciba un numero y retorne truo si es el numero par y false si es impar

const esPar = (num) => (num % 2 == 0) ? true : false;
//console.log(esPar(82));
//console.log(esPar(79));

/* Escribe una funcion anonima autoejecutable que:

llame a las funciones anteriores (calcularPromedio, determinarMayor, esPar). Use valores de ejemplo y muestre los resultados en la consola

Reto: Agregar validaciones para asegurar que los parametros sean numeros antes de realizar las operaciones

Si algun parametro no es numero, lanza un error con un mensaje descriptivo.
*/

const funcionesAnteriores = function(num1, num2, num3){
   
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
        console.log("El parametro no es un numero");
    } 
    else{

    let resultadoPromedio = calcularPromedio(num1, num2, num3);
    console.log("El promedio es: " + resultadoPromedio);

    resultadoMayor = numMayor(num1, num2);
    console.log("El numero mayor es: " + resultadoMayor);

    let resultadoPar1 = esPar(num1);
    console.log("El numero " + num1 + " es par? " + resultadoPar1);

    let resultadoPar2 = esPar(num2);
    console.log("El numero " + num2 + " es par? " + resultadoPar2);

    let resultadoPar3 = esPar(num3);
    console.log("El numero " + num3 + " es par? " + resultadoPar3);
    }
}


funcionesAnteriores(14,20,17);

