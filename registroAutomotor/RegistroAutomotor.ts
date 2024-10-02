// • Implementar la clase RegistroAutomotor(Autos, Motos, Camiones) y deben tener los
// metodos:
// • AgregarVehiculo, get y set, modificar un
// vehiculo, dar de baja
// • incorporando los conceptos nuevos:
// • Encapsulamiento y composicion.

import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    public Vehiculo!: string;
    public listaVehiculo: Vehiculo[]; // Inicializa array 
    estaAgregado: boolean = false;
    
    constructor(vehiculo: string) {
        this.Vehiculo = vehiculo;
        this.listaVehiculo = [];
    }

    // Agregar vehículo
    
    agregarVehiculo(vehiculo: Vehiculo) {
        this.listaVehiculo.push(vehiculo);
    }

    // Obtener la lista de vehículos
    public getRegistroAutomotor(): Vehiculo[] {
        return this.listaVehiculo; // Devuelve la lista de vehículos
    }


    // Getters
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }


    // Setters
    public setListaVehiculo(listaVehiculo: Vehiculo[]): void {
        this.listaVehiculo = listaVehiculo;
    }


    // Eliminar vehículo
    public eliminarVehiculo(vehiculoAEliminar: Vehiculo): void {
        // Verificar si el vehículo existe en la lista
        if (vehiculoAEliminar !== undefined && this.listaVehiculo.includes(vehiculoAEliminar)) {
            const posVehiculo: number = this.listaVehiculo.indexOf(vehiculoAEliminar);
            if (posVehiculo !== -1) {
                this.listaVehiculo.splice(posVehiculo, 1); // Eliminar el vehículo
            }
        }
    }



  // Modificar un vehiculo.

  public modificarVehiculo(vehiculo:Vehiculo):void{
             for (let i = 0; i < this.listaVehiculo.length; i++) {
               this.listaVehiculo[i].setlistaVehiculo(this.listaVehiculo);
               
            }
             vehiculo.setlistaVehiculo(this.listaVehiculo);            
              
          
            }
        }