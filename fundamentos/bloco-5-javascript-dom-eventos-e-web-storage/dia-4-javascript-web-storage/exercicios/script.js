let containerOpcoes = document.getElementById('option-container');
let arrayCores = ['black', 'red', 'green', 'pink', 'white']
let btnBackground = document.getElementById('btn-backgroundColor');
let btnFontFamily = document.getElementById('btn-fontFamily');
let btnFontColor = document.getElementById('btn-fontColor');
let btnFontSize = document.getElementById('btn-fontSize');
let btnLineHeigth = document.getElementById('btn-lineHeight');



function criarCores (arrayCores) {
    let containerOpcoes = document.getElementById('option-container');
    for(let index = 0; index < arrayCores.length; index ++) {
        let cor = document.createElement('div');
        cor.className = 'cores';
        cor.id = arrayCores[index];
        cor.style.backgroundColor = arrayCores[index];
        containerOpcoes.appendChild(cor);
    }
}
criarCores (arrayCores);

const elementClass = 'cores';
let corSelecionada = '';
function corClass () {
    let optionContainer = document.querySelector('#option-container');
    
    optionContainer.addEventListener('click', function (evento) {
        let elementoSelecionado = evento.target;
        corSelecionada = elementoSelecionado.style.backgroundColor;
        // console.log(corSelecionada);
    })
}
corClass ()

function changeBackgroundColor () {
   btnBackground.addEventListener('click', function() {
    document.body.style.backgroundColor = corSelecionada;
    localStorage.bgColor = corSelecionada;
   })
}
changeBackgroundColor ()
let bgInicial = localStorage.bgColor;
document.body.style.backgroundColor = bgInicial;

let text = document.getElementById('texto');
let titulos = document.getElementsByTagName('h1');
let titulo = titulos[0];
function changeFontColor () {
    btnFontColor.addEventListener('click', function() {
     text.style.color = corSelecionada;
     titulo.style.color = corSelecionada;
     localStorage.fontColor = corSelecionada;
    })
 }
 changeFontColor ()
 let fontColorInicial = localStorage.fontColor;
 text.style.color = fontColorInicial;
 titulo.style.color = fontColorInicial;
let arrayFontFamily = ['serif', 'helvetica', 'cursive', 'monospace'];


// function changeFontFamily () {
//     btnFontFamily.addEventListener('click')
// }