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
exports.MemoriaContaRepositorio = void 0;
class MemoriaContaRepositorio {
    constructor() {
        this._dicionario = new Map();
    }
    buscar(numero) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                resolve(this._dicionario.get(numero));
            });
            return promise;
        });
    }
    adicionar(conta) {
        this._dicionario.set(conta.numero, conta);
    }
}
exports.MemoriaContaRepositorio = MemoriaContaRepositorio;
