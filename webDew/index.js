class Header {
  constructor(img, h1, h2) {
    this.src = img
    this.h1 = h1
    this.h2 = h2
  }
}
const img =
  'https://images.unsplash.com/photo-1624956741711-9e4001049662?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
let header = new Header(img, 'Hello', 'me')
//   (img, 'Hello', 'me')
console.log(header)

//==========================
