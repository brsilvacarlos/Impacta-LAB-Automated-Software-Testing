import { TransferenciaDTO } from "../../src/application/TransferenciaDTO";
import { TransferenciaServico } from "../../src/application/TransferenciaServico";
import { Conta } from "../../src/model/Conta";
import { Repositorio } from "../../src/model/contract/Repositorio";
import { MemoriaContaRepositorio } from "../fake/MemoriaContaRepositorio";

describe('Transferência Serviço', () => {
    test('Transferir com sucesso', async () => {
        const repositorio: Repositorio<string, Conta> = new MemoriaContaRepositorio();
        const contaOrigem:Conta = new Conta('123456', 5000);
        const contaDestino:Conta = new Conta('654321', 5000);

        repositorio.adicionar(contaOrigem);
        repositorio.adicionar(contaDestino);

        const dto: TransferenciaDTO = new TransferenciaDTO('123456', '654321', 100);

        const transferenciaServico: TransferenciaServico = new TransferenciaServico(repositorio);
        const recibo: string = await transferenciaServico.transferir(dto);

        const contaOrigemRepositorio = await repositorio.buscar('123456');
        const contaDestinoRepositorio = await repositorio.buscar('654321');

        expect(contaOrigemRepositorio!.saldo).toBe(4900);
        expect(contaDestinoRepositorio!.saldo).toBe(5100);
        expect(recibo.length).toBe(6)
    })
})