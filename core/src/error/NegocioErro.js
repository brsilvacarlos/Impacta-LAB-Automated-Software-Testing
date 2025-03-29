"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegocioErro = void 0;
class NegocioErro extends Error {
    constructor(mensagem) {
        super(mensagem);
        Object.setPrototypeOf(this, NegocioErro.prototype);
    }
}
exports.NegocioErro = NegocioErro;
