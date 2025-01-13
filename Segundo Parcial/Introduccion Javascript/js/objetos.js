import persona from 'persona';
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

// function PersonaFu(nombre, edad, correo){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.correo = correo;
//     this.saludar = function(){
//         console.log(`Hola desde funciones constructores, me llamo ${this.nombre}`);
//     }
// }
// const persona7 = new Persona('Luis', 25, 'luis@gmail.com');
// persona7.saludar();

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


//METODOS GET EN OBJETOS JS
//mejores practicas para acceder y modificar objetos 
//se puede acceder a los valores de las propiedades

let personaGet = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    get nombreCompleto(){ // no es una propiedad, es un metodo get
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

//METODO SET EN OBJETOS JS
//Establece o modifica los valores de los atributos de los objetos

//modificacion

let personaSet = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan@gmail.com',
    edad: 25,
    idioma: 'español',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaSet.lang);

//SET
let personaSet2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan@gmail.com',
    edad: 25,
    idioma: 'español',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaSet2.lang);

personaSet2.lang = 'ingles';

console.log(personaSet2.lang);

//CONSTRUCTORES EN JS
//Si s edesea crar mas objetos del mismo tipo, no es posible
//por esta razon se crean constructores 

//Es una funcion especial que permite trabajar con objetos en JS

//funcion constructor de tipo persona
function PersonaConstructora(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;   
}

let padre = new PersonaConstructora('Carlos', 'Sanchez ', 'carlos@gmail.com'); 
// no es variable, es un metodo que me permite crear un objeto de tipo persona
console.log(padre);

padre.telefono = '0987654321';

console.log(padre);

let madre = new PersonaConstructora('Maria', 'Perez', 'maria@gmail.com');
console.log(madre);

//Agregar metodos a una funcion constructor de objetos

function PersonaConsMet(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;   
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre2 = new PersonaConsMet('Carlos', 'Sanchez ', 'carlos@gmail.com');

console.log(padre2.nombreCompleto());

let madre2 = new PersonaConsMet('Maria', 'Perez', 'maria@gmail.com');
console.log(madre2.nombreCompleto());

//Uso de prototype en JS
//Permite agregar metodos a un objeto constructor

PersonaConsMet.prototype.tel = '0987654321';
console.log(padre2.tel);

// Metodo call
let personaC1 = {
    nombre: 'Mateo',
    apellido: 'Galarza',
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let personaC2 = {
    nombre: 'Isabel',
    apellido: 'Carpio'
}

// para usar el metodo nombreCompleto de personaC1 en personaC2
//con los datos de personaC2, usamos el metodo call
console.log(personaC1.nombreCompleto());
console.log(personaC1.nombreCompleto.call(personaC2));

//Si quieremos pasar parametros a la funcion
let personaCP1 = {
    nombre: 'Mateo',
    apellido: 'Galarza',
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let personaCP2 = {
    nombre: 'Isabel',
    apellido: 'Carpio'
}

console.log(personaCP1.nombreCompleto('Lic.', '0987654321'));
console.log(personaCP1.nombreCompleto.call(personaCP2, 'Lic.', '0987654321'));