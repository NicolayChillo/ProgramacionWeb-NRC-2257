// Clase Conductor
class Conductor {
    #licencia; // Atributo encapsulado - es privado
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutasAsignadas = [];
    }
    registrarRuta(ruta) {
        this.rutasAsignadas.push(ruta);
        console.log(`Ruta asignada a ${this.nombre}: ${ruta.detallesRuta()}`);
    }
    obtenerLicencia() {
        return this.#licencia;
    }
}

// Clase ConductorVIP - Hereda de Conductor
class ConductorVIP extends Conductor {
    constructor(nombre, licencia, vehiculoPreferido) {
        super(nombre, licencia);
        this.vehiculoPreferido = vehiculoPreferido;
    }
    //beneficio exclusivo para usuarios VIP
    asignarVehiculoPreferido() {
        console.log(`${this.nombre} tiene asignado su vehículo preferido: ${this.vehiculoPreferido.modelo}`);
    }
}

// Clase Vehiculo
class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.estado = "disponible";
    }
    asignarConductor(conductor) {
        if (this.estado === "disponible") {
            this.estado = "ocupado";
            console.log(`Vehículo ${this.modelo} asignado a ${conductor.nombre}`);
        } else {
            console.log(`Vehículo ${this.modelo} no está disponible.`);
        }
    }
    liberarVehiculo() {
        this.estado = "disponible";
        console.log(`Vehículo ${this.modelo} está ahora disponible.`);
    }
}

// Clase Ruta
class Ruta {
    constructor(origen, destino, tiempoEstimado) {
        this.origen = origen;
        this.destino = destino;
        this.tiempoEstimado = tiempoEstimado;
    }

    detallesRuta() {
        return `${this.origen} -> ${this.destino}, Tiempo: ${this.tiempoEstimado} minutos`;
    }
}