const board = document.querySelector('#board')
const colors = [
  '#db3636',
  '#dbc236',
  '#65db3',
  '#36b5db',
  '#36dbc0',
  '#8b36db',
  '#db36d',
  '#db3652',
]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}
function setColor(e) {
  const color = getRandomColor()
  e.style.backgroundColor = color
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
//https://jsfiddle.net/irinas/ye1upwd0/1/