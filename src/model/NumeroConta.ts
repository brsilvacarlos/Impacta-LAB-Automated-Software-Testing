export class NumeroConta{

    private _numero:string;

    public constructor(numero: string){
        this._numero = numero;
    }

    public get numero(): string {
        return this._numero;
    }
}