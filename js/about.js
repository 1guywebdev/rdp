let myModal = document.querySelector('.cert-modal')

const myImg = document.querySelector('.rdp-about-img')
const myModalImg = document.querySelector('.cert-modal-img')
const myCaptionText = document.querySelector('.cert-modal-caption')

myImg.addEventListener('click', function() {
  myModal.classList.add('show')
  myModalImg.src = this.src
  myCaptionText.textContent = 'Remellie\'s Certification'
})

const myCloseModal = document.querySelector('.cert-modal-close')

myCloseModal.addEventListener('click', function() {
  myModal.classList.remove('show')
})

