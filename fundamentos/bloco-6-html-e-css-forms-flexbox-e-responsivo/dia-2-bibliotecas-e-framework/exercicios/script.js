const btnEnviar = document.getElementById('btn-enviar')
let nome = document.getElementById('nome-viajante')
const btnApagar = document.getElementById('btn-apagar')

function cancelarEnvio (event) {
    event.preventDefault();
    console.log(nome);
}

btnEnviar.addEventListener('click', cancelarEnvio);
btnApagar.addEventListener('click', cancelarEnvio);