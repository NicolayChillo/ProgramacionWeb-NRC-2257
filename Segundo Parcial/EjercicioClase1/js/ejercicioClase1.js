//DATOS ESTUDIANTES
const estudiantes = [
    {nombre: "Juan", calificaciones: [12,17,20,19]},
    {nombre: "Maria", calificaciones: [15,18,19,20]},
    {nombre: "Pedro", calificaciones: [9,11,20,17]},
    {nombre: "Ana", calificaciones: [4,17,19,15]},
    {nombre: "Luis", calificaciones: [10,15,20,8]},
    {nombre: "Laura", calificaciones: [3,12,2,4]},
    {nombre: "Pablo", calificaciones: [15,18,20,18]},
    {nombre: "Carmen", calificaciones: [8,13,19,19]},
    {nombre: "Carlos", calificaciones: [20,15,20,16]},
    {nombre: "Sofia", calificaciones: [12,15,19,14]}
];

const nuevasCalificaciones = [20,12, 16, 19, 13, 5, 16, 19, 18, 20];

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

//Claculo e Imprimir promedio más alto y más bajo
for(let i = 0; i < estudiantes.length; i++){
    const promedios = estudiantes[i].promedio;
    
    if(promedios.length > 0){
        let promedioMejor = promedios.reduce((acumulador, num) => num > acumulador ? num : acumulador, promedios[0]);
        let promedioPeor = promedios.reduce((acumulador, num) => num < acumulador ? num : acumulador, promedios[0]);
        console.log("El promedio más alto es: " + promedioMejor);
        console.log("El promedio más bajo es: " + promedioPeor);
    }
}
