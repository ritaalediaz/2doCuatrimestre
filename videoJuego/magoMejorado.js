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
exports.MagoMejorado = void 0;
var Personajes_1 = require("./Personajes");
var MagoMejorado = /** @class */ (function (_super) {
    __extends(MagoMejorado, _super);
    function MagoMejorado(nombre, nivel, habilidades, vida, fuerza, hechizosConLosCuatroElementos, defenderseConMagia) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades, vida, fuerza) || this;
        _this.hechizosConLosCuatroElementos = 4;
        _this.defenderseConMagia = "Magia con los cuatro elementos:Agua-Fuego-Aire-Tierra";
        return _this;
    }
    MagoMejorado.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza ").concat(this.hechizosConLosCuatroElementos, " a Legolas y causa ").concat(this.fuerza, " muerte"));
    };
    MagoMejorado.prototype.defender = function () {
        console.log("".concat(this.nombre, " se protege con su magia."));
    };
    MagoMejorado.prototype.evolucionar = function () {
        console.log("".concat(this.nombre, " evoluciona a Mago Legendario."));
    };
    return MagoMejorado;
}(Personajes_1.Personajes));
exports.MagoMejorado = MagoMejorado;
