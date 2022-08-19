/*
Desenvolva uma função que imprima uma mensagem de saudação
*/
// Função para criar a saudação
const greeting = (name) => `Oi ${name}, tudo bem?`;
const formalGreeting = (name) => `Oi ${name}, como vai vossa senhoria?`;
const greeting25b = (name) => `Oi ${name}, bão de mais?`;



const printGreeting = (name, callbackGreeting) => {
    const greeting = callbackGreeting(name);

    console.log(greeting);
}

printGreeting('Romildo', greeting);
printGreeting('Romildo', formalGreeting);
printGreeting('Romildo', greeting25b);