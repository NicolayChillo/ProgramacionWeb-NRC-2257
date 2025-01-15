// SISTEMA DE VENTAS EN JS
//Operacion de la clase productos

//Reducir stock de productos
//Descuento por categorias
//Crear una nueva propiedad categoria en la clase producto
//Los productos de la categoria electronicos de tener un descuento del 10% a calcular el total de su venta
//Implementar un metodo calcularImpuestos()
//Ordenar los productos por precio descendentemente
//Asegurar que los precios no puedan ser negativos al establecer la clase productos


class Producto{
     static contadorProductos = 0; //Se utiliza para acceder directamente a traves de la clase sin necesidad de instanciar un objeto
                                   //Por ejemplo, el metodo propiedades no requiere que se creen una instancia de la clase para ser utilizado
    constructor (nombre, precio, categoria, stock){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this.setPrecio(precio);
        this._categoria = categoria;
        this.setStock(stock);
    }

    getIdProducto(){
        return this._idProducto;
    }
    getNombre(){
        return this._nombre;
    }
    setNombre(nombre){
        this._nombre = nombre;
    }
    getPrecio(){
        return this._precio;
    }
    setPrecio(precio){
        if(precio >= 0){
            this._precio = precio;
        } else {
            console.log('No se aceptan valores negativos');
        }
    }
    getCategoria(){
        return this._categoria;
    }
    setCategoria(categoria){
        this._categoria = categoria;
    }
    getStock(){
        return this._stock;
    }
    setStock(stock){
        if (stock >= 0) {
            this._stock = stock;
        } else {
            console.log(`Error: El stock no puede ser negativo. Se intentó asignar: ${stock}.`);
            this._stock = 0;
        }
    }

    disminuirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } 
    }

    toString(){
        return `IdProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}, Categoria: ${this._categoria}, Stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){ //cuando se trabajo con constantes, se recomienda trabajat con mayusculas
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._idProductos = [];
        this._contadorProductosAgregados = 0;
    }

    getIdOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        //verificamos si no hemos superado el max de productos existentes
        if(this._idProductos.length < Orden.MAX_PRODUCTOS){
            if(producto.getStock() > 0){
            producto.disminuirStock(1);
            this._idProductos.push(producto); 
            } else {
                console.log(`Error: No hay suficiente stock para disminuir. Stock disponible: ${producto._stock}.`);
            }
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(const producto of this._idProductos){
            let precio = producto.getPrecio();
            if(producto.getCategoria() === 'Electronicos'){
                totalVenta += precio * 0.90; // Descuento a productos electronicos del 10%
            }
            totalVenta += precio; //totalVenta = totalVenta + producto.getPrecio();
            return totalVenta ; //Impuesto del 15% a la venta total
        }
    }

    calcularImpuestos(){
        const total = this.calcularTotal();
        return total * 0.15; //Impuesto del 15% 
    }

    ordenarProductoPorPrecio(){
        this._idProductos.sort((a,b) => b.getPrecio() - a.getPrecio()); //Ordenar de forma descendeente
    }

    mostrarOrden(){
        let productosOrden = '';
        this.ordenarProductoPorPrecio();
        for(const producto of this._idProductos){
            productosOrden += producto.toString() + '| ';
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Impuesto: $${this.calcularImpuestos()},Productos: ${productosOrden} `);
        console.log(`Orden: ${this._idOrden}, Total incluido Impuesto:$${this.calcularTotal() + this.calcularImpuestos()}`);
    }    
}

let producto1 = new Producto('Pantalon', 200, 'Ropa', 10);
let producto2 = new Producto('Camisa', 100, 'Ropa',20);
let producto3 = new Producto('Zapatos', 50, 'Calzado',20);
let producto4 = new Producto('Celular', 500, 'Electronicos',30);
let producto5 = new Producto('Tablet', -300, 'Electronicos',21); //comprobamos que no se aceptan valores negativos
let producto6 = new Producto('Tablet', 300, 'Electronicos',1);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
console.log(producto4.toString());
console.log(producto5.toString());
console.log(producto6.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto6);
orden1.agregarProducto(producto6); //comprobar que no hay stock suficiente
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();


