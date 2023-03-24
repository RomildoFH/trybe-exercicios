import Conta from './Conta';
import Pagamento from './Pagamento';

export default class PagamentoPix extends Pagamento {
  private _chavePix: string;
  constructor(
    conta: Conta,
    valor:number,
    chavePix: string,
    descricao = 'pix',
  ) { 
    super(conta, valor, descricao);
    this._chavePix = chavePix;
    this.pagar(); // executando o método pagar na criação do objeto
  }

  public pagar() {
    console.log('Pagando via PIX');
    console.log('Código da transação: ', this.gerarCodigo());
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('Valor do dolar: ', this.valorDoDorlar());
    console.log('-------------------------------');
  }

  protected gerarCodigo(): string {
    return `${this._chavePix}-${this.descricao}`;
  }
}