/* eslint-disable max-params */
import Conta from './Conta';

export default class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _descricao: string;

  constructor(
    conta: Conta,
    valor: number,
    descricao: string,
  ) {
    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao;
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

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  // public pagar() {
  //   }
  // }
}