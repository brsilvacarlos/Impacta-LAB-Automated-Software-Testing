"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = require("../../../src/model/Conta");
const TransferenciaValor_1 = require("../../../src/model/servico/TransferenciaValor");
describe('TransferenciaValor', () => {
    test('Transferir com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const contaOrigem = new Conta_1.Conta('123456', 5000.0);
        const contaDestino = new Conta_1.Conta('654321', 5000.0);
        const transferenciaValor = new TransferenciaValor_1.TransferenciaValor();
        const recibo = transferenciaValor.transferir(contaOrigem, contaDestino, 100.0);
        expect(contaOrigem.saldo).toBe(4900.0);
        expect(contaDestino.saldo).toBe(5100.0);
        expect(recibo.codigo.length).toBe(6);
    }));
});
