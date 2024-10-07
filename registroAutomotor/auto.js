"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var patente_1 = require("./patente");
var Auto = /** @class */ (function () {
    function Auto(nombre, marca, modelo, patente) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // GETTERS
    Auto.prototype.getNombre = function () {
        return this.nombre;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    // SETTERS
    Auto.prototype.setMarca = function (nombre) {
        nombre = "Ford";
        return nombre;
    };
    Auto.prototype.setMoldelo = function (numero) {
        numero = 2004;
        return numero;
    };
    Auto.prototype.setPatente = function (numero, letras, nacionalidad) {
        numero = 499;
        letras = "EJS";
        nacionalidad = "Brasil";
    };
    return Auto;
}());
exports.Auto = Auto;
// instancias
var patente = new patente_1.Patente(499, "EJS", "Brasil");
var miAuto = new Auto("Ka", "Ford", 2004, patente);
console.log(miAuto);
