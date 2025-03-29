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
exports.TransferenciaServico = void 0;
const NegocioErro_1 = require("../error/NegocioErro");
const TransferenciaValor_1 = require("../model/servico/TransferenciaValor");
class TransferenciaServico {
    constructor(repositorio) {
        this._repositorio = repositorio;
    }
    transferir(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const contaOrigem = yield this._repositorio.buscar(dto.contaOrigem);
            const contaDestino = yield this._repositorio.buscar(dto.contaDestino);
            if (!contaOrigem)
                throw new NegocioErro_1.NegocioErro("conta de origem não encontrada");
            if (!contaDestino)
                throw new NegocioErro_1.NegocioErro("conta de destino não encontrada");
            const transferencia = new TransferenciaValor_1.TransferenciaValor();
            const recibo = transferencia.transferir(contaOrigem, contaDestino, dto.valor);
            this._repositorio.adicionar(contaOrigem);
            this._repositorio.adicionar(contaDestino);
            return recibo.codigo;
        });
    }
}
exports.TransferenciaServico = TransferenciaServico;
