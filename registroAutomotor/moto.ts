import {Vehiculos} from "./vehiculos";

export class Moto extends Vehiculos {
    
    constructor(marca:string, modelo: string, anio:number, color:string) {
        super (marca, modelo, anio, color)
    }
}