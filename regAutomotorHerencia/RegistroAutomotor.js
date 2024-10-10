"use strict";
// • Crear proyecto NPM
// • Subir proyecto a GitHub
// • Implementar Registro Automotor visto anteriormente, pero agregando soporte de
// motos y camiones usando herencia
// • Definir tarea NPM para compilar y correr los archivos necesarios
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaVehiculo = [];
    }
    // Agregar vehículo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.listaVehiculo.push(vehiculo);
    };
    // Obtener la lista de vehículos
    RegistroAutomotor.prototype.getRegistroAutomotor = function () {
        return this.listaVehiculo; // Devuelve la lista de vehículos
    };
    // Getters
    RegistroAutomotor.prototype.getListaVehiculo = function () {
        return this.listaVehiculo; // Retorna la lista de vehículos
    };
    // Setters
    RegistroAutomotor.prototype.setListaVehiculo = function (listaVehiculo) {
        this.listaVehiculo = listaVehiculo;
    };
    // Eliminar vehículo
    RegistroAutomotor.prototype.eliminarVehiculo = function (vehiculoAEliminar) {
        // Verificar si el vehículo existe en la lista
        if (vehiculoAEliminar !== undefined && this.listaVehiculo.includes(vehiculoAEliminar)) {
            var posVehiculo = this.listaVehiculo.indexOf(vehiculoAEliminar);
            if (posVehiculo !== -1) {
                this.listaVehiculo.splice(posVehiculo, 1); // Eliminar el vehículo
            }
        }
    };
    // Modificar un vehiculo.
    RegistroAutomotor.prototype.modificarVehiculo = function (vehiculo, marca, modelo, anio, color) {
        // IF (variable) asegura que este 
        if (marca)
            vehiculo.setMarca(marca);
        if (modelo)
            vehiculo.setModelo(modelo);
        if (anio)
            vehiculo.setAnio(anio);
        if (color)
            vehiculo.setColor(color);
        return "Vehículo modificado exitosamente";
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
