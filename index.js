const board = document.querySelector('.board');
const message = document.querySelector('.message');
const popUpBtn = document.querySelector('#popup');
const resetBtn = document.querySelector('#reset-btn');
const randomBtn = document.querySelector('.btn-info');
const blackBtn = document.querySelector('.btn-black');
let color = 'black';

document.addEventListener('DOMContentLoaded', function(){
  console.log('hi');
  createBoard(16);
})
  
  popUpBtn.addEventListener('click', function(){
      let size = getSize();
      createBoard(size);
})

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numberDivs = size * size;
    for(let i=0; i<numberDivs;i++){
        let newDivs = document.createElement('div');
        
        newDivs.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', newDivs);
    }
}

function getSize(){
    let input = prompt("what size do you want?");
    if(input == ""){
        message.textContent = 'Please provide the size';
    }
    else if(input < 1 || input > 100){
        message.textContent = 'Please provide the size between 1 and 100';
    }
    else {
        message.textContent = 'Now You\'re ready!';
        return input;
    }
}

function colorDiv(){
    if( color == 'random'){
        this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.background = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

resetBtn.addEventListener('click', function(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.background = 'white')
})