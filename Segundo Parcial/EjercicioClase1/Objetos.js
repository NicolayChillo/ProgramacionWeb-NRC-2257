// Creamos la clase producto con sus atributos
class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

//Creamos el inventario inicial
const producto1 = new Producto('Pera', 0.50, 25);
const producto2 = new Producto('Manzana', 0.75, 30);
const producto3 = new Producto('Platano', 0.30, 20);
const producto4 = new Producto('Naranja', 0.60, 15);

const inventario = {producto1, producto2, producto3, producto4};

//Sellamos que no se pueda agreagar ni eliminar atributos
Object.seal(producto1);
Object.seal(producto2);
Object.seal(producto3);
Object.seal(producto4);

//Comprobamos que no se puede agregar un nuevo atributo
producto1.apellido = 'Perez';
console.log(producto1.apellido);

//Comprobamos que no se puede eliminar un atributo
delete producto1.nombre;
console.log(producto1.nombre);

//Funcion para vender un producto
function venderProducto(nombre, cantidad) {
    for (let key in inventario) {
        if (inventario[key].nombre == nombre) {
            if (inventario[key].cantidad >= cantidad) {
                inventario[key].cantidad -= cantidad;
                console.log(`Venta exitosa: ${cantidad} ${nombre}(s) vendidas.`);
                return;
            } else {
                console.log(`Error: No hay suficiente stock de ${nombre}.`);
                return;
            }
        }
    }
    console.log(`Error: El producto ${nombre} no existe en el inventario.`);
}

// Función para aplicar un descuento a todos los productos
function aplicarDescuento(porcentaje) {
    for (let key in inventario) {
        let nuevoPrecio = inventario[key].precio * (1 - porcentaje / 100);
        inventario[key].precio = Math.max(nuevoPrecio, 0); // Asegurarse de que el precio no sea negativo
    }
    console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}

// Ejemplos de uso
venderProducto('Manzana', 10);
venderProducto('Naranja', 20); // Venta con stock insuficiente
venderProducto('Uvas', 5); // Venta con producto que no esxiste

//aplicamos un descuento del 10% a los productos
aplicarDescuento(10);

// Mostrar el inventario final
console.log(inventario);
