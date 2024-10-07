"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var patente_1 = require("./patente");
var Moto = /** @class */ (function () {
    function Moto(nombre, marca, modelo, patente) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // getters
    Moto.prototype.getNombre = function () {
        return this.nombre;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    // setters
    Moto.prototype.setMarca = function (nombre) {
        nombre = "Motomel";
        return nombre;
    };
    Moto.prototype.setModelo = function (numero) {
        numero = 2017;
        return numero;
    };
    Moto.prototype.setPantente = function (numero, letras, nacionalidad) {
        numero = 123;
        letras = "JMS";
        nacionalidad = "Argentina";
    };
    return Moto;
}());
exports.Moto = Moto;
// instancias
var patente = new patente_1.Patente(123, "JMS", "Argentina");
var miMoto = new Moto("Skua", "Motomel", 2017, patente);
console.log(miMoto);
