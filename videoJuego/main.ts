
import {Mago} from "./Mago";
import {Caballero} from "./Caballero";
import {Verdugo} from "./Verdugo";
import {Ladydi} from "./Ladydi";
import {Juego} from "./Juego";

const juego = new Juego();

let Mago:Mago = new Mago("Gandalf", 1, "Hechizos",100,5,30,"convertir en sapo");
let Caballero:Caballero = new Caballero("Conan", 1,"Fuerza Física",100,10,20,"Escudo Potente");
let Verdugo:Verdugo = new Verdugo("Legolas", 1, "Tortura",100,5,40,"hacha de verdugo" );
let Ladydi:Ladydi = new Ladydi("Diana", 1, "Voz Destructiva" ,100,7,25,"baile de lucha");

juego.agregarPersonaje(Caballero);
juego.agregarPersonaje(Mago);
juego.agregarPersonaje(Verdugo);
juego.agregarPersonaje(Ladydi);

juego.iniciarJuego();
console.log("El Caballero está preparado para atacar\n")
console.log("El Caballero evolucionó")
console.log(Caballero);

Caballero.setdefEescudo("escudo mágico")
Caballero.setNivel(2)
console.log(Caballero)
console.log ("!Nivel y arma cambiado con exito¡\n")

Mago.evolucionar();
console.log("El mago esta preparado para evolucionar a Mago Legendario")
console.log("El Mago evolucionó")
console.log(Mago)

