
import {Mago} from "./mago"
import {Caballero} from "./caballero";
import {Verdugo} from "./verdugo";
import {Ladydi} from "./ladydi";
import {Juego} from "./Juego";
import{MagoMejorado} from "./magoMejorado";

const juego = new Juego();

let mago:Mago = new Mago("Gandalf", 1, "Hechizos",100,5,30,"convertir en sapo");
let caballero:Caballero = new Caballero("Conan", 1,"Fuerza Física",100,10,20,"Escudo Potente");
let verdugo:Verdugo = new Verdugo("Legolas", 1, "Tortura",100,5,40,"hacha de verdugo" );
let ladydi:Ladydi = new Ladydi("Diana", 1, "Voz Destructiva" ,100,7,25,"baile de lucha");
let magoMejorado:MagoMejorado = new MagoMejorado("Gandalf", 1, "Hechizos con los cuatro elementos",100,4,50,"convertir en sapo",4,"Magia con los cuatro elementos:Agua-Fuego-Aire-Tierra");

juego.agregarPersonaje(caballero);
juego.agregarPersonaje(mago);
juego.agregarPersonaje(verdugo);
juego.agregarPersonaje(ladydi);
juego.agregarPersonaje(magoMejorado);

juego.iniciarJuego();
console.log("El Caballero está preparado para atacar\n")
console.log("El Caballero evolucionó")
console.log(Caballero);
caballero.setdefEescudo("escudo mágico")
caballero.setNivel(2)
console.log(Caballero)
console.log ("!Nivel y arma cambiado con exito¡\n")

mago.atacar();
console.log("El Mago está preparado para atacar\n")
console.log("El Mago ataca con su hechizos")
console.log(Mago)
mago.defender();
console.log("El Mago está preparado para defenderse\n")
console.log("El Mago se protege con su magia")
console.log(Mago)

magoMejorado.evolucionar();
console.log("El mago esta preparado para evolucionar a Mago Legendario")
console.log("El Mago evolucionó")
console.log(Mago)

