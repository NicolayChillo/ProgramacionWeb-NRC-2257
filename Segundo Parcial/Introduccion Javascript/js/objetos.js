////////////////////////////////////////////////////////////////////////////////////////////////
//                                          OBJETOS
////////////////////////////////////////////////////////////////////////////////////////////////
//Caracteristicas de los objetos
/*
    Las claves son cadenas o símbolos (unicos)
    Los varlores pueden ser de cualquier tipo: numeros, cadenas, booleanos, objetos, funciones, etc. 
    Los objetos pueden modificarse en tiempos de ejecución (agregsar, modificar o eliminar propiedades)
    Los metodos son funciones asociadas a un objeto 
    

    PROPIEDADES Y ATRIBUTOS

*/  

//Estructura de un objeto
let persona1 = {
    nombre: 'Nicolay',
    apellido: 'Chillo',
    correo: 'nicolaychillo13@gmail.com',
    edad: 20
}

console.log(persona);

//Metodos en objetos
let persona2 = {
    nombre: 'Pedro',
    apellido: 'Garcia',
    correo: 'pedro@gmail.com',
    direccion: 'Quito',
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona2.nombreCompleto());

//Metodo para imprimir un mensaje ocupando una propiedad del objeto
const persona3 = {
    nombre: 'Maria',
    edad: 20,
    saludar: function(){
        console.log("Hola, me llamo ${this.nombre}");
    }
}
console.log(persona.saludar());


const persona4 = new Objeto(); 
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 30;
persona.saludar = function(){console.log('Hola, me llamo ${this.nombre}');}

console.log(persona4.apellido);
persona.saludar();

//Usando la clase Object.create
//Permite crear un objeto, basado en un prototipo
const prototipoPersona = {
    saludar: function(){
        console.log('Hola desde prototipo, soy ${this.nombre}');
    }
}

const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Martin';
//Uso del prototipo
persona4.saludar();

//Podemos crear un objeto con clases
//Proporciona una sintaxis mas estructurada para la creacion de objetos

class Persona{
    constructor(nombre, apellido, edad, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const persona6 = new Persona('Luis', 'Perez', 25, '0987654321');
persona6.saludar();

function Persona(nombre, edad, correo){
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.saludar = function(){
        console.log(`Hola desde funciones constructores, me llamo ${this.nombre}`);
    }
}
const persona7 = new Persona('Luis', 25, 'luis@gmail.com');
persona7.saludar();

//Interactuar y manipular con objetos
const add = {nombre: 'Juan'};
add.edad = 25; //agregando una nueva propiedad
add.apellido = 'Guano'; //agregar otra propiedad

add.nombre = 'Juanito'; //modificar una propiedad

//Eliminiacion de las propiedades de un objeto
delete add.edad;
console.log(add);

//iterar con las propiedades del objeto

for(nombewpropiedad in add){
    console.log(nombewpropiedad);
    console.log(add[nombewpropiedad]);
}

for(let clave in add){
    console.log(`${clave}: ${add[clave]}`);
}

console.log("nombre" in add); //verificar si existe una propiedad en un objeto
console.log("mascota" in add);
console.log(add.hasOwnProperty('nombre')); //verificar si existe una propiedad en un objeto

//Metodos utiles para trabajar con objetos

//1. Object.keys(objeto) - Devuelve un array con las claves del objeto
console.log(Object.keys(add));

//2. Object.values(objeto) - Devuelve un array con los valores del objeto
console.log(Object.values(add));

//3. Object.entries(objeto) - Devuelve un array con arrays, cada uno de los cuales contiene un par clave-valor
console.log(Object.entries(add));

//4. Object.assign(objeto1, objeto2) - Copia todas las propiedades de uno o mas objetos a un objeto destino
const copiaObjeto = Object.assign(add);
console.log(copiaObjeto);

//5. Object.freeze(objeto) - Congela un objeto: es decir, no se pueden agregar, modificar o eliminar propiedades

Object.freeze(add);
add.nombre = 'JuanitoNew'; //no se puede modificar

///6 Object.seal(objeto) - Sella un objeto: no se pueden agregar ni eliminar propiedades, pero si modificar las propiedades existentes
Object.seal(add);
add.nombre = 'JuanitoNew'; //se puede modificar

//Imprimir valores
let personaArray = Object.values(add);
console.log(personaArray);

//Convertir un objeto a un string
let personaString = JSON.stringify(add); //convertir un objeto a un string
console.log(personaString); //imprimir el string
