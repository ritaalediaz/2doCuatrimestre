"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego() {
        this.personajes = [];
    }
    Juego.prototype.agregarPersonaje = function (personaje) {
        this.personajes.push(personaje);
    };
    Juego.prototype.iniciarJuego = function () {
        this.personajes.forEach(function (personaje) {
            personaje.atacar();
            personaje.defender();
        });
    };
    return Juego;
}());
exports.Juego = Juego;
