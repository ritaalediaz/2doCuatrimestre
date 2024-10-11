"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
//arreglo de vehiculos
var registro = new registroAutomotor_1.RegistroAutomotor();
var ford = new auto_1.Auto("Ford", "Ka", 2010, "Rojo", 2);
var Gilera = new moto_1.Moto("Gilera", "Smash Tunnig", 2022, "Azul");
var siena = new auto_1.Auto("Fiat", "Siena", 2019, "Gris", 5);
var scania = new camion_1.Camion("Scania", "R 450", 2011, "Blanco");
// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(Gilera);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);
// Listar vehículos
console.log("----------Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos.
// Eliminar vehiculo.
registro.eliminarVehiculo(ford);
console.log("ELIMINAR VEHICULO");
console.log("-------El vehículo eliminado es: ", ford);
//actualizamos el registro
console.log("------------registro actualizado------------------");
console.log(registro.getListaVehiculo());
//agregamos una moto por el usuario
console.log("----------AÑADA UNA MOTO AL REGISTRO:---------\n");
var marca = rls.question("Ingrese la marca del vehículo: ");
var modelo = rls.question("Ingrese el modelo del vehículo: ");
var anio = rls.questionInt("Ingrese el año del vehículo: ");
var color = rls.question("Ingrese el color del vehículo:\n");
var nuevaMoto = new moto_1.Moto(marca, modelo, anio, color);
// y la agregar el nuevo vehículo al registro
registro.agregarVehiculo(nuevaMoto);
console.log("------la Moto se añadio con exito:-----------\n");
// actualizamos lista
console.log("---------------------registro actualizado-----------------");
console.log(registro.getListaVehiculo());
//modificamos un vehiculo
console.log("MODIFICAR COLOR:");
console.log(Gilera);
// Modifico el color de una moto desde su metodo de clase.
Gilera.setColor("Rojo");
console.log(Gilera);
console.log("---------------!color modificado con exito¡\n");
// de esta manera, podria modificar el color de cualquier vehiculo o remplazar todo
//reemplazo camion
console.log("REEMPLAZAR CAMION:\n");
console.log(scania);
console.log(" remplazar por el camion\n:");
// desde su metodo de clase.
scania.setMarca("iveco");
scania.setModelo("rouser");
scania.setAnio(1998);
scania.setColor("negro");
console.log(scania);
console.log("---!!Camion remplazado con exito¡¡---\n");
//actualizo de nuevo
console.log("------------------registro nuevamente actualizado:------------------------");
console.log(registro);
