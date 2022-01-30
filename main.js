const card = document.querySelector('.card__inner');

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    },1000);
  })
})
