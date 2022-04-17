window.onload = function() {
  const el = document.getElementById('overlay');
  el.style.display = 'none';
};
const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-link');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}

const burgerBlack = document.querySelector('.burgerBlack')
const burgerWhite = document.querySelector('.burgerWhite')
burgerBlack.style.display = 'none'
burgerWhite.style.display = 'block'
window.addEventListener('scroll', (event) => {
  if (scrollY > 0) {
    burgerBlack.style.display = 'block'
    burgerWhite.style.display = 'none'
  } else {
    burgerBlack.style.display = 'none'
    burgerWhite.style.display = 'block'
  }
})