//Clase inventario
class Inventario {
    constructor(nombre, precio, cantidad, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;   
    this.categoria = categoria;
    }
    
}

//Clase Ventas
class Ventas{
    constructor(nombre,cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

//Clase Date que hereda de Ventas
class Date extends Ventas{
    constructor(fecha, hora){
        this.fecha = fecha;
        this.hora = hora;
    }

    //Metodo para imprimir ventar realizadas con fecha y hora
    imprimirVentasRealizadas(ventaRealizada){
        for(let key in ventaRealizada){
            console.log("Venta realizada: " + ventaRealizada[key].nombre + " Cantidad: " + ventaRealizada[key].cantidad + " Fecha: " + ventaRealizada[key].fecha + " Hora: " + ventaRealizada[key].hora);
        }
    }
}

//Metodo para aplicar descuento a productos de una categoria
function aplicarDescuento(categoria, porcentaje){
    for (let key in inventario){
        if(inventario[key].categoria == categoria){
            inventario[key].precio = inventario[key].precio - (inventario[key].precio * (porcentaje / 100));
        }
    }
}
//Metodo para ordenar por precio de manera Ascendente
function ordenarPorPrecioAscendente(inventario){
    inventario.sort((a, b) => a.precio - b.precio);
    console.log(inventario); 
}

//Metodo para ordenar por precio de manera Descendente
function ordenarPorPrecioDescendente(inventario){
    inventario.sort((a,b) => b.precio - a.precio);
    console.log(inventario);
}

//Metodos para filtrar productos por categorias
function filtrarPorCategorias(inventario, categoria){
    let filtrado = inventario.filter(producto => producto.categoria == categoria);
    console.log(filtrado);
}

//Metodo para realizar una venta
function realizarVenta(inventario, venta){
    let ventaRealizada = new Array();
    for(let key in inventario){
        if(inventario[key].nombre == venta.nombre && inventario[key].cantidad >= venta.cantidad){
            console.log("Venta realizada");
            inventario[key].cantidad = inventario[key].cantidad - venta.cantidad;
            ventaRealizada.push(venta);
            console.log(ventaRealizada);
            break;
        }else{
            if(inventario[key].nombre != venta.nombre){
                console.log("Producto inexistente");
                break;
            }if(inventario[key].cantidad < venta.cantidad){
                console.log("Cantidad insuficiente");
                break;
            }
        }
    }
}

//Agragar nuevos productos de tipo Inventario
let producto1 = new Inventario("Papas", 3, 100, "Verduras");
let producto2 = new Inventario("Manzanas", 0.5, 50, "Frutas");
let producto3 = new Inventario("Lechuga", 5, 0.75, "Verduras");
let producto4 = new Inventario("Pera", 15, 1, "Frutas");
let producto5 = new Inventario("Tomate", 10, 1, "Verduras");
let producto6 = new Inventario("Naranja", 20, 1, "Frutas");
let producto7 = new Inventario("Pepino", 5, 1, "Verduras");
let producto8 = new Inventario("Mango", 25, 1, "Frutas");

let inventario = new Array();//Arreglo de inventario

//Agregar productos a mi arreglo inventario
inventario.push(producto1);
inventario.push(producto2);
inventario.push(producto3);
inventario.push(producto4);

//Ventas realizadas
let venta1 = new Ventas("Papas", 10, "10/10/2021", "10:00");
let venta2 = new Ventas("Mandarina", 5, "10/10/2021", "13:42");



console.log("*****REPORTE*****");
aplicarDescuento("Frutas", 10);
console.log("Inventario con un descuento del 10% en frutas");
console.log(inventario);
console.log("Ventas realizadas con venta y ora");
ventasConFecha = new Date();
ventasConFecha.imprimirVentasRealizadas(venta1);
ventasConFecha.imprimirVentasRealizadas(venta2);



