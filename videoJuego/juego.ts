import { Personajes } from "./Personajes";
export class Juego {
    private personajes: Personajes[];
    public constructor() {
      this.personajes = [];
    }
    agregarPersonaje(personaje: Personajes): void {
      this.personajes.push(personaje);
    }
    iniciarJuego(): void {
      this.personajes.forEach((personaje) => {
        personaje.atacar();
        personaje.defender();
      });
    }
  }