AOS.init()

const slide = document.querySelectorAll('.psychologists__slide'),
      dots = document.querySelectorAll('.dots');

let indexSlide = 1;

function deleteClass() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('psychologists__slide_active')
    }
}

function dotsChanger(index) {
    for (let i = 0; i < dots.length; i++) {
        if (i == index) {
            dots[i].classList.add('dots_active')
        }
        else {
            dots[i].classList.remove('dots_active')
        }
    }
}

for (let i = 0; i < slide.length; i++) {
    slide[i].addEventListener('click', (event) => {
        indexSlide = i;
        deleteClass();
        dotsChanger(indexSlide);
        event.currentTarget.classList.add('psychologists__slide_active')
    })
}

const swiper = new Swiper('.swiper1', {
  loop: true,
  direction: 'horizontal',
  effect: 'slide',
  speed: 800,
  spaceBetween: 41,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },

  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },

});

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    direction: 'horizontal',
    effect: 'slide',
    speed: 800,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
  
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      440: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },

    // pagination: {
    //   el: '.swiper-pagination2',
    //   clickable: true,
    // },
  
  });

const details = document.querySelectorAll("details");

[...details].forEach((targetDetail) => {
    targetDetail.addEventListener("click", _ => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
        });
    });
});

// if (element.className == "psychologists__slide_active") {
//   document.getElementsByClassName('psychologists__slide_active').addEventListener('mousemove', function fun() {
//     document.getElementsByClassName('psychologists__details').style.display = 'block'
//   })
// }

// document.getElementsByClassName('psychologists__slide_active').addEventListener('mousemove', function fun() {
//   document.getElementsByClassName('psychologists__details').style.display = 'block'
// })

function over(event) {
  if (event.classList.contains('psychologists__slide_active')) {
    event.children[0].classList.add('hidden')
    event.children[1].classList.add('active')
  }
}

function out(event) {
  if (event.classList.contains('psychologists__slide_active')) {
    event.children[0].classList.remove('hidden')
    event.children[1].classList.remove('active')
  }
}

function fun1() {
  document.getElementById('dark').style.display = 'block'
  document.getElementById('maryna').style.display = 'block'
}
function fun2() {
  document.getElementById('dark').style.display = 'none'
  document.getElementById('maryna').style.display = 'none'
}

function fun3() {
  document.getElementById('dark').style.display = 'block'
  document.getElementById('katya').style.display = 'block'
}
function fun4() {
  document.getElementById('dark').style.display = 'none'
  document.getElementById('katya').style.display = 'none'
}

function fun5() {
  document.getElementById('dark').style.display = 'block'
  document.getElementById('zoryana').style.display = 'block'
}
function fun6() {
  document.getElementById('dark').style.display = 'none'
  document.getElementById('zoryana').style.display = 'none'
}

function fun() {
  document.getElementById("menu__btn").click();
}