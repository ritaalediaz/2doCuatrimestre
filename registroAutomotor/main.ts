
import * as rls from 'readline-sync';
import { RegistroAutomotor } from "./registroAutomotor";
import {Auto} from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
//arreglo de vehiculos
let registro = new RegistroAutomotor();

let ford: Auto = new Auto("Ford", "Ka", 2010, "Rojo",2);
let Gilera: Moto = new Moto("Gilera", "Smash Tunnig", 2022, "Azul");
let siena: Auto= new Auto("Fiat", "Siena", 2019, "Gris", 5);

let scania: Camion = new Camion

("Scania", "R 450",2011, "Blanco");


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

console.log("ELIMINAR VEHICULO")
console.log("-------El vehículo eliminado es: " , ford);


//actualizamos el registro
console.log("------------registro actualizado------------------")
console.log(registro.getListaVehiculo());




//agregamos una moto por el usuario
console.log("----------AÑADA UNA MOTO AL REGISTRO:---------\n");

let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let anio: number = rls.questionInt("Ingrese el año del vehículo: ");
let color: string = rls.question("Ingrese el color del vehículo:\n");


let nuevaMoto: Moto = new Moto(marca,modelo,anio,color);


// y la agregar el nuevo vehículo al registro
registro.agregarVehiculo(nuevaMoto);

console.log("------la Moto se añadio con exito:-----------\n");

// actualizamos lista
console.log("---------------------registro actualizado-----------------")
console.log(registro.getListaVehiculo());



//modificamos un vehiculo
console.log("MODIFICAR COLOR:")
console.log(Gilera);
// Modifico el color de una moto desde su metodo de clase.
Gilera.setColor("Rojo")
console.log(Gilera)
console.log ("---------------!color modificado con exito¡\n")


// de esta manera, podria modificar el color de cualquier vehiculo o remplazar todo

//reemplazo camion
console.log(  "REEMPLAZAR CAMION:\n")
console.log(scania);
console.log(" remplazar por el camion\n:")
// desde su metodo de clase.
scania.setMarca("iveco")
scania.setModelo("rouser")
scania.setAnio(1998)
scania.setColor("negro")
console.log(scania)
console.log ("---!!Camion remplazado con exito¡¡---\n")



//actualizo de nuevo

console.log("------------------registro nuevamente actualizado:------------------------")
console.log(registro);

