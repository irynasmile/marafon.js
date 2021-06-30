const refs = {
  downButton: document.querySelector('.down-button'),
  upButton: document.querySelector('.up-button'),
  sidebar: document.querySelector('.sidebar'),
  mainSlide: document.querySelector('.main-slide'),
  slidesCount: document.querySelectorAll('.main-slide_img'),
  container: document.querySelector('.container'),
}
const slidesCountLength = refs.slidesCount.length
// console.log(slidesCountLength)
let activeSlideIndex = 0

refs.sidebar.style.top = `-${(slidesCountLength - 1) * 100}vh`

refs.upButton.addEventListener('click', () => {
  changeSlide('up')
})
refs.downButton.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrrowUp') {
  }
})
function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCountLength) {
      activeSlideIndex = 0
    }
  }
  if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCountLength - 1
    }
  }
  const height = refs.container.clientHeight
  refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  refs.sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
