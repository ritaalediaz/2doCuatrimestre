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
exports.Auto = void 0;
var vehiculos_1 = require("./vehiculos");
var puertasAuto = 2; // INICIO EL CONTEO CON DOS PUERTAS QUE ES LO MINIMO 
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, anio, color, puertas) {
        var _this = _super.call(this, marca, modelo, anio, color) || this;
        _this.puertas = puertasAuto;
        return _this;
    }
    return Auto;
}(vehiculos_1.Vehiculos));
exports.Auto = Auto;
