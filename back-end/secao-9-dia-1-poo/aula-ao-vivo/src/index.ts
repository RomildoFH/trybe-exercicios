import Conta from "./Conta";
import Pagamento from "./Pagamento";

const contaCaio = new Conta(5000);

console.log(contaCaio.saldo);

contaCaio.saldo = 9000; // utilizando set saldo, não é comum utilizar desta forma.

console.log(contaCaio.saldo);

contaCaio.debito(7000);

console.log(contaCaio.saldo);

contaCaio.debito(3000); // vai retornar erro pois o saldo neste ponto é de 2000

console.log(contaCaio.saldo);

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const pagamento = new Pagamento(contaCaio, 15.00, amanha, 'cartao');

pagamento.pagar();

const pagamento2 = new Pagamento(contaCaio, 1000.00, amanha, 'boleto');

pagamento2.pagar();

const pagamento3 = new Pagamento(contaCaio, 1000.00, amanha, 'pix');

pagamento3.pagar();