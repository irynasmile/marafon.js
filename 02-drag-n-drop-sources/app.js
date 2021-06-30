const item = document.querySelector('.item')
// console.log('item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const plaplaceholder of placeholders) {
  plaplaceholder.addEventListener('dragover', dragover)
  plaplaceholder.addEventListener('dragenter', dragenter)
  plaplaceholder.addEventListener('dragleave', dragleave)
  plaplaceholder.addEventListener('drop', dragdrop)
}

function dragstart(e) {
  e.target.classList.add('hold')

  setTimeout(() => e.target.classList.add('hide'), 0)
}
function dragend(e) {
  e.target.classList.remove('hold', 'hide')
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  console.log('dragleave')
  e.target.classList.remove('hovered')
}
function dragdrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}
