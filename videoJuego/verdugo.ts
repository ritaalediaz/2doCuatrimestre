import { Personajes } from "./personajes";
export class verdugo extends Personajes {

  private elementosTortura: number;
  private hachaDeVerdugo: string;
  public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number, elementosTortura: number, hachaDeVerdugo: string) {
         super(nombre, nivel, habilidades,vida,fuerza);
          this.elementosTortura = 5;
         this.hachaDeVerdugo= "hacha de verdugo"
     }
  atacar(): void {
        console.log(`${this.nombre} ataca con elementos de tortura ${this.elementosTortura} al caballero Conan y causa ${this.fuerza} de daño`);
      }
  defender(): void {
        console.log(`${this.nombre} se defendió con su hacha de verdugo.`);
      }
}
