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
exports.Verdugo = void 0;
var Personajes_1 = require("./Personajes");
var Verdugo = /** @class */ (function (_super) {
    __extends(Verdugo, _super);
    function Verdugo(nombre, nivel, habilidades, vida, fuerza, elementosTortura, hachaDeVerdugo) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades, vida, fuerza) || this;
        _this.elementosTortura = 5;
        _this.hachaDeVerdugo = "hacha de verdugo";
        return _this;
    }
    Verdugo.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con elementos de tortura ").concat(this.elementosTortura, " al caballero Conan y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    Verdugo.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defendi\u00F3 con su hacha de verdugo."));
    };
    return Verdugo;
}(Personajes_1.Personajes));
exports.Verdugo = Verdugo;
