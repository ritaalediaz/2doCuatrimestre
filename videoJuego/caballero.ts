import { Personajes } from "./Personajes";
export class Caballero extends Personajes {
    
    private ataqueEspada: number;
    private defEescudo: string;
    public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number,ataqueEspada:number, escudo:string) {
        super(nombre, nivel, habilidades,vida,fuerza);
        this.ataqueEspada=10;
        this.defEescudo= "escudo potente"
    }
    // Atacar
    public atacar(): void {
        console.log(`${this.nombre} ataca con ${this.ataqueEspada} a El Mago Gandalf y causa ${this.fuerza} de daño`);
     }
      
    //Defender 
    public defender(): void {
        console.log(`${this.nombre} se protege con su escudo potente.`);
    }
   public getdefEescudo(): string {
        return this.defEescudo;
 }
   public setdefEescudo(def: string): void {
        this.defEescudo = def;  
    }
}

