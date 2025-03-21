import { NumeroConta } from "../../src/model/NumeroConta";

describe('NumeroConta', () => {
    test('conta com seis dígitos', () => {
        const numeroConta: NumeroConta = new NumeroConta('123456');
        expect(numeroConta.numero).toBe('123456');
        expect(numeroConta.numero.length).toBe(6);
    });
    
    
    test('conta com cinco dígitos', () => {
        expect(()=> { new NumeroConta('12345'); }).toThrow('número de conta inválida')
    });

    test('conta com sete dígitos', () => {
        expect(()=> { new NumeroConta('1234567'); }).toThrow('número de conta inválida')
    });

    test('conta com valor que não sejam dígitos', () => {
        expect(()=> { new NumeroConta('abc123'); }).toThrow('número de conta inválida')
    });
})