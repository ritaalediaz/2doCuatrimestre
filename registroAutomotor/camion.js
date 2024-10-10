"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var patente_1 = require("./patente");
var Camion = /** @class */ (function () {
    function Camion(nombre, marca, modelo, patente) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // getters
    Camion.prototype.getNombre = function () {
        return this.nombre;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    // setters
    Camion.prototype.setMarca = function (nombre) {
        nombre = "Mercedes Benz 1218";
        return nombre;
    };
    Camion.prototype.setModelo = function (numero) {
        numero = 1997;
        return numero;
    };
    Camion.prototype.setPatente = function (numero, letras, nacionalidad) {
        numero = 189;
        letras = "RYM";
        nacionalidad = "Alemania";
    };
    return Camion;
}());
exports.Camion = Camion;
// instancias
var patente = new patente_1.Patente(189, "RYM", "Alemania");
var miCamion = new Camion("1218", "Mercedes Benz", 1997, patente);
console.log(miCamion);
