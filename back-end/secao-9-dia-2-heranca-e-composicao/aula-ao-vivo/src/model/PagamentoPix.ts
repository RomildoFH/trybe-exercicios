import Conta from './Conta';
import Pagamento from './Pagamento';

export default class PagamentoPix extends Pagamento {
  constructor(conta: Conta, valor: number, descricao = 'pix') { 
    super(conta, valor, descricao);
    this.pagar(); // executando o método pagar na criação do objeto
  }

  public pagar() {
    console.log('Pagando via PIX');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('-------------------------------');
  }
}