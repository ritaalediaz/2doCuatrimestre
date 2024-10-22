"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var Caballero_1 = require("./Caballero");
var verdugo_1 = require("./verdugo");
var ladydi_1 = require("./ladydi");
var juego_1 = require("./juego");
var juego = new juego_1.Juego();
var Mago = new mago_1.mago("Gandalf", 1, "Hechizos", 100, 5, 30, "convertir en sapo");
var Caballero = new Caballero_1.caballero("Conan", 1, "Fuerza Física", 100, 10, 20, "Escudo Potente");
var Verdugo = new verdugo_1.verdugo("Legolas", 1, "Tortura", 100, 5, 40, "hacha de verdugo");
var Ladydi = new ladydi_1.ladydi("Diana", 1, "Voz Destructiva", 100, 7, 25, "baile de lucha");
juego.agregarPersonaje(Caballero);
juego.agregarPersonaje(Mago);
juego.agregarPersonaje(Verdugo);
juego.agregarPersonaje(Ladydi);
juego.iniciarJuego();
Caballero.encontrarCajaMagica();
Caballero.mostrarHabilidades();
console.log("El Caballero está preparado para contraatacar\n");
console.log("El Caballero evolucionó");
console.log(Caballero);
Caballero.setdefEescudo("escudo mágico");
Caballero.setNivel(2);
console.log(Caballero);
console.log("!Nivel y arma cambiado con exito¡\n");
