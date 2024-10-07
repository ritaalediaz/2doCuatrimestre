"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patente = void 0;
var Patente = /** @class */ (function () {
    function Patente(numeros, letras, nacionalidad) {
        this.numero = numeros;
        this.letra = letras;
        this.nacionalidad = nacionalidad;
    }
    // getters
    Patente.prototype.getNumero = function () {
        return this.numero;
    };
    Patente.prototype.getLetra = function () {
        return this.letra;
    };
    Patente.prototype.getNacionalidad = function () {
        return this.nacionalidad;
    };
    return Patente;
}());
exports.Patente = Patente;
