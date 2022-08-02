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
let textFamilyClicks = 0;
btnFontFamily.addEventListener('click', function () {
    if (textFamilyClicks < 3) {
        textFamilyClicks += 1;
    } else {
        textFamilyClicks = 0;
    }
    text.style.fontFamily = arrayFontFamily[textFamilyClicks];
    localStorage.fontFamily = arrayFontFamily[textFamilyClicks];
})
let fontFamilyInicial = localStorage.fontFamily;
 text.style.fontFamily = fontFamilyInicial;
 titulo.style.fontFamily = fontFamilyInicial;

let arrayFontSize = ['15px', '18px', '21px', '25px'];
function chageTextSize (arrayFontSize) {    
    let textSizeClicks = 0;
    btnFontSize.addEventListener('click', function () {
        if (textSizeClicks < 3) {
            textSizeClicks += 1;
        } else {
            textSizeClicks = 0;
        }
        text.style.fontSize = arrayFontSize[textSizeClicks];
        localStorage.fontSize = arrayFontSize[textSizeClicks];     
    })
    let fontSizeInicial = localStorage.fontSize;
    text.style.fontSize = fontSizeInicial;
}
chageTextSize (arrayFontSize);

let arrayTituloSize = ['30px', '40px', '50px', '60px']
function chageTituloSize (arrayTituloSize) {    
    let textSizeClicks = 0;
    btnFontSize.addEventListener('click', function () {
        if (textSizeClicks < 3) {
            textSizeClicks += 1;
        } else {
            textSizeClicks = 0;
        }
        titulo.style.fontSize = arrayTituloSize[textSizeClicks];
        localStorage.tituloSize = arrayTituloSize[textSizeClicks];     
    })
    let tituloSizeInicial = localStorage.tituloSize;
    titulo.style.fontSize = tituloSizeInicial;
}
chageTituloSize (arrayTituloSize);

let arrayLineHeight = ['15px', '18px', '21px', '25px', '28px', '31px', '35px'];
function chageLineHeight (arrayLineHeight) {    
    let lineHeigthClicks = 0;
    btnLineHeigth.addEventListener('click', function () {
        if (lineHeigthClicks < 6) {
            lineHeigthClicks += 1;
        } else {
            lineHeigthClicks = 0;
        }
        text.style.lineHeight = arrayLineHeight[lineHeigthClicks];
        localStorage.lineHeight = arrayLineHeight[lineHeigthClicks];     
    })
    let lineHeigthInicial = localStorage.lineHeight;
    text.style.lineHeight = lineHeigthInicial;
}
chageLineHeight (arrayLineHeight);