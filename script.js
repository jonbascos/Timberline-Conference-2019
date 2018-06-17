/****** Menu toggle for Mobile  ******/
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navMenu');

navToggleButton.addEventListener('click', () => {
  if (navMenu.style.display == 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
});

/****** Sponsor Carousel ******/

var myIndex = 0;
carousel();

function carousel() {

  var x = document.getElementsByClassName('mySlides');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 5000);
}
