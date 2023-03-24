import Conta from './Conta';
import Pagamento from './Pagamento';

export default class PagamentoCartao extends Pagamento {
  constructor(conta: Conta, valor: number, descricao = 'cartão') { 
    super(conta, valor, descricao);
  }

  public pagar() {
    console.log('Pagando via Cartão');
    console.log('Código da Trasação: ', this.gerarCodigo());
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
    console.log('-------------------------------');
  }
}