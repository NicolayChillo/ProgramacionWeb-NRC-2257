//DATOS ESTUDIANTES
const estudiantes = [
    {nombre: "Juan", calificaciones: [12,17,20,19]},
    {nombre: "Maria", calificaciones: [15,18,19,20]},
    {nombre: "Pedro", calificaciones: [9,11,20,17]},
];

const nuevasCalificaciones = [20,12, 16];

//agregar nuevas calificaciones
for (let i = 0; i < estudiantes.length; i++) {
    let calificaciones = estudiantes[i].calificaciones;
    let longitud = calificaciones.length; // Obtener la longitud actual del arreglo
    calificaciones[longitud] = nuevasCalificaciones[i]; // Asignar la nueva calificación al final
}

//calcular promedio y clasificacion
for(let i =0; i < estudiantes.length; i++){
    let suma = 0;
    for(let j = 0; j < estudiantes[i].calificaciones.length; j++){
        suma += estudiantes[i].calificaciones[j];
    }
    estudiantes[i].promedio = suma / estudiantes[i].calificaciones.length; //calcular promedio

    //clasificar
    if (estudiantes[i].promedio >= 16){
        estudiantes[i].clasificacion = "Excelente";
    }
    else if (estudiantes[i].promedio >= 12 && estudiantes[i].promedio < 16){
        estudiantes[i].clasificacion = "Bueno";
    }
    else if (estudiantes[i].promedio >= 8 && estudiantes[i].promedio < 12){
        estudiantes[i].clasificacion = "Aprobado";
    }
    else if (estudiantes[i].promedio < 8){
        estudiantes[i].clasificacion = "Reprobado";
    }
}

//calcular maxima y minima calificacion del estudiante
for(let i = 0; i < estudiantes.length; i++){
    const calificaciones = estudiantes[i].calificaciones;

    //caclulo maximo y minimo
    let maximo = estudiantes[i].calificaciones.reduce((acumulador, num) => num > acumulador ? num : acumulador, estudiantes[i].calificaciones[0]);
    let minimo = estudiantes[i].calificaciones.reduce((acumulador, num) => num < acumulador ? num : acumulador, estudiantes[i].calificaciones[0]);

    estudiantes[i].maximaCalificacion = maximo;
    estudiantes[i].minimaCalificacion = minimo;
}

console.log(estudiantes);

let promedioMasAlto = estudiantes[0].promedio;
let promedioMasBajo = estudiantes[0].promedio;

for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > promedioMasAlto) {
        promedioMasAlto = estudiantes[i].promedio;
    }
    if (estudiantes[i].promedio < promedioMasBajo) {
        promedioMasBajo = estudiantes[i].promedio;
    }
}

console.log("El promedio más alto es: " + promedioMasAlto);
console.log("El promedio más bajo es: " + promedioMasBajo);
