import { Conta } from "../../../src/model/Conta";
import { TransferenciaValor } from "../../../src/model/servico/TransferenciaValor";

describe('TransferenciaValor', () => {
    test('Transferir com sucesso', async()=> {
        
        const contaOrigem: Conta =  new Conta('123456', 5000.0);
        const contaDestino: Conta =  new Conta('123456', 5000.0);

        const transferenciaValor:TransferenciaValor = new TransferenciaValor();

        transferenciaValor.transferir(contaOrigem, contaDestino, 100.0);

        expect(contaOrigem.saldo).toBe(4900.0);
        expect(contaDestino.saldo).toBe(5100.0);
    })
})