import { Patente } from "./patente";

export class Moto {
    
    private nombre: string;
    private marca: string;
    private modelo: number;
    private patente: Patente;

    constructor(nombre: string, marca: string, modelo: number, patente: Patente) {
        this.nombre= nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // getters
    public getNombre():string{
        return this.nombre;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): number {
        return this.modelo;
    }
    getPatente(): Patente {
        return this.patente;
    }
    // setters
    setMarca(nombre: string): string {
        nombre = "Motomel";
        return nombre;
    }
    setModelo(numero: number): number {
        numero = 2017;
        return numero;
    }
    setPantente(numero: number, letras: string, nacionalidad: string): void {
        numero = 123;
        letras = "JMS";
        nacionalidad = "Argentina";
    }
}
// instancias
let patente = new Patente(123, "JMS", "Argentina");
const miMoto = new Moto("Skua", "Motomel", 2017, patente);
console.log(miMoto);