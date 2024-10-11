// • Implementar la clase RegistroAutomotor(Autos, Motos, Camiones) y deben tener los
// metodos:
// • AgregarVehiculo, get y set, modificar un
// vehiculo, dar de baja
// • incorporando los conceptos nuevos:
// • Encapsulamiento y composicion.

import { Vehiculos } from "./vehiculos";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";


export class  RegistroAutomotor {
   
    private listaVehiculo: Vehiculos[]; // Inicializa array  
    
    constructor() {
      this.listaVehiculo = [];
    }

    // Agregar vehículo

   public agregarVehiculo(vehiculo: Moto) {
        this.listaVehiculo.push(vehiculo);
      }
      
 

    // Obtener la lista de vehículos
    public getRegistroAutomotor(): Vehiculos[] {
        return this.listaVehiculo; // Devuelve la lista de vehículos
    }

    // Getters
    public getListaVehiculo(): Vehiculos[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }

    // Setters
    public setListaVehiculo(listaVehiculo: Vehiculos[]): void {
        this.listaVehiculo = listaVehiculo;
    }

    // Eliminar vehículo
    public eliminarVehiculo(vehiculoAEliminar: Vehiculos): void {
        // Verificar si el vehículo existe en la lista
        if (vehiculoAEliminar !== undefined && this.listaVehiculo.includes(vehiculoAEliminar)) {
            const posVehiculo: number = this.listaVehiculo.indexOf(vehiculoAEliminar);
            if (posVehiculo !== -1) {
                this.listaVehiculo.splice(posVehiculo, 1); // Eliminar el vehículo
            }
        }
    }



    // Modificar un vehiculo.

    public modificarVehiculo(vehiculo:Vehiculos, marca?:string, modelo?:string,anio?:number, color?:string){
        // IF (variable) asegura que este 
        if(marca) vehiculo.setMarca(marca);
        if(modelo) vehiculo.setModelo(modelo);
        if(anio) vehiculo.setAnio(anio);
        if(color) vehiculo.setColor(color);
       
        return "Vehículo modificado exitosamente";
    }

}