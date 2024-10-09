import {Vehiculo} from "./vehiculos"

const puertasAuto=3; // INICIO EL CONTEO CON TRES PUERTAS QUE ES LO MINIMO 

export class Auto extends Vehiculo{

    private puertas: number 

    constructor(marca:string, modelo: string, anio:number, color:string, puertas:number){
    super(marca, modelo, anio, color)
    this.puertas= puertasAuto;
      
}
getPuertas(){
    return this.puertas;        
    }   

setPuertas(puertas:number){
    this.puertas= puertas;        
    }   


}