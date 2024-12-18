// Sentencias de control

// sentencia if
// sentencia witch

let numero = 10;
if(numero == 1){
    console.log("El numero es 1");
}
else if (numero == 2){
    console.log("El numero es 2");
}
else {
    console.log("El numero no es 1 ni 2");
}

let mes = 5;
let estacion;

if (mes == 1 || mes == 2){
    estacion = "Invierno";
}
else if (mes == 3 || mes == 4){
    estacion = "Primavera";
}
else if (mes == 5 || mess == 6){
    estacion = "Verano";
}
else if (mes == 7 || mes == 8){
    estacion = "Otoño";
}
else if (mes > 8){
    estacion = "Mes incorrecto";
}
console.log(estacion);

//Ejercicio de hacer el calculo con la hora del dia

/*
6am - 11am = mañana, Buenos Dias
12pm - 18pm = tarde, Buenas Tardes
19pm - 23pm = noche, Buenas Noches
0am - 5am = madrugada, Durmiendo
*/

let horaDia = 20;
let mensaje;

if (horaDia >= 6 && horaDia <= 11){
    mensaje = "Mañana, Buenos Dias";
}
else if (horaDia >= 12 && horaDia <= 18){
    mensaje = "Tarde, Buenas Tardes";
}
else if (horaDia >= 19 && horaDia <= 23){
    mensaje = "Noche, Buenas Noches";
}
else if (horaDia >= 0 && horaDia <=  5){
    mensaje = "Madrugada, Durmiendo";
}
else {
    mensaje = "Hora incorrecta";
}
console.log(mensaje);

if (horaDia >= 6 && horaDia <= 11)
    mensaje = "Mañana, Buenos Dias";
else if (horaDia >= 12 && horaDia <= 18)
    mensaje = "Tarde, Buenas Tardes";
else if (horaDia >= 19 && horaDia <= 23)
    mensaje = "Noche, Buenas Noches";
else if (horaDia >= 0 && horaDia <=  5)
    mensaje = "Madrugada, Durmiendo";
else
    mensaje = "Hora incorrecta";
console.log(mensaje);

//Sentencia switch
let mesSwitch = 11;
let estacionSwitch = "Estacion Desconocida";

switch (mesSwitch){
    case 1:
    case 2:
    case 3:
        estacionSwitch = "Invierno";
        break;
    case 4:
    case 5:
    case 6:
        estacionSwitch = "Primavera";
        break;
    case 7:
    case 8:
    case 9:
        estacionSwitch = "Verano";
        break;
    case 10:
    case 11:
    case 12:
        estacionSwitch = "Otoño";
        break;
    default:
        estacionSwitch = "Mes incorrecto";
        break;
}
console.log(estacionSwitch);