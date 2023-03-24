import Conta from './model/Conta';
// import Pagamento from './model/Pagamento';
import PagamentoBoleto from './model/PagamentoBoleto';
import PagamentoCartao from './model/PagamentoCartao';
import PagamentoPix from './model/PagamentoPix';

const contaMirella = new Conta(500);
console.log(contaMirella);

const today: Date = new Date();

const boletoNet = new PagamentoBoleto(today, contaMirella, 100);

boletoNet.pagar();
console.log('Valor a ser pago', boletoNet.valor);
console.log('Saldo restante', contaMirella.saldo);

const cartaoNetFlix = new PagamentoCartao(contaMirella, 29, 'cartão');
cartaoNetFlix.pagar();

console.log(cartaoNetFlix);
console.log('Saldo restante', contaMirella.saldo);

const pixLavagemCarro = new PagamentoPix(contaMirella, 70);
console.log(pixLavagemCarro);
console.log('Saldo restante', contaMirella.saldo);

// const pagamentoGenerico = new Pagamento(contaMirella, 1, 'genérico'); // classe abstrata não permite ser instanciada
// pagamentoGenerico.pagar();
// console.log('Saldo conta =', pagamentoGenerico, contaMirella.saldo);

console.log(pixLavagemCarro.valorDoDorlar());