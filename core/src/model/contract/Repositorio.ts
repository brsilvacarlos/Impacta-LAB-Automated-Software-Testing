import { Conta } from "../Conta"

export interface Repositorio<I, T>{
    buscar(campo:I):Promise<T | undefined>
    adicionar(conta:T):void
}