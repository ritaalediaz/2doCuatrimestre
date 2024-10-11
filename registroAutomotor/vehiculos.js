"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
var Vehiculos = /** @class */ (function () {
    function Vehiculos(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    // Getters
    Vehiculos.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculos.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculos.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculos.prototype.getColor = function () {
        return this.color;
    };
    // Setters
    Vehiculos.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculos.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculos.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculos.prototype.setColor = function (color) {
        this.color = color;
    };
    return Vehiculos;
}());
exports.Vehiculos = Vehiculos;
