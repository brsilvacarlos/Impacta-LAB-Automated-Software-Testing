"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferenciaValor = void 0;
const Recibo_1 = require("../Recibo");
class TransferenciaValor {
    transferir(contaOrigem, contaDestino, valor) {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        return new Recibo_1.Recibo();
    }
}
exports.TransferenciaValor = TransferenciaValor;
