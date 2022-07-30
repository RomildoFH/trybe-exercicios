


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// console.log('R.: A caixa verde está com a className tech, onde é aplicada um translationY de -20px, fazendo ela subir')

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');

let arrayLinhas = document.querySelectorAll('li');

// firstLi.addEventListener("click", recebeClick);
// secondLi.addEventListener("click", recebeClick);
// thirdLi.addEventListener("click", recebeClick);

//Este for substitui as linhas acima, adicionando o evento a cada li do array:
for (var index = 0; index < arrayLinhas.length; index ++){
    arrayLinhas[index].addEventListener("click", recebeClick);
}

function recebeClick(eventoDeOrigem) {
    //console.log utilizado para verificar funcionamento do click:
    // console.log(eventoDeOrigem.target);
    // console.log(eventoDeOrigem.type);

    //Criando uma variável para armazenar o elemento clicado e atribuindo a classe tech a mesma:
    let elementoClicado = eventoDeOrigem.target;
    eventoDeOrigem.target.classList.add('tech');

    //Este for está retirando a classe tech de qualquer outro elemento do array que não seja o elementoClicado:
    for (var index = 0; index < arrayLinhas.length; index ++){
        if (arrayLinhas[index] !== elementoClicado){
            arrayLinhas[index].classList.remove('tech');
        }
    }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
    const input = document.getElementById('input');
    input.addEventListener('input', function (evento){
        let elementoTech = document.querySelector('.tech');
        elementoTech.innerHTML = evento.target.value;
    })

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
    const myWebpage = document.getElementById('my-spotrybefy');

    myWebpage.addEventListener('dblclick', function (evento){
    //Este método transforma o texto em link (necessário 3 clicks):
    // myWebpage.innerHTML = '<a target = "_blank" href = "https://romildofh.github.io/">Meu top 3 do Spotrybefy</a>'

    //Esta função abrirá a url informada em nova aba:
    window.open("https://romildofh.github.io/", "_blank")

    })

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
    myWebpage.addEventListener('mouseover', function (evento){
        console.log("mouse em cima");
        myWebpage.style.color = 'yellow';
    })
    //Evento adicionado para voltar a cor branca:
    myWebpage.addEventListener('mouseleave', function (evento){
        console.log("mouse saiu");
        myWebpage.style.color = 'white';
    })

// // Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// // Não precisa passar o parâmetro dentro da callback resetText. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'firstLi'.