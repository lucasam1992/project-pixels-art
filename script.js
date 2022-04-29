const pegaIdPrimeiraSection = document.querySelector('#color-palette');
pegaIdPrimeiraSection.firstElementChild.classList.add('selected');
const pegaPixelBoard = document.querySelector('#pixel-board');

function selecionaCorPixel() {
  pegaIdPrimeiraSection.addEventListener('click', function eventoDeClick(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selecionaCorPixel();

function boardDeafult(pegaInputBoard) {
  for(let indexLinha = 0; indexLinha < pegaInputBoard; indexLinha += 1){
    const createLiPixel = document.createElement('section');
    createLiPixel.className='section-pixels';
    pegaPixelBoard.appendChild(createLiPixel);
    for(let indexColuna = 0; indexColuna < pegaInputBoard; indexColuna += 1){
      const createColPixel = document.createElement('li');
      createLiPixel.appendChild(createColPixel);
      createColPixel.classList.add('pixel');
    }
  }
}

// https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
function generateRandom() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;

  return `rgba(${red},${green}, ${blue}, ${2})`;
}

function colorRandom() {
  const getBlackColor = document.querySelector('#color1');
  const getColor2 = document.querySelector('#color2');
  const getColor3 = document.querySelector('#color3');
  const getColor4 = document.querySelector('#color4');
  getBlackColor.style.backgroundColor = 'black';

  getColor2.style.backgroundColor = generateRandom();
  getColor3.style.backgroundColor = generateRandom();
  getColor4.style.backgroundColor = generateRandom();
}

colorRandom();

function btnChangeColor() {
  const getOthersColors = document.querySelector('#change-color');

  getOthersColors.addEventListener('click', function () {
    colorRandom();
  });
}

btnChangeColor();

function pintarPixel() {
  const pegarBoard = document.querySelector('#pixel-board');
  pegarBoard.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      const pegaSelected = document.querySelector('.selected');
      const color = getComputedStyle(pegaSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = color;
    }
  });
}
pintarPixel();

function despintarPixel() {
  const pegarBoard = document.querySelector('#pixel-board');
  pegarBoard.addEventListener('dblclick', function (event) {
    if (event.target.className === 'pixel') {
      const pegaSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = 'white';
    }
  });
}

despintarPixel();

function resetaQuadros() {
  const pegaBotao = document.querySelector('#clear-board');
  
  pegaBotao.addEventListener('click', function(){
  const pegaPixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < pegaPixels.length; index += 1){
    pegaPixels[index].style.backgroundColor = 'white';
   }
  });
}

resetaQuadros();

function editarTamanhoBoard () {
  const pegaBtnVQV = document.querySelector('#generate-board');
  
  pegaBtnVQV.addEventListener('click', function(event) {
    let pegaInputBoard = document.querySelector('#board-size').value;
    const allPixels = document.querySelectorAll('.pixel');

    for(let index = allPixels.length - 1; index >= 0; index -= 1){
      allPixels[index].remove();
    }
    if (!pegaInputBoard){
      alert('Board inválido!');
      boardDeafult(5);
    }else{
      if(pegaInputBoard < 5){
        pegaInputBoard = 5;
        boardDeafult(pegaInputBoard);
      }else if(pegaInputBoard > 50){  
        pegaInputBoard = 50;
        boardDeafult(pegaInputBoard);
      }else{
        boardDeafult(pegaInputBoard);
      }
    }
  });
}

editarTamanhoBoard();

window.onload = function () {
  boardDeafult(5);
};
