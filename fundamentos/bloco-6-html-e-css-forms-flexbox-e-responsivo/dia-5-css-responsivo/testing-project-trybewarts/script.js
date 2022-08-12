let emailInput = document.getElementById('email');
let senhaInput = document.getElementById('password');
let btnEntrar = document.getElementById('btn-entrar');
let arrayEmail = ['tryber@teste.com'];
let arraySenha = ['123456'];
let btnEnviar = document.getElementById('submit-btn');
let agreement = document.getElementById('agreement');
let caracteres = document.getElementById('counter');
let comentarioCampo = document.getElementById('espaco-comentario');
let formData = document.getElementById('form-data');
let formName = document.getElementById('input-name');
let formSobrenome = document.getElementById('input-lasname');
let formEmail = document.getElementById('input-email');
let formCasa = document.getElementById('house');



//Criando função para validar o login de acesso
function validarLogin () {
    let emailValue = emailInput.value;
    let senhaValue = senhaInput.value;
    for(let index = 0; index < arrayEmail.length; index ++) {
        if (emailValue === arrayEmail[index] && senhaValue === arraySenha[index]) {
            alert("Olá, Tryber!")
        } else {
            alert("Email ou senha inválidos.")
        }
    }
}
btnEntrar.addEventListener('click', validarLogin);

//Crinado função para bloquear botão enviar sem validação dos dados
btnEnviar.addEventListener('click', function validate (event) {
    if (agreement.checked !== true) {          
            event.preventDefault();        
    }
});

//Criando função decrementar contador
function contagem () {
    let restante = parseInt(caracteres.innerHTML);
    comentarioCampo.addEventListener('keyup', function () {
        if (comentarioCampo.value.length !== 0) {
            let sub = 500 - comentarioCampo.value.length
            caracteres.innerHTML = sub
        } else {
            caracteres.innerHTML = "500"
        }
    });    
}
contagem ()