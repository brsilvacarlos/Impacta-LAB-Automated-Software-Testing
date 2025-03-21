import { NumeroConta } from "../../src/model/NumeroConta";

describe('NumeroConta', () => {
    test('conta com seis dígitos', () => {
        const numeroConta: NumeroConta = new NumeroConta('123456');
        expect(numeroConta.numero).toBe('123456');
        expect(numeroConta.numero.length).toBe(6);
    });
})