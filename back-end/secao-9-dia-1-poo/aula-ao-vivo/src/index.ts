import Conta from "./Conta";

const contaCaio = new Conta(5000);

console.log(contaCaio.saldo);

contaCaio.saldo = 9000;

console.log(contaCaio.saldo);