function saludo(nombre) {
    console.log(`Hola, ${nombre}!`);
}

function procesarUsuario(usuario, callback) {
    console.log("Procesando usuario...");
    callback(usuario);
}

// Usamos la función saludo como callback
procesarUsuario("Juan", saludo);