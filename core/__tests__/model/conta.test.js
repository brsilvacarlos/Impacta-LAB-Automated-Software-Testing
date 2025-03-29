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
const Conta_1 = require("../../src/model/Conta");
describe("Conta", () => {
    test("sacar com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.00);
    }));
    test("sacar com valor zerado", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        expect(() => { conta.sacar(0); }).toThrow("valor não pode ser igual ou menor que zero");
    }));
    test("sacar com valor negativo", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        expect(() => { conta.sacar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
    }));
    test("sacar valor acima do saldo", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarContaSaldo199();
        expect(() => { conta.sacar(200.0); }).toThrow("saldo indisponível para operação");
    }));
    test("sacar todo saldo", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        conta.sacar(5000.0);
        expect(conta.saldo).toBe(0);
    }));
    test("depositar com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.00);
    }));
    test("depositar com valor zerado", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        expect(() => { conta.depositar(0); }).toThrow("valor não pode ser igual ou menor que zero");
    }));
    test("depositar com valor negativo", () => __awaiter(void 0, void 0, void 0, function* () {
        const conta = criarConta();
        expect(() => { conta.depositar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
    }));
});
function criarConta() {
    return new Conta_1.Conta("123456", 5000.0);
}
;
function criarContaSaldo199() {
    return new Conta_1.Conta("123456", 199.0);
}
;
