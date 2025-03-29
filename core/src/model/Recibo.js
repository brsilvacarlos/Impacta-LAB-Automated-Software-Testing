"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recibo = void 0;
class Recibo {
    constructor() {
        this._codigo = this.gerarCodigo();
    }
    get codigo() {
        return this._codigo;
    }
    gerarCodigo() {
        return Math.floor(Math.random() * 899999 + 100000).toString();
    }
}
exports.Recibo = Recibo;
