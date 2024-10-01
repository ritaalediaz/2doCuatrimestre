"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var registro = new RegistroAutomotor_1.RegistroAutomotor();
var ford = new Vehiculo_1.Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto");
var motomel = new Vehiculo_1.Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle");
var siena = new Vehiculo_1.Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán");
var scania = new Vehiculo_1.Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia");
// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);
// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos
