
import { Personajes } from "./Personajes";
export class Ladydi extends Personajes {
   
  private cantoDeSirena: number;
  private danceFeghting: string;
  public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number, cantoDeSirena: number, danceFeghting: string) {
         super(nombre, nivel, habilidades,vida,fuerza);
          this.cantoDeSirena= 7;
         this.danceFeghting= "baile de lucha"
     }
     public atacar(): void {
        console.log(`${this.nombre} lanza ${this.cantoDeSirena}  a Verdugo y causa ${this.fuerza} de daño`);
      }
     public defender(): void {
        console.log(`${this.nombre} se protege con baile de lucha.`);
      }
    }
 

