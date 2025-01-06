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


// NUEVOS ELEMENTOS
//PUSH -> agrega uno o mas elemento al final del arreglo o array

let agregar = [1, 2, 3];
agregar.push(4); // agrega el numero 4 al final del arreglo

console.log(agregar);

let a = ["uno", "dos", "tres"];
a.push("cuatro", "cinco");

// unshift -> agrega uno o mas elementos al inicio del arreglo
let add = [1, 2, 3];
add.unshift(0); // agrega el numero 0 al inicio del arreglo
console.log(add);

//splice -> agrega o elimina elementos de cualquier parte dentro del arreglo
// es universal, puede agregar o eliminar elementos
let z = [1, 2, 3];
z.splice(1, 0, 4); // agrega el numero 4 en la posicion 1 sin eliminar los elementos dentro del mismo
console.log(z);


//MODIFICAR ELEMENTOS DENTRO DE UN ARRAY

//Se pueden modificar los elementos de un array a traves de su indice y asignando un nuevo valor
let modificar = [1, 2, 3];
modificar[1] = 10; // cambia el valor de la posicion 1 por el numero 10
console.log(modificar);

//si deseamos modificar el arreglo en forma inmutable, se puede ocupar el metodo map
//para crer un nuevo arreglo con los valores modificados
let modificarMap = [1, 2, 3];
let nuevoArray = modificarMap.map((elemento, i) => i == 2 ? 5 : elemento);
console.log(nuevoArray);

//ELIMINAR ELEMENTOS DE UN ARRAY

//pop -> elimina el ultimo elemento del arreglo
let eliminar = [1, 2, 3, 4, 5];
eliminar.pop(); // elimina el ultimo elemento del arreglo
console.log(eliminar);

//shift -> elimina el primer elemento del arreglo
let eliminarShift = [1, 2, 3, 4, 5];
eliminarShift.shift(); // elimina el primer elemento del arreglo    
console.log(eliminarShift);

//splice -> agrega o elimina elementos de cualquier parte dentro del arreglo
let eliminarSplice = [1, 2, 3, 4, 5];
eliminarSplice.splice(1, 1); // elimina el elemento en la posicion 1
console.log(eliminarSplice);