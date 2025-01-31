//Las apis en JS son funciones que se pueden reutilizar en cualquier parte de nuestro código
//Se usan para obtener y obtener datos a un servidor de datos 

//EJEMPLO BASICO fetch

//A traves del metodo get
// fetch("https://jsonplaceholder.typicode.com/users") //url de la api 
//     .then(response => response.json()) //convierte  la respuesta en un objeto json
//     .then(data => console.log(data)) //imprime los datos en consola
//     .catch(console.error("Error")) //en caso de error;
    

//Con post
// fetch('https://jsonplaceholder.typicode.com/users',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Nuevo Post',
//         body: 'Contenido del Post',
//         userID: 2
//     })
// })
// .then(response => response.json()) //convierte  la respuesta en un objeto json
// .then(data => console.log(data)) //imprime los datos en consola
// .catch(error => console.error("Error", error)) //en caso de error;

//Con async await
async function ObtenerDatos(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); //Esperando una respuesta del servidor
        const data = await response.json(); //Convertir la respuesta en formato json
        console.log(data);
    }catch(error){
        console.error("Error", error);
    }
}
ObtenerDatos();

//Cuando utilizamos fetch api
// Se puede utilizar para obtener datos de un servidor
// Se puede utilizar para enviar datos a un servidor
// Se puede utilizar para actualizar datos en un servidor
// Se puede utilizar para eliminar datos en un servidor
// Se puede utilizar para realizar operaciones CRUD en un servidor
// Se puede utilizar para realizar operaciones de autenticación en un servidor

//1. Cunado necesitamos hacer algun tpo de peticiones a traves de HTTP
//2. 
//3. Un usoo moderno del consumo de informacion de manera asincrona 

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json())
    .then(users => {
        const lista = document.getElementById('usuarios');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Error", error));

    