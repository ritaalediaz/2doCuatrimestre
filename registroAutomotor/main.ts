

import { Vehiculo } from "./Vehiculo";

import { RegistroAutomotor } from "./RegistroAutomotor";

let registro = new RegistroAutomotor("Ford");

let ford: Vehiculo = new Vehiculo("Ford ", "Ka", "Automotor", "Privado");
let motomel: Vehiculo = new Vehiculo("Gilera", "Smash", "Motocicleta","Privado");
let siena: Vehiculo = new Vehiculo("Fiat", "Siena", "Vehículo familiar ", "Privado");
let scania: Vehiculo = new Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia");


// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);

// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos.



// Eliminar vehiculo.

registro.eliminarVehiculo(ford);
console.log("El vehículo eliminado es: " , ford);
console.log(" Vehículo eliminado con exito ");
console.log(registro.getListaVehiculo());


// Vehiculo nuevo.
let fitito: Vehiculo = new Vehiculo("fitito", "m83", "Transporte pequeño ", " corta distancia");
registro.agregarVehiculo( fitito);

console.log("El vehículo agregado es: " );

console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());



//Modificar vehiculo.
registro.modificarVehiculo(fitito);
console.log("Se cambio de modelo a: "+ Vehiculo.getModelo());
console.log("Vehiculo modificado") ;
console.log(registro.getListaVehiculo());                                                              
            
