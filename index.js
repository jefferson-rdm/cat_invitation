const noBtn = document.querySelector('.rechazar')
const yesBtn = document.querySelector('.aceptar')
const gif = document.querySelector('img')
const btnContainer = document.querySelector('.buttons')
const text = document.querySelector('h1')

const imgBefore = document.querySelector('img.before')
const imgAfter = document.querySelector('img.after')

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

function yesBtnHandler (e){
  e.preventDefault()

  imgBefore.style.opacity = "0"; imgAfter.style.opacity = "1"
  imgBefore.style.position = "absolute"; imgAfter.style.position = "static"
  noBtn.parentNode.removeChild(noBtn)
  btnContainer.style.justifyContent = 'center'
  text.textContent = "Yay, te veo el 13 de este mes! >///<"

  bye()
}

yesBtn.addEventListener('click', yesBtnHandler)

function bye (){
  yesBtn.removeEventListener('click', yesBtnHandler)
}