
import * as rls from 'readline-sync';
import { Automotor } from './automotor';
import { Auto } from './auto';
import { Camion } from './camion';
import { Patente } from './patente';
import { Moto } from './moto'


// lista de vehiculos
let listaDeVehiculos: Automotor = new Automotor();

let autoPatente = new Patente(499, "EJS", "Brasil")
let motoPatente = new Patente(123, "JSM", "Argentina");
let camionPatente = new Patente(189, "RYM", "Alemania");

const miAuto = new Auto("Ka", "Ford", 2004, autoPatente);
const miMoto = new Moto("Skua", "Motomel", 2017, motoPatente);
const miCamion = new Camion("1218", "Mercedes Benz", 1997, camionPatente);

listaDeVehiculos.nuevoAuto(miAuto);
listaDeVehiculos.nuevaMoto(miMoto);
listaDeVehiculos.nuevoCamion(miCamion);

console.log("Los vehiculos de la lista son: ");
console.log(listaDeVehiculos.getAuto(), listaDeVehiculos.getMoto(), listaDeVehiculos.getCamion());


// elimina el vehiculo de la lista
let eliminarVehiculo = rls.questionInt("ingrese un numero del 1 la 3 para eliminar un Vehiculo: ");
if (eliminarVehiculo === 1) {
    console.log("eliminaste el", miAuto, "de la lista");
} else if (eliminarVehiculo === 2) {
    console.log("eliminaste la", miMoto, "de la lista");
} else if (eliminarVehiculo === 3) {
    console.log("eliminaste el", miCamion, "de la lista");
} else {
    console.log("numero no valido. por favor ingrese un numero del 1 al 3.");
}


// agrega los nuevos vehiculos a la lista 
let patenteAuto = new Patente(789, "FGH", "Alemania");
let patenteMoto = new Patente(123, "IGV", "Japon");
let patenteCamion = new Patente(456, "TUM", "Argentina");

let auto = new Auto("C4", "Volkswagen", 2020, patenteAuto);
let moto = new Moto("Mt 03", "Kawasaki", 2020, patenteMoto);
let camion = new Camion("G340", "Scania", 2008, patenteCamion);


// instancias ...el usuario elige el vehiculo segun el numero  
let vehiculoUsuario = rls.questionInt("ingrese un numero del 1 al 3 para agregar un nuevo vehiculo a la lista: ");

let patenteAutoU = new Patente(687, "IFV", "Alemania")
let patenteMotoU = new Patente(123, "IGV", "Japon");
let patenteCamionU = new Patente(987, "VCM", "Australia");

let autoUsuario = new Auto("Vento", "Volkswagen", 2020, patenteAutoU);
let motoUsuario = new Moto("Ninja h2r", "Kawasaki", 2020, patenteMotoU);
let camionUsuario = new Camion("113", "Scania", 1997, patenteCamionU);

if (vehiculoUsuario === 1) {
    console.log("agregaste el", autoUsuario, "a la lista");
} else if (vehiculoUsuario === 2) {
    console.log("agregaste la", motoUsuario, "a la lista");
} else if (vehiculoUsuario === 3) {
    console.log("agregaste el", camionUsuario, "a la lista");
} else {
    console.log("Número no válido. Por favor, elige un número del 1 al 3.");
}

// modificar el vehiculo
let modificarVehiculo = rls.questionInt("que vehiculo quiere modificar?, por favor ingrese un numero del 1 al 6: ");

// nuevos vehiculos
let usuarioAuto = new Auto("Vento", "Volkswagen", 2020, patenteAutoU);
let usuarioMoto = new Moto("Ninja h2r", "Kawasaki", 2020, patenteMotoU);
let usuarioCamion = new Camion("113", "Scania", 1997, patenteCamionU);

// este if verifica si los nuevos vehiculos 
if (modificarVehiculo === 1) {
    console.log("elegiste el ", usuarioAuto, "para modificar");
} else if (modificarVehiculo === 2) {
    console.log("elegiste la ", usuarioMoto, "para modificar");
} else if (modificarVehiculo === 3) {
    console.log("elegiste el ", usuarioCamion, "para modificar");
} else {
    console.log("Numero no valido. por favor elige un numero del 1 al 6.")
}

// ente if verifica los vehiculos que estan en la lista
if (modificarVehiculo === 4) {
    console.log("elegiste el ", miAuto, "para modificar");
} else if (modificarVehiculo === 5) {
    console.log("elegiste la ", miMoto, "para modificar");
} else if (modificarVehiculo === 6) {
    console.log("elegiste el ", miCamion, "para modificar");
} else {
    console.log("Numero no valido. por favor elige un numero del 1 al 6.")
}




