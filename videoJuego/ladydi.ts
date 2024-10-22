
import { Personajes } from "./personajes";
export class ladydi extends Personajes {
   
  private cantoDeSirena: number;
  private danceFeghting: string;
  public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number, cantoDeSirena: number, danceFeghting: string) {
         super(nombre, nivel, habilidades,vida,fuerza);
          this.cantoDeSirena= 7;
         this.danceFeghting= "baile de lucha"
     }
     atacar(): void {
        console.log(`${this.nombre} lanza ${this.cantoDeSirena}  a Verdugo y causa ${this.fuerza} de daño`);
      }
     defender(): void {
        console.log(`${this.nombre} se protege con baile de lucha.`);
      }
    }
 

