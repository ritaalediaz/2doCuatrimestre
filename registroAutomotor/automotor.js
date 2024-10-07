"use strict";
// • Implementar la clase RegistroAutomotor(Autos, Motos, Camiones) y deben tener los
// metodos:
// • AgregarVehiculo, get y set, modificar un
// vehiculo, dar de baja
// • incorporando los conceptos nuevos:
// • Encapsulamiento y composicion.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automotor = void 0;
var Automotor = /** @class */ (function () {
    function Automotor(auto, moto, camion) {
        if (auto === void 0) { auto = []; }
        if (moto === void 0) { moto = []; }
        if (camion === void 0) { camion = []; }
        this.arrAuto = auto;
        this.arrMoto = moto;
        this.arrCamion = camion;
    }
    // agrega nuevos vehiculos
    Automotor.prototype.nuevoAuto = function (auto) {
        this.arrAuto.push(auto);
    };
    Automotor.prototype.nuevaMoto = function (moto) {
        this.arrMoto.push(moto);
    };
    Automotor.prototype.nuevoCamion = function (camion) {
        this.arrCamion.push(camion);
    };
    // getters
    Automotor.prototype.getAuto = function () {
        return this.arrAuto;
    };
    Automotor.prototype.getMoto = function () {
        return this.arrMoto;
    };
    Automotor.prototype.getCamion = function () {
        return this.arrCamion;
    };
    // elimina los vehiculos segun lo que el usuario eliga 
    Automotor.prototype.deleteVehiculo = function (deleteAuto, deleteMoto, deleteCamion) {
        //verifica si el auto estan en el arreglo 
        if (deleteAuto && this.arrAuto.includes(deleteAuto)) {
            var auto = this.arrAuto.indexOf(deleteAuto);
            // elimina el auto
            if (auto !== -1) {
                this.arrAuto.splice(auto, 1);
            }
        } //verifica si la moto esta en el arreglo
        if (deleteMoto && this.arrMoto.includes(deleteMoto)) {
            var moto = this.arrMoto.indexOf(deleteMoto);
            // elimina la moto 
            if (moto !== -1) {
                this.arrAuto.splice(moto, 1);
            }
        } //verifica si el camion esta en el arreglo
        if (deleteCamion && this.arrCamion.includes(deleteCamion)) {
            var camion = this.arrCamion.indexOf(deleteCamion);
            // elimina el camion
            if (camion !== -1) {
                this.arrAuto.splice(camion, 1);
            }
        }
    };
    return Automotor;
}());
exports.Automotor = Automotor;
