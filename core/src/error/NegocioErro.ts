export class NegocioErro extends Error {

    constructor(mensagem: string){
        super(mensagem);
        Object.setPrototypeOf(this, NegocioErro.prototype);
    }

}