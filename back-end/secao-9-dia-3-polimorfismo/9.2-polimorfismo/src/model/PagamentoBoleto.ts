import IPrestacao from '../interface/IPrestacao';
import Conta from './Conta';
import Pagamento from './Pagamento';

export default class PagamentoBoleto extends Pagamento {
  private _vencimento: Date;
  private _multa: number;
  private _prestacoes: IPrestacao[];

  constructor(
    vencimento: Date,
    conta: Conta,
    valor: number,
    descricao = 'boleto', // já está passando a descrição já que a classe é específica
  ) {
    super(conta, valor, descricao);
    this._vencimento = vencimento;
    this._prestacoes = [];
    this._multa = 0.2;
  }

  public get vencimento(): Date {
    return this._vencimento;
  }
  
  public set vencimento(value: Date) {
    this._vencimento = value;
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

  public pagar() {
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

  private estaVencido() {
    return this._vencimento.getTime() < new Date().getTime();
  }
}