"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cucumber_tsflow_1 = require("cucumber-tsflow");
const assert_1 = __importDefault(require("assert"));
const MemoriaContaRepositorio_1 = require("../../__tests__/fake/MemoriaContaRepositorio");
const Conta_1 = require("../../src/model/Conta");
const TransferenciaServico_1 = require("../../src/application/TransferenciaServico");
const TransferenciaDTO_1 = require("../../src/application/dto/TransferenciaDTO");
let TransferenciaServicoStep = class TransferenciaServicoStep {
    constructor() {
        this.repositorio = new MemoriaContaRepositorio_1.MemoriaContaRepositorio();
    }
    dadaDuasContas(numeroOrigem, saldoOrigem, numeroDestino, saldoDestino) {
        const contaOrigem = new Conta_1.Conta(numeroOrigem, saldoOrigem);
        const contaDestino = new Conta_1.Conta(numeroDestino, saldoDestino);
        this.repositorio.adicionar(contaOrigem);
        this.repositorio.adicionar(contaDestino);
    }
    quandoTransferirValores(numeroOrigem, valor, numeroDestino) {
        const transferenciaServico = new TransferenciaServico_1.TransferenciaServico(this.repositorio);
        const dto = new TransferenciaDTO_1.TransferenciaDTO(numeroOrigem, numeroDestino, valor);
        transferenciaServico.transferir(dto);
    }
    entaoSaldoDeveSer(numeroOrigem, resultadoOrigem, numeroDestino, resultadoDestino) {
        return __awaiter(this, void 0, void 0, function* () {
            const contaOrigem = yield this.repositorio.buscar(numeroOrigem);
            const contaDestino = yield this.repositorio.buscar(numeroDestino);
            assert_1.default.equal(contaOrigem.saldo, resultadoOrigem);
            assert_1.default.equal(contaDestino.saldo, resultadoDestino);
        });
    }
};
__decorate([
    (0, cucumber_tsflow_1.given)("conta {string} com saldo {float} e a conta {string} com saldo {float}")
], TransferenciaServicoStep.prototype, "dadaDuasContas", null);
__decorate([
    (0, cucumber_tsflow_1.when)("a conta {string} transferir {float} para a conta {string}")
], TransferenciaServicoStep.prototype, "quandoTransferirValores", null);
__decorate([
    (0, cucumber_tsflow_1.then)("o saldo da conta {string} deve ser {float} e a conta {string} {float}")
], TransferenciaServicoStep.prototype, "entaoSaldoDeveSer", null);
TransferenciaServicoStep = __decorate([
    (0, cucumber_tsflow_1.binding)()
], TransferenciaServicoStep);
module.exports = TransferenciaServico_1.TransferenciaServico;
