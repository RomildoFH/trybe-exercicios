import Conta from './model/Conta';
import PagamentoBoleto from './model/PagamentoBoleto';

const contaMirella = new Conta(500);
console.log(contaMirella);

const today: Date = new Date();

const boletoNet = new PagamentoBoleto(today, contaMirella, 100);

boletoNet.pagar();
console.log('Valor a ser pago', boletoNet.valor);
console.log('Saldo restante', contaMirella.saldo);