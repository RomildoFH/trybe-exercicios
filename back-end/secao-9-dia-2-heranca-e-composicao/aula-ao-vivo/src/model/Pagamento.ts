/* eslint-disable max-params */
import Conta from './Conta';
import IPrestacao from '../interface/IPrestacao';

export default class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _vencimento: Date;
  private _descricao: string;
  private _multa: number;
  private _prestacoes: IPrestacao[];

  constructor(
    conta: Conta,
    valor: number,
    vencimento: Date,
    descricao: string,
  ) {
    this._conta = conta;
    this._valor = valor;
    this._vencimento = vencimento;
    this._descricao = descricao;
    this._multa = 0.2;
    this._prestacoes = [];
  }

  get conta() {
    return this._conta;
  }

  get valor() {
    return this._valor;
  }

  set valor(value: number) {
    this._valor = value;
  }

  public get vencimento(): Date {
    return this._vencimento;
  }
  
  public set vencimento(value: Date) {
    this._vencimento = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get multa(): number {
    return this._multa;
  }
  
  public set multa(value: number) {
    this._multa = value;
  }

  public get prestacoes(): IPrestacao[] {
    return this._prestacoes;
  }

  public set prestacoes(value: IPrestacao[]) {
    if (value.length > 10) {
      throw new Error('Parcelamento não pode ser maior que 10');
    }
    this._prestacoes = value;
  }

  private pagarBoleto() {
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this.vencimento);
    console.log('Multa:', this.multa);
    console.log('Processando pagamento ...');

    if (this.estaVencido()) {
      this.valor += (this.valor * this.multa);
    }

    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('-------------------------------');
  }

  private pagarCartao() {
    console.log('Pagando via Cartão');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('-------------------------------');
  }

  private pagarPix() {
    console.log('Pagando via PIX');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('-------------------------------');
  }

  public pagar() {
    // if (!['boleto', 'cartao', 'pix'].includes(this._descricao)) {
    //   throw new Error('Forma de pagamento não aceita');
    // }

    if (this._descricao === 'boleto') {
      return this.pagarBoleto();
    }

    if (this._descricao === 'cartao') {
      return this.pagarCartao();
    }

    if (this._descricao === 'pix') {
      return this.pagarPix();
    }
  }

  private estaVencido() {
    return this._vencimento.getTime() < new Date().getTime();
  }
}