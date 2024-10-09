

import {Vehiculo} from "./vehiculos"

const numEjes =2; // inicio de 2 ejes
const capacidadCarga=800; // inicio de carga desde 800 kg

export class Camion extends Vehiculo{
    
    private ejes: number
    private carga: number 

    constructor(marca:string, modelo: string, anio:number, color:string, ejes:number, carga:number){
    super(marca, modelo, anio, color)
    this.ejes= numEjes;
    this.carga= capacidadCarga;
      
}

getEjes(){
    return this.ejes;   
    }
    setEjes(ejes:number){
        this.ejes= ejes;   
        }

getCarga(){
    return this.carga;   
    }
    setCarga(carga:number){
        this.carga= carga;   
        } 

}
    
    
