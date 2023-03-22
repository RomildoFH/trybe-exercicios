export default class Conta {
  private _saldo: number;  

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  public get saldo(): number {
    return this._saldo;
  }
  
  public set saldo(value: number) {
    this._saldo = value;
  }
}