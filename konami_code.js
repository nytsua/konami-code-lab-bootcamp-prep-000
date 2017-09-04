const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const divs = document.querySelectorAll('div')
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation()
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (let i = 0; i < divs.length; i++) {
  document.body.addEventListener('click', bubble)
}
}