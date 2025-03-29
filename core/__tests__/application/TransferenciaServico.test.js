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
const TransferenciaDTO_1 = require("../../src/application/dto/TransferenciaDTO");
const TransferenciaServico_1 = require("../../src/application/TransferenciaServico");
const Conta_1 = require("../../src/model/Conta");
const MemoriaContaRepositorio_1 = require("../fake/MemoriaContaRepositorio");
describe('Transferência Serviço', () => {
    test('Transferir com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const repositorio = criarContaRepositorio();
        const dto = new TransferenciaDTO_1.TransferenciaDTO('123456', '654321', 100);
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const recibo = yield transferenciaServico.transferir(dto);
        const contaOrigemRepositorio = yield repositorio.buscar('123456');
        const contaDestinoRepositorio = yield repositorio.buscar('654321');
        expect(contaOrigemRepositorio.saldo).toBe(4900);
        expect(contaDestinoRepositorio.saldo).toBe(5100);
        expect(recibo.length).toBe(6);
    }));
    test("conta de origem não encontrada", () => __awaiter(void 0, void 0, void 0, function* () {
        const repositorio = criarContaRepositorio();
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const dto = new TransferenciaDTO_1.TransferenciaDTO("111111", "654321", 100.0);
        yield expect(transferenciaServico.transferir(dto)).rejects.toEqual(Error("conta de origem não encontrada"));
    }));
    test("conta de destino não encontrada", () => __awaiter(void 0, void 0, void 0, function* () {
        const repositorio = criarContaRepositorio();
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const dto = new TransferenciaDTO_1.TransferenciaDTO("123456", "222222", 100.0);
        yield expect(transferenciaServico.transferir(dto)).rejects.toEqual(Error("conta de destino não encontrada"));
    }));
});
function criarContaRepositorio() {
    const repositorio = new MemoriaContaRepositorio_1.MemoriaContaRepositorio();
    const contaOrigem = new Conta_1.Conta("123456", 5000);
    const contaDestino = new Conta_1.Conta("654321", 5000);
    repositorio.adicionar(contaOrigem);
    repositorio.adicionar(contaDestino);
    return repositorio;
}
