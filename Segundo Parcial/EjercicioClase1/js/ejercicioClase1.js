//DATOS ESTUDIANTES
const estudiantes = [
    {nombre: "Juan", calificaciones: [12,17,20]},
    {nombre: "Maria", calificaciones: [15,18,19]},
    {nombre: "Pedro", calificaciones: [9,11,20]},
    {nombre: "Ana", calificaciones: [4,17,19]},
    {nombre: "Luis", calificaciones: [10,15,20]},
    {nombre: "Laura", calificaciones: [3,12,2]},
    {nombre: "Pablo", calificaciones: [15,18,20]},
    {nombre: "Carmen", calificaciones: [8,13,19]},
    {nombre: "Carlos", calificaciones: [20,15,20]},
    {nombre: "Sofia", calificaciones: [12,15,19]}
];

//FUNCION AGREGAR NUEVAS CALIFICACIONES
function agregarCalificaciones(estudiantes, nuevaCalificaciones){
    for(let i = 0; i < estudiantes.length; i++){
        estudiantes[i].calificaciones.push(nuevaCalificaciones[i]);
    }
}

//FUNCION CALCULAR PROMEDIO
function calcularPromedioEstudiante(estudiantes){
    for(let i =0; i < estudiantes.length; i++){
        let suma = 0;
        for(let j = 0; j < estudiantes[i].calificaciones.length; j++){
            suma += estudiantes[i].calificaciones[j];
        }
        estudiantes[i].promedio = suma / estudiantes[i].calificaciones.length;
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
}

//FUNCION DETERMINAR MAXIMO Y MINIMO DE CALIFACION DE CADA ESTUDIANTE
function maxMinCalificaciones(estudiantes){
    for(let i = 0; i < estudiantes.length; i++){
        const calificaciones = estudiantes[i].calificaciones;

        //caclulo maximo y minimo
        let maximo = calificaciones.reduce((acumulador, num) => Math.max(acumulador, num), calificaciones[0]);
        let minimo = calificaciones.reduce((acumulador, num) => Math.min(acumulador, num), calificaciones[0]);

        estudiantes[i].maximaCalificacion = maximo;
        estudiantes[i].minimaCalificacion = minimo;
    }
}


//FUNCION PARA ENCONTRAR EL PEOR Y MEJOR PROMEDIO
function peroMejorPromedio(estudiantes){
    for(let i = 0; i < estudiantes.length; i++){
        const promedios = estudiantes[i].promedio;

        let mejorPromedio = promedios.reduce((acumulador, num) => Math.max(acumulador, num), promedios[0]);
        let peorPromedio = promedios.reduce((acumulador, num) => Math.min(acumulador, num), promedios[0]);
    }
    
}

//PROGRAMA
console.log("CALIFICACIONES ACTUALES");
console.log(estudiantes);

console.log("AGREGAR NUEVAS CALIFICACIONES");
const nuevasCalificaciones1 = [20,12, 16, 19, 13, 20, 16, 19, 18, 20];
agregarCalificaciones(estudiantes, nuevasCalificaciones1);

const nuevasCalificaciones2 = [18,11, 15, 17, 16, 18, 13, 17, 18, 20];
agregarCalificaciones(estudiantes, nuevasCalificaciones2);

console.log("CALIFICACIONES NUEVAS");

console.log("CALCULO PROMEDIO");
calcularPromedioEstudiante(estudiantes);

console.log("CALCULO MAXIMO Y MINIMO");
maxMinCalificaciones(estudiantes);
console.log(estudiantes);