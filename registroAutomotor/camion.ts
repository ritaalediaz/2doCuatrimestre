import { Patente } from "./patente";


export class Camion{
    private nombre:string;
    private marca: string;
    private modelo: number;
    private patente: Patente;

    constructor(nombre: string, marca: string, modelo:number, patente: Patente){
        this.nombre= nombre;
        this.marca = marca;
        this.modelo= modelo;
        this.patente = patente;
    }

    // getters
    getNombre():string{
        return this.nombre;
    }
    getMarca():string{
        return this.marca;
    }
    getModelo():number{
        return this.modelo;
    }
    getPatente():Patente{
        return this.patente;
    }
    // setters
    setMarca(nombre: string):string{
        nombre= "Mercedes Benz 1218";
        return nombre;
    }
    setModelo(numero: number):number{
        numero = 1997;
        return numero;
    }
    setPatente(numero: number, letras: string, nacionalidad: string):void{
        numero= 189;
        letras= "RYM";
        nacionalidad= "Alemania";
    }
}
// instancias
let patente= new Patente(189, "RYM", "Alemania");
const miCamion =new Camion( "1218", "Mercedes Benz", 1997, patente);
console.log(miCamion);
