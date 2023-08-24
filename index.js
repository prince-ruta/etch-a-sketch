const board = document.querySelector('.board');

document.addEventListener('DOMContentLoaded', function(){
  console.log('hi');
  createBoard(16)
})

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDIvs = size * size;
    for(let i=0; i<numDIvs;i++){
        let newDivs = document.createElement('div');
        newDivs.style.background = 'yellow';
        board.insertAdjacentElement('beforeend', newDivs);
    }
}