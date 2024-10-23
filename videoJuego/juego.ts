import { Personajes } from "./Personajes";
export class Juego {
    private personajes: Personajes[];
    public constructor() {
      this.personajes = [];
    }
    public agregarPersonaje(personaje: Personajes): void {
      this.personajes.push(personaje);
    }
    public  iniciarJuego(): void {
      this.personajes.forEach((personaje) => {
        personaje.atacar();
        personaje.defender();
      });
    }
  }