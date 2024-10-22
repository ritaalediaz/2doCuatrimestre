/* un sistema de personajes de un
videojuego RPG utilizando herencia y
polimorfismo. Los personajes tendrán
características y habilidades únicas, y
algunos podrán evolucionar a versiones
mejoradas con nuevas habilidades.
CFS
Ejercicio videojuego
Ejemplo de clase base personaje
El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.
Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje
está atacando.
defender(): Imprime un mensaje indicando que el personaje
está defendiendo.
CFS
Ejercicio videojuego
Aclaracion, pueden crear las propiedades que quieran
pero no se vayan por la ramas. Hagan lo justo y
necesario.
Recomendamos crear  3 tipos de héroes (mago,
luchador, arquero) y luego algunos especiales.*/

import { mago } from "./mago";
import { caballero } from "./Caballero";
import { verdugo } from "./verdugo";
import { ladydi } from "./ladydi";
import { Juego } from "./juego";

const juego = new Juego();
let Mago: mago = new mago("Gandalf", 1, "Hechizos",100,5,30,"convertir en sapo");
let Caballero: caballero = new caballero("Conan", 1,"Fuerza Física",100,10,20,"Escudo Potente");
let Verdugo: verdugo = new verdugo("Legolas", 1, "Tortura",100,5,40,"hacha de verdugo" );
let Ladydi: ladydi = new ladydi("Diana", 1, "Voz Destructiva" ,100,7,25,"baile de lucha");

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

