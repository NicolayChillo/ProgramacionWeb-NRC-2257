/* ****************************************************************
                                AREGLOS
   **************************************************************** 
*/ 

// formas de declarar un arreglo

const array = [1,2,3,4,5]; //forma mas comun
const array1 = new Array(1,2,3,4,5); //forma menos comun
const array2 = Array.of(1,2,3,4,5); //forma menos comun

let numeros = [1,2,3,4,5]; // tipo numerico
let colores = ['rojo', 'verde', 'azul']; // tipo string
let vacio = []; // arreglo vacio
let conjunto = [{nombre: 'Juan', edad: 25}, {nombre: 'Maria', edad: 30}]; // arreglo de objetos

let videojuegos = [
    "Super Mario Bros",
    "Zelda",
    "Metroid",
    "Final Fantasy"]

    console.log(videojuegos[2]);

let arreglosCosas = [
    true,
    123,
    "hola",
    1 *3,
    function(){},
    () => {},
    {a: 1},
    ["hola", "mundo"]
];

console.log(arreglosCosas);
console.log(arreglosCosas[4]);
    
// map, filter y el reduce

// son metodos funcionales que se pueden usar para recorrer un arreglo y ademas trasnformar los datos de un arreglo

let numerosMap = [1,2,3,4,5,6,7,8,9,10];
let cuadrados = numerosMap.map(num => num * num);
console.log(cuadrados);

//filter
let numerosFilter = [1,2,3,4,5,6,7,8,9,10];
let pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);

//reduce
let numerosReduce = [1,2,3,4,5,20,6,7,8,9,10];
let maximo = numerosReduce.reduce((acumulador, num) => num > acumulador ? num : acumulador, numerosReduce[0]);
console.log(maximo);

//VENTAJAS

//Son ideales para trabajar con transformaciones complejas 
//Permiten un estilo de programacion mas funcional, mas limio y facil de leer
