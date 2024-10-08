import {Vehiculo} from "./vehiculos";

export class Camion extends Vehiculo{


    constructor(marca:string, modelo: string, anio:number, color:string){
        super(marca, modelo, anio, color)
        
    }
}