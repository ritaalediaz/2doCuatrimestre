"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.caballero = void 0;
var personajes_1 = require("./personajes");
var caballero = /** @class */ (function (_super) {
    __extends(caballero, _super);
    function caballero(nombre, nivel, habilidades, vida, fuerza, ataqueEspada, escudo) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades, vida, fuerza) || this;
        _this.ataqueEspada = 10;
        _this.defEescudo = "escudo potente";
        return _this;
    }
    // Atacar
    caballero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con ").concat(this.ataqueEspada, " a El Mago Gandalf y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    //Defender 
    caballero.prototype.defender = function () {
        console.log("".concat(this.nombre, " se protege con su escudo potente."));
    };
    caballero.prototype.getdefEescudo = function () {
        return this.defEescudo;
    };
    caballero.prototype.setdefEescudo = function (def) {
        this.defEescudo = def;
    };
    return caballero;
}(personajes_1.Personajes));
exports.caballero = caballero;
