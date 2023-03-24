import Conta from './model/Conta';
import Pagamento from './model/Pagamento';
import PagamentoBoleto from './model/PagamentoBoleto';
import PagamentoCartao from './model/PagamentoCartao';
import PagamentoPix from './model/PagamentoPix';

const TEXTO_SALDO = 'Saldo restante';

const contaMirella = new Conta(500);
console.log(contaMirella);

const today: Date = new Date();

const boletoNet = new PagamentoBoleto(today, contaMirella, 100);
console.log('----PAGAMENTO BOLETO----');
boletoNet.pagar();
console.log('Valor a ser pago', boletoNet.valor);
console.log(TEXTO_SALDO, contaMirella.saldo);

const cartaoNetFlix = new PagamentoCartao(contaMirella, 29, 'cartão');
console.log('----PAGAMENTO CARTÃO----');
cartaoNetFlix.pagar();
console.log(cartaoNetFlix);
console.log(TEXTO_SALDO, contaMirella.saldo);

console.log('----PAGAMENTO PIX----');
const pixLavagemCarro = new PagamentoPix(contaMirella, 70, '87999241374');
console.log(pixLavagemCarro);
console.log(TEXTO_SALDO, contaMirella.saldo);

// const pagamentoGenerico = new Pagamento(contaMirella, 1, 'genérico'); // classe abstrata não permite ser instanciada
// pagamentoGenerico.pagar();
// console.log('Saldo conta =', pagamentoGenerico, contaMirella.saldo);

console.log(pixLavagemCarro.valorDoDorlar());

console.log('Quantos pagamentos foram gerados');
console.log(Pagamento.pagamentosGerados);