// Ciclos

// FOR

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman', 'Flash'];

console.log('**** for tradicional****');
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.log('**** for in****');
for(let i in heroes){
    console.log(heroes[i]);
}

//Itera  los valores directamente de un iterable (array, cadenas, etc)
console.log('**** for of****');
for(let heroe of heroes){
    console.log(heroe);
}

//se usa for tradicional cuando se encesite el control todal del indice
//se usa for in para iterar propiedades de un objeto
//se usa for of para iterar valores de un objeto iterable (Array, cadenas de texto,string, map, set, etc)

for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
        //continue; //ir a la siguiente iteracion
         break; //termina el ciclo o sale del bucle 
    }
    console.log(contador);
}

//WHILE
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < carros.length){
//     console.log(carros[i]);
//     i++;
// }

console.warn('Usando continue');
while (carros[i]){
    if (i == 1){
        i++;
       // continue;
       break;
    }
    console.log(carros[i]);
    i++;
}