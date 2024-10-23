
import { Personajes } from "./Personajes";
 export class Mago extends Personajes {

 private cantidadHechizos: number;
 private defVarita: string;
 public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number, cantidadHechizos: number, defVarita: string) {
        super(nombre, nivel, habilidades,vida,fuerza);
         this.cantidadHechizos = 5;
         this.defVarita= "Convierte en sapo"
    }
   public atacar(): void {
      console.log(`${this.nombre} lanza ${this.cantidadHechizos}  a Conan y causa ${this.fuerza} daño`);
    }
    public defender(): void {
      console.log(`${this.nombre} se protege con su magia.`);
    }
  public evolucionar(): void {
    console.log(`${this.nombre} evoluciona a Mago Legendario.`);
    }
}