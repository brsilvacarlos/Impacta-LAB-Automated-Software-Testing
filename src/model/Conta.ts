import { NegocioErro } from "../error/NegocioErro";
import { NumeroConta } from "./NumeroConta";

export class Conta {
    private _numero: NumeroConta;
    private _saldo: number;

    constructor(numero:string, saldo: number){
        this._numero = new NumeroConta(numero);
        this._saldo = saldo;
    }

    public sacar(valor:number): void {
        this.validarValor(valor);

        this._saldo -= valor;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public depositar(valor: number) : void {
        this.validarValor(valor);
        this._saldo += valor;
    }

    private validarValor(valor: number){
        if(valor <= 0){
            throw new NegocioErro("valor não pode ser igual ou maior que zero")
        }
        if(valor > this.saldo){
            throw new NegocioErro("saldo indisponível para operação")
        }
    }

}