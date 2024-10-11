import {Vehiculos} from "./vehiculos"

const puertasAuto=2; // INICIO EL CONTEO CON DOS PUERTAS QUE ES LO MINIMO 

export class Auto extends Vehiculos{

    private puertas: number 

    constructor(marca:string, modelo: string, anio:number, color:string, puertas:number){
    super(marca, modelo, anio, color)
    this.puertas= puertasAuto;
      
}

}