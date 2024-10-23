import { Personajes } from "./Personajes";
 export class MagoMejorado extends Personajes {

 private hechizosConLosCuatroElementos: number;
 private defenderseConMagia: string;
 public constructor(nombre: string, nivel: number = 1, habilidades: string,vida:100,fuerza:number, hechizosConLosCuatroElementos: number, defenderseConMagia: string) {
        super(nombre, nivel, habilidades,vida,fuerza);
         this.hechizosConLosCuatroElementos = 4;
         this.defenderseConMagia= "Magia con los cuatro elementos:Agua-Fuego-Aire-Tierra"
    }
   public atacar(): void {
      console.log(`${this.nombre} lanza ${this.hechizosConLosCuatroElementos} a Legolas y causa ${this.fuerza} muerte`);
    }
    public defender(): void {
      console.log(`${this.nombre} se protege con su magia.`);
    }
  public evolucionar(): void {
    console.log(`${this.nombre} evoluciona a Mago Legendario.`);
    }
}