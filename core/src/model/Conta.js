"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const NegocioErro_1 = require("../error/NegocioErro");
const NumeroConta_1 = require("./NumeroConta");
class Conta {
    constructor(numero, saldo) {
        this._numero = new NumeroConta_1.NumeroConta(numero);
        this._saldo = saldo;
    }
    sacar(valor) {
        this.validarValor(valor);
        if (valor > this._saldo)
            throw new NegocioErro_1.NegocioErro('saldo indisponível para operação');
        this._saldo -= valor;
    }
    get saldo() {
        return this._saldo;
    }
    get numero() {
        return this._numero.numero;
    }
    depositar(valor) {
        this.validarValor(valor);
        this._saldo += valor;
    }
    validarValor(valor) {
        if (valor <= 0) {
            throw new NegocioErro_1.NegocioErro("valor não pode ser igual ou menor que zero");
        }
    }
}
exports.Conta = Conta;
