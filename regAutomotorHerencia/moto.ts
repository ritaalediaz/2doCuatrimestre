

import {Vehiculo} from "./vehiculos"

const cilindrada=125; //inicio de 125 cc

export class Moto extends Vehiculo{

    private cilindrada: number 

    constructor(marca:string, modelo: string, anio:number, color:string, cilindrada:number){
    super(marca, modelo, anio, color)
    this.cilindrada= cilindrada;
      
}
getCilindrada(){
    return this.cilindrada;        
    }   

    setCilindrada(cilindrada:number){
        this.cilindrada= cilindrada;        
        }
}