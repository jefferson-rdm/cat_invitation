const noBtn = document.querySelector('.rechazar')
const yesBtn = document.querySelector('.aceptar')
const gif = document.querySelector('img')
const btnContainer = document.querySelector('.buttons')
const text = document.querySelector('h1')

const rectNoBtn = noBtn.getBoundingClientRect()

function randomScreenValue (){
  let randomX, randomY

  randomX = Math.floor(Math.random() * document.body.offsetWidth) - rectNoBtn.left - (noBtn.offsetWidth * 0.5)
  randomY = Math.floor(Math.random() * document.body.offsetHeight) - rectNoBtn.top - (noBtn.offsetHeight * 0.5)
  
  return { randomX, randomY }
}

function moveBtn (e){
  e.preventDefault()

  const { randomX, randomY } = randomScreenValue()

  noBtn.style.left = `${randomX}px`
  noBtn.style.top = `${randomY}px`
}

noBtn.addEventListener('click', moveBtn)

noBtn.addEventListener('mouseover', moveBtn)

yesBtn.addEventListener('click', e => {
  e.preventDefault()

  gif.src = "gatitos_abrazados.gif"
  noBtn.parentNode.removeChild(noBtn)
  btnContainer.style.justifyContent = 'center'
  text.textContent = "Yay, te veo el 13 de este mes! >///<"

  bye()
})

function bye (){
  yesBtn.removeEventListener('click', moveBtn)
}