"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(nombre, nivel, habilidades, vida, fuerza) {
        if (nivel === void 0) { nivel = 1; }
        this.nivel = 1;
        this.vida = 100;
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = habilidades;
        this.vida = 100;
        this.fuerza = fuerza;
    }
    Personajes.prototype.mostrarInfo = function () {
    };
    // Getters
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getNivel = function () {
        return this.nivel;
    };
    Personajes.prototype.getHabilidades = function () {
        return this.habilidades;
    };
    Personajes.prototype.getVida = function () {
        return this.vida;
    };
    Personajes.prototype.getFuerza = function () {
        return this.fuerza;
    };
    // Setters
    Personajes.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personajes.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personajes.prototype.setHabilidades = function (habilidades) {
        this.habilidades = habilidades;
    };
    Personajes.prototype.setVida = function (vida) {
        this.vida = 100;
    };
    Personajes.prototype.setFuerza = function (fuerza) {
        this.fuerza = fuerza;
    };
    //metodos
    Personajes.prototype.atacarOponente = function () {
        return console.log("ataca al oponente");
    };
    Personajes.prototype.defenderse = function () {
        return console.log("se esta defendiendo del enemigo");
    };
    return Personajes;
}());
exports.Personajes = Personajes;
