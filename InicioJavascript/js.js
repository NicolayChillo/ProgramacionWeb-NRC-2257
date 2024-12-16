console.log("Hola mundo")
altura= 15;
var nombres;
nombres:"Erick Obando"
console.log("Ejemlos")
console.log("Tu altura es "+altura)

var nombre= "JUAN"
console.log(nombre);
var edad =20;
console.log(edad)

var objeto = {
    nombre:"Juan",
    edad:20
    }

console.log(objeto.nombre)

var var1= "Juan";
var var2 = false;
var var3 = (1,2,3,4);
var var4 = 

console.log(var1);
console.log(typeof(var1));

console.log(var2);
console.log(typeof(var2));

console.log(var3);
console.log(typeof(var3));

console.log(var4);
console.log(typeof(var4));

var badera = true;
console.log(typeof bandera);

function func(){};
console.log(var4);
console.log(typeof var4);

// var simbolo = simbolo();

class Persona {
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

var variable;
console.log(variable);
console.log(typeof variable);

// var x;
// console.log(x);
// console.log(typeof x);

var variable = null;
console.log(variable);
console.log(typeof variable);

//dato arreglos

var autos = ["BMW","Mercedes", "Chevrolet"];
console.log(autos);
console.log(typeof autos);


var variable = "";
console.log(variable);
console.log(typeof variable);

//reglas

let nombreCompleto;

//formas correctas de declarar una variable
// var a1nombreCompleto;
// var _nombreCompleto;
// var $nombreCompleto;
//formas incorrectas de declarar una varibale


//Operadores

// var x = 10;
// var y = 5;
// let z = x +y;
// console.log(z);


// var x = 10;
// var y = 5;
// let z = x - y;
// console.log(z);

// var x = 10;
// var y = 5;
// let z = x * y;
// console.log(z);

// var x = 10;
// var y = 5;
// let z = x / y;
// console.log(z);

// let a = 10;
// let x = 4;
// x = ++a;
// console.log(a);
// console.log(x);

// let b = 10;
// let z = 4;
// x = ++a;
// console.log(a);
// console.log(x);

// let a = 10;
// let x = 4;
// x = --a;
// console.log(a);
// console.log(x);

var l = 10;
var f = 5;
var x = l == f;
var d = l !=  f;
var e = l > f;
var f = l < f;
var g = l >= f;
var h = l <= f;

let comparacion1 = 30;
let comparacion2 = "30";

var comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

var comparacion4 = comparacion1 === comparacion2;
console.log(comparacion4);

console.log(x);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// let a = 6, b = 7, c = 8;
// let dato = (a + b) *c;
// console.log(dato);

// let a2 = 6, b2 = 7, c2 =8, d2 = 5;
// let dato2 = a2 * (b2 +c2);
// console.log(dato2);

// let dato3 = a2 * b2 + c2 / d2;
// console.log(dato3);

let a = 3;
let b = 5;

a +=3;
console.log(a);

b -=2;
console.log(b);

let numero = 10;
if (numero % 2 == 0 ){
    console.log("El numero es par");
} else{
    console.log("El numero es impar");
}

//Identificar si una persona es mayor de edad;

let edadPersona = 18;

if(edadPersona >= 18 ){
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona no es mayor de edad");
}

//Operdadores and

//operador and ==> &&
let s = 120;

let valMin = 10; valMax = 100;

if(s >= valMin && s <= valMax){
    console.log("El valor esta dentro del rango");
} else{
    console.log("El valor no esta dentro del rango");
}

//operador or ==> ||

if(s >= valMin || s <= valMax){
    console.log("El valor esta dentro del rango");
} else{
    console.log("El valor no esta dentro del rango");
}

//operador ternario
let resultado = (s >= valMin && s <= valMax) ? "El valor esta dentro del rango":"El valor esta fuera del rango";
console.log(resultado);

let minumero = "10";

console.log(typeof minumero);

let edad1 = parseInt(minumero);
let edad2 = Number(minumero);

if(edad2 >= 10){
    console.log("Puede volar");
} else{
    console.log("No púede volar");
}

//

console.log(parseInt("42px")); //convierte la cadena en numero entero
console.log(parseInt(3.1416)); //extrae solo la parte entera
console.log(parseInt("abc")); //no hay numeros en la cadena

console.log(Number("42px")); //no se puede convertir toda la cadena
console.log(Number(3.1416)); // combierte el numero en flotante
console.log(Number("abc")); //no hay numeros en la cadena

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));