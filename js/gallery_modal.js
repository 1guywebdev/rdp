var modal = document.querySelector('.gallery-modal')
var modalImg = document.querySelector('.gallery-modal-img')
Array.from(document.querySelectorAll('.slider-img')).forEach(item => {
  item.addEventListener('click', imgClicked => {
    modal.setAttribute('style', 'display: block; transform: scale(1);')
    modalImg.src = imgClicked.target.src
  })
})

document.querySelector('.gallery-modal-close').addEventListener('click', () => {
  modal.style.display = 'none'
})