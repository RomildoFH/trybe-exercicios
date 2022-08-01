function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   🚀 Exercício 1:
//   Crie um calendário dinamicamente.
//   O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//   Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//   A tag <ul> deve conter o id 'days';
//   Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
//   Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
//   Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
//   let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function daysCreat (decemberDaysList){
    let ulDays = document.querySelector('#days');
    for (var index = 0; index < decemberDaysList.length; index ++) {
        let liDay = document.createElement('li');
            liDay.innerHTML = decemberDaysList[index];
        if (index === 5 || index === 12 || index === 19){
            liDay.className = 'day friday';
        } else if (index === 25 || index === 32) {
            liDay.className = 'day holiday';
        } else if (index === 26) {
            liDay.className = 'day holiday friday'
        } else {
            liDay.className = 'day';
        }
        ulDays.appendChild(liDay);
        }
}
daysCreat([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

//   🚀 Exercício 2:
//   Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//   Sua função deve receber um parâmetro com a string 'Feriados'
//   Adicione a este botão a ID "btn-holiday"
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function createHolyDayButton (text) {
    let botaoFeriado = document.createElement('button');
    let buttonsContainer = document.querySelector('.buttons-container');
    botaoFeriado.innerHTML = text;
    botaoFeriado.className = 'btn-holiday';
    buttonsContainer.appendChild(botaoFeriado);
}
createHolyDayButton ('Feriados');

//   🚀 Exercício 3:
//   Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//   Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
//   👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function mostrarFeriados () {
const botaoFeriados = document.getElementsByClassName('btn-holiday');
botaoFeriados[0].addEventListener('click', function feriadosColor () {    
    let feriados = document.getElementsByClassName('holiday');
    for (let index = 0; index < feriados.length; index ++) {
        if (feriados[index].style.backgroundColor === 'yellow') {  
            feriados[index].style.backgroundColor = '#eee';          
        } else {
            feriados[index].style.backgroundColor = 'yellow';
        }
    }
})
}
mostrarFeriados ();

//   🚀 Exercício 4:
//   Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
//   Adicione a esse botão o ID "btn-friday";
//   Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
function createFridayButton (text) {
    let botaoSexta = document.createElement('button');
    let buttonsContainer = document.querySelector('.buttons-container');
    botaoSexta.innerHTML = text;
    botaoSexta.id = 'btn-friday';
    buttonsContainer.appendChild(botaoSexta);
    }    
createFridayButton ('Sexta-feira');

//   🚀 Exercício 5:
//   Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//   👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
let fridaysArray = [4, 11, 18, 25];

function mostrarSextas (fridaysArray) {
    let getBotaoSexta = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'Sextoouu';

    getBotaoSexta.addEventListener('click', function () {
        for (let index = 0; index < fridays.length; index ++) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;
            } else {
                fridays[index].innerHTML = fridaysArray[index];
            }
        }
    });
}
mostrarSextas (fridaysArray);

//   🚀 Exercício 6:
//   Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//   Dica - Propriedade: event.target.
function zoomIn () {
    let days = document.querySelector('#days'); // pegando a ul
    days.addEventListener('mouseover', function (evento) {
        evento.target.style.fontSize = '30px';
        evento.target.style.fontWeight = "500";
    })    
}
zoomIn ();

function zoomOut () {
    let days = document.querySelector('#days'); // pegando a ul
    days.addEventListener('mouseout', function (evento) {
        evento.target.style.fontSize = '20px';
        evento.target.style.fontWeight = "100";
    })    
}
zoomOut ();

//   🚀 Exercício 7:
//   Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//   O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask (task) {
    let myTasks = document.querySelector('.my-tasks');
    let newTask = document.createElement('span');
    newTask.innerHTML = task;
    myTasks.appendChild(newTask);   
}
addTask ('Atividade 1');

//   🚀 Exercício 8:
//   Implemente uma função que adicione uma legenda com cor para a tarefa.
//   * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//   O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//   O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
  }
  newTaskDiv ('green');

//   🚀 Exercício 9:
//   Implemente uma função que selecione uma tarefa.
//   Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//   Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
const elementClass = 'task';

function setTaskClass () {
    let elementoSelecionado = document.querySelector('.task');
    
    elementoSelecionado.addEventListener('click', function () {
        let classeElementoSelecionado = elementoSelecionado.className;
        if (classeElementoSelecionado === elementClass) {
            elementoSelecionado.className = 'task selected';
        } else if (classeElementoSelecionado === 'task selected') {
            elementoSelecionado.className = elementClass;
        }
    });
}
setTaskClass ();

//   🚀 Exercício 10:
//   Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//   Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//   Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

let atividadeSelecionada = document.getElementsByClassName('task selected');

function setDayColor () {
    
    let days = document.querySelector('#days'); // pegando a ul

    days.addEventListener('click', function (evento) {
        let diaSelecionado = evento.target;
        let atividadeSelecionada = document.getElementsByClassName('task selected');
        let corAtividade;
        if (atividadeSelecionada.length > 0) {
            corAtividade = atividadeSelecionada[0].style.backgroundColor;
        } else {
            corAtividade = '#eee';
        }
        if(diaSelecionado.style.backgroundColor !== corAtividade) {
            diaSelecionado.style.backgroundColor = corAtividade;
        } else {
            diaSelecionado.style.backgroundColor = '#eee';
        }
            // diaSelecionado.style.backgroundColor = corAtividade;
            // console.log('A cor do dia é: ' + diaSelecionado.style.backgroundColor);
            // console.log(document.getElementsByClassName('task selected'));
            // console.log('A atividade é: ' + atividadeSelecionada);
            // console.log('A cor da atividade é: ' + corAtividade);
        });
}
setDayColor ();


//   🚀 Bônus:
//   Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//   Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//   Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//   Dica - Propriedade: key.
let ulCompromissos = document.querySelector('.task-list');
let botaoAdicionar = document.querySelector('#btn-add');
let input = document.getElementById('task-input');
function adicionaCompromisso () {
    botaoAdicionar.addEventListener('click', function () {
        let compromissoLine = document.createElement('li');
        if (input.value === "") {
            alert('Erro, compromisso inválido')
        } else {
        compromissoLine.innerHTML = input.value;
        ulCompromissos.appendChild(compromissoLine);      
        }  
    })
    input.addEventListener('keypress', function (evento){
        let compromissoLine = document.createElement('li');
        if (evento.key === 'Enter'){
            if (input.value === "") {
                alert('Erro, compromisso inválido')
            } else {
            compromissoLine.innerHTML = input.value;
            ulCompromissos.appendChild(compromissoLine);      
            }
        }
    })
}
adicionaCompromisso ()

window.onload = function carregarPagina () {
    alert("Olá esté é o calendário de dezembro");
}