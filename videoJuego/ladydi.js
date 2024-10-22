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
exports.ladydi = void 0;
var personajes_1 = require("./personajes");
var ladydi = /** @class */ (function (_super) {
    __extends(ladydi, _super);
    function ladydi(nombre, nivel, habilidades, vida, fuerza, cantoDeSirena, danceFeghting) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades, vida, fuerza) || this;
        _this.cantoDeSirena = 7;
        _this.danceFeghting = "baile de lucha";
        return _this;
    }
    ladydi.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza ").concat(this.cantoDeSirena, "  a Verdugo y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    ladydi.prototype.defender = function () {
        console.log("".concat(this.nombre, " se protege con baile de lucha."));
    };
    return ladydi;
}(personajes_1.Personajes));
exports.ladydi = ladydi;
