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
describe('Transferência Serviço', () => {
    test('Transferir com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const { repositorio, contaOrigem, contaDestino } = criarMock();
        const dto = new TransferenciaDTO_1.TransferenciaDTO('123456', '654321', 100);
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const recibo = yield transferenciaServico.transferir(dto);
        expect(repositorio.buscar).toBeCalledWith("123456");
        expect(repositorio.buscar).toBeCalledWith("654321");
        expect(repositorio.buscar).toBeCalledTimes(2);
        expect(repositorio.adicionar).toBeCalledWith(contaOrigem);
        expect(repositorio.adicionar).toBeCalledWith(contaDestino);
        expect(repositorio.adicionar).toBeCalledTimes(2);
        const contaOrigemRepositorio = yield repositorio.buscar('123456');
        const contaDestinoRepositorio = yield repositorio.buscar('654321');
        expect(contaOrigemRepositorio.saldo).toBe(4900);
        expect(contaDestinoRepositorio.saldo).toBe(5100);
        expect(recibo.length).toBe(6);
    }));
    test("conta de origem não encontrada", () => __awaiter(void 0, void 0, void 0, function* () {
        const { repositorio } = criarMock();
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const dto = new TransferenciaDTO_1.TransferenciaDTO("111111", "654321", 100.0);
        yield expect(transferenciaServico.transferir(dto)).rejects.toEqual(Error("conta de origem não encontrada"));
        expect(repositorio.buscar).toBeCalledWith("111111");
        expect(repositorio.buscar).toBeCalledWith("654321");
        expect(repositorio.buscar).toBeCalledTimes(2);
        expect(repositorio.adicionar).not.toBeCalled();
    }));
    test("conta de destino não encontrada", () => __awaiter(void 0, void 0, void 0, function* () {
        const { repositorio } = criarMock();
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(repositorio);
        const dto = new TransferenciaDTO_1.TransferenciaDTO("123456", "222222", 100.0);
        yield expect(transferenciaServico.transferir(dto)).rejects.toEqual(Error("conta de destino não encontrada"));
        expect(repositorio.buscar).toBeCalledWith("123456");
        expect(repositorio.buscar).toBeCalledWith("222222");
        expect(repositorio.buscar).toBeCalledTimes(2);
        expect(repositorio.adicionar).not.toBeCalled();
    }));
});
function criarMock() {
    const dicionario = new Map();
    const contaOrigem = new Conta_1.Conta("123456", 5000);
    const contaDestino = new Conta_1.Conta("654321", 5000);
    dicionario.set(contaOrigem.numero, contaOrigem);
    dicionario.set(contaDestino.numero, contaDestino);
    const repositorio = {
        adicionar: jest.fn((entidade) => {
            dicionario.set(entidade.numero, entidade);
        }),
        buscar: jest.fn((numero) => {
            const promise = new Promise((resolve, reject) => {
                resolve(dicionario.get(numero));
            });
            return promise;
        })
    };
    return { repositorio, contaOrigem, contaDestino };
}
