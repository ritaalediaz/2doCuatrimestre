import { Patente } from './patente';

export class Auto {
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
    // GETTERS
    public getNombre():string{
        return this.nombre;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): number {
        return this.modelo;
    }
    public getPatente(): Patente {
        return this.patente;
    }
    // SETTERS
    setMarca(nombre: string): string {
        nombre = "Ford";
        return nombre;
    }
    setMoldelo(numero: number): number {
        numero = 2004;
        return numero;
    }
    setPatente(numero: number, letras: string, nacionalidad: string): void {
        numero = 499;
        letras = "EJS";
        nacionalidad = "Brasil";
    }
}
// instancias
let patente = new Patente(499, "EJS", "Brasil")
const miAuto = new Auto("Ka","Ford", 2004, patente);
console.log(miAuto);