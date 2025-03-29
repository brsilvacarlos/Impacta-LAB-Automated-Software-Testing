"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroConta = void 0;
const NegocioErro_1 = require("../error/NegocioErro");
class NumeroConta {
    constructor(numero) {
        this.validar(numero);
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    validar(numero) {
        if (!this.temSeisDigitos(numero)) {
            throw new NegocioErro_1.NegocioErro("número de conta inválida");
        }
    }
    temSeisDigitos(numero) {
        const regExp = /^\d{6}$/;
        return regExp.test(numero);
    }
}
exports.NumeroConta = NumeroConta;
