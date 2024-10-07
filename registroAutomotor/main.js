"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var automotor_1 = require("./automotor");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var patente_1 = require("./patente");
var moto_1 = require("./moto");
// lista de vehiculos
var listaDeVehiculos = new automotor_1.Automotor();
var autoPatente = new patente_1.Patente(499, "EJS", "Brasil");
var motoPatente = new patente_1.Patente(123, "JSM", "Argentina");
var camionPatente = new patente_1.Patente(189, "RYM", "Alemania");
var miAuto = new auto_1.Auto("Ka", "Ford", 2004, autoPatente);
var miMoto = new moto_1.Moto("Skua", "Motomel", 2017, motoPatente);
var miCamion = new camion_1.Camion("1218", "Mercedes Benz", 1997, camionPatente);
listaDeVehiculos.nuevoAuto(miAuto);
listaDeVehiculos.nuevaMoto(miMoto);
listaDeVehiculos.nuevoCamion(miCamion);
console.log("Los vehiculos de la lista son: ");
console.log(listaDeVehiculos.getAuto(), listaDeVehiculos.getMoto(), listaDeVehiculos.getCamion());
// elimina el vehiculo de la lista
var eliminarVehiculo = rls.questionInt("ingrese un numero del 1 la 3 para eliminar un Vehiculo: ");
if (eliminarVehiculo === 1) {
    console.log("eliminaste el", miAuto, "de la lista");
}
else if (eliminarVehiculo === 2) {
    console.log("eliminaste la", miMoto, "de la lista");
}
else if (eliminarVehiculo === 3) {
    console.log("eliminaste el", miCamion, "de la lista");
}
else {
    console.log("numero no valido. por favor ingrese un numero del 1 al 3.");
}
// agrega los nuevos vehiculos a la lista 
var patenteAuto = new patente_1.Patente(789, "FGH", "Alemania");
var patenteMoto = new patente_1.Patente(123, "IGV", "Japon");
var patenteCamion = new patente_1.Patente(456, "TUM", "Argentina");
var auto = new auto_1.Auto("C4", "Volkswagen", 2020, patenteAuto);
var moto = new moto_1.Moto("Mt 03", "Kawasaki", 2020, patenteMoto);
var camion = new camion_1.Camion("G340", "Scania", 2008, patenteCamion);
// instancias ...el usuario elige el vehiculo segun el numero  
var vehiculoUsuario = rls.questionInt("ingrese un numero del 1 al 3 para agregar un nuevo vehiculo a la lista: ");
var patenteAutoU = new patente_1.Patente(687, "IFV", "Alemania");
var patenteMotoU = new patente_1.Patente(123, "IGV", "Japon");
var patenteCamionU = new patente_1.Patente(987, "VCM", "Australia");
var autoUsuario = new auto_1.Auto("Vento", "Volkswagen", 2020, patenteAutoU);
var motoUsuario = new moto_1.Moto("Ninja h2r", "Kawasaki", 2020, patenteMotoU);
var camionUsuario = new camion_1.Camion("113", "Scania", 1997, patenteCamionU);
if (vehiculoUsuario === 1) {
    console.log("agregaste el", autoUsuario, "a la lista");
}
else if (vehiculoUsuario === 2) {
    console.log("agregaste la", motoUsuario, "a la lista");
}
else if (vehiculoUsuario === 3) {
    console.log("agregaste el", camionUsuario, "a la lista");
}
else {
    console.log("Número no válido. Por favor, elige un número del 1 al 3.");
}
// modificar el vehiculo
var modificarVehiculo = rls.questionInt("que vehiculo quiere modificar?, por favor ingrese un numero del 1 al 6: ");
// nuevos vehiculos
var usuarioAuto = new auto_1.Auto("Vento", "Volkswagen", 2020, patenteAutoU);
var usuarioMoto = new moto_1.Moto("Ninja h2r", "Kawasaki", 2020, patenteMotoU);
var usuarioCamion = new camion_1.Camion("113", "Scania", 1997, patenteCamionU);
// este if verifica si los nuevos vehiculos 
if (modificarVehiculo === 1) {
    console.log("elegiste el ", usuarioAuto, "para modificar");
}
else if (modificarVehiculo === 2) {
    console.log("elegiste la ", usuarioMoto, "para modificar");
}
else if (modificarVehiculo === 3) {
    console.log("elegiste el ", usuarioCamion, "para modificar");
}
else {
    console.log("Numero no valido. por favor elige un numero del 1 al 6.");
}
// ente if verifica los vehiculos que estan en la lista
if (modificarVehiculo === 4) {
    console.log("elegiste el ", miAuto, "para modificar");
}
else if (modificarVehiculo === 5) {
    console.log("elegiste la ", miMoto, "para modificar");
}
else if (modificarVehiculo === 6) {
    console.log("elegiste el ", miCamion, "para modificar");
}
else {
    console.log("Numero no valido. por favor elige un numero del 1 al 6.");
}
