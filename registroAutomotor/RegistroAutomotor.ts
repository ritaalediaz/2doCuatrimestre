// • Implementar la clase RegistroAutomotor(Autos, Motos, Camiones) y deben tener los
// metodos:
// • AgregarVehiculo, get y set, modificar un
// vehiculo, dar de baja
// • incorporando los conceptos nuevos:
// • Encapsulamiento y composicion.

import { Vehiculo } from "./vehiculos";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";


export class  RegistroAutomotor {
   
    private listaVehiculo: Vehiculo[]; // Inicializa array  
    
    constructor() {
      this.listaVehiculo = [];
    }

    // Agregar vehículo

   public agregarVehiculo(vehiculo: Moto) {
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

 public modificarVehiculo(vehiculo:Vehiculo, marca?:string, modelo?:string,anio?:number, color?:string){
        // IF (variable) asegura que este 
        if(marca) vehiculo.setMarca(marca);
        if(modelo) vehiculo.setModelo(modelo);
        if(anio) vehiculo.setAnio(anio);            
        if(color) vehiculo.setColor(color);
       
        return "Vehículo modificado exitosamente";
    }

}
