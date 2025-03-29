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
const Recibo_1 = require("../../src/model/Recibo");
describe('Recibo', () => {
    test('Criar com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const recibo = new Recibo_1.Recibo();
        expect(recibo.codigo.length).toBe(6);
    }));
    test("criar recibos diferentes", () => __awaiter(void 0, void 0, void 0, function* () {
        const recibo1 = new Recibo_1.Recibo();
        const recibo2 = new Recibo_1.Recibo();
        expect(recibo1.codigo).not.toBe(recibo2.codigo);
    }));
    test("criar recibos com código positivo", () => {
        const recibo1 = new Recibo_1.Recibo();
        const recibo2 = new Recibo_1.Recibo();
        expect(BigInt(recibo1.codigo).valueOf()).toBeGreaterThan(0);
        expect(BigInt(recibo2.codigo).valueOf()).toBeGreaterThan(0);
    });
});
