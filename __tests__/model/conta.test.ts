import { Conta } from "../../src/model/Conta";


describe('Conta', () => {

    test('sacar com sucesso', async () => {
        const conta: Conta = criarConta();
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.0);

    });

    test('sacar com valor zerado', async () => {
        const conta: Conta = criarConta();
        expect(() => conta.sacar(0)).toThrow('valor não pode ser igual ou maior que zero')
    });

    test('sacar com valor negativo', async () => {
        const conta: Conta = criarConta();
        expect(() => conta.sacar(-5.0)).toThrow('valor não pode ser igual ou maior que zero')
    });

    test('sacar valor acima do saldo', async () => {
        const conta: Conta = criarContaSaldo199();
        expect(() => conta.sacar(200.0)).toThrow('saldo indisponível para operação')
    });
    
    test('depositar com sucesso', async () => {
        const conta: Conta = criarConta();
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.0);
    });

    test('depositar com valor zerado', async () => {
        const conta: Conta = criarConta();
        expect(() => conta.depositar(0.0)).toThrow('valor não pode ser igual ou maior que zero')
    });

    test('depositar com valor negativo', async () => {
        const conta: Conta = criarConta();
        expect(() => conta.depositar(-5.0)).toThrow('valor não pode ser igual ou maior que zero')
    });

    test("sacar todo o saldo", async () => {	
        const conta: Conta = criarConta();	
        conta.sacar(5000.0);	
        expect(conta.saldo).toBe(0);	
      });	
    

});

function criarConta(): Conta{
    return new Conta("123456", 5000.0)
}

function criarContaSaldo199(): Conta{
    return new Conta("123456", 199.0)
}
