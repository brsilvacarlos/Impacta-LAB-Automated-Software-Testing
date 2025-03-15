import { NegocioErro } from "../error/NegocioErro";

export class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero:string, saldo: number){
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor:number): void {
        if(valor <= 0){
            throw new NegocioErro("valor não pode ser igual ou maior que zero")
        }

        this._saldo -= valor;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public depositar(valor: number) : void {
        if(valor <= 0){
            throw new NegocioErro("valor não pode ser igual ou maior que zero")
        }
        this._saldo += valor;
    }

}