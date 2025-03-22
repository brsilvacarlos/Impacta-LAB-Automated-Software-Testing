import { Recibo } from "../../src/model/Recibo";

describe('Recibo', () => {

    test('Criar com sucesso', async() => {
        const recibo: Recibo = new Recibo();
        expect(recibo.codigo.length).toBe(6);
    });
})