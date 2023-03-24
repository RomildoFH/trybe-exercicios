/* eslint-disable max-params */
import Conta from './Conta';

export default abstract class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _descricao: string;
  private _dolar: number;

  constructor(
    conta: Conta,
    valor: number,
    descricao: string,
  ) {
    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao;
    this._dolar = 5.14;
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

  protected abstract pagar(): void; // como a classe é abstrata seus métodos não têm implementação

  public valorDoDorlar(): number {
    return this._dolar;
  }
}