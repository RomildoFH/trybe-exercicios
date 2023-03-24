export default class Conta {
  private _saldo: number;  

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  public get saldo(): number {
    return this._saldo;
  }
  
  public set saldo(valor: number) {
    this._saldo = valor;
  }

  public debito(valor: number) {
    try {
      if (this._saldo < valor) {
        throw new Error('Saldo Insuficiente');
      }    
      this._saldo -= valor;
    } catch (error) {
      console.log(String(error));
    }
  }
}