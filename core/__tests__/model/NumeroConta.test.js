"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumeroConta_1 = require("../../src/model/NumeroConta");
describe('NumeroConta', () => {
    test('conta com seis dígitos', () => {
        const numeroConta = new NumeroConta_1.NumeroConta('123456');
        expect(numeroConta.numero).toBe('123456');
        expect(numeroConta.numero.length).toBe(6);
    });
    test('conta com cinco dígitos', () => {
        expect(() => { new NumeroConta_1.NumeroConta('12345'); }).toThrow('número de conta inválida');
    });
    test('conta com sete dígitos', () => {
        expect(() => { new NumeroConta_1.NumeroConta('1234567'); }).toThrow('número de conta inválida');
    });
    test('conta com valor que não sejam dígitos', () => {
        expect(() => { new NumeroConta_1.NumeroConta('abc123'); }).toThrow('número de conta inválida');
    });
});
