import Glide from "@glidejs/glide";


let banner = new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 2,
  autoplay:4000,
  focusAt: 'center',
  gap: 30,
  slideWidth: 1280,
  breakpoints: {

    1920: {
      perView: 1.5,
    },
    1600: {
      perView: 1.3,
    },
    1400: {
      perView: 1.15
    },
    1230: {
      gap: 15,
      perView: 1.15
    },

  }
}).mount()


let banner_mobile = new Glide('.glide-mobile', {
  type: 'carousel',
  startAt: 1,
  perView: 1.3,
  // autoplay:4000,
  focusAt: 'center',
  gap: 12,
  breakpoints: {
    550: {
      gap: 8
    },
    500: {
      perView: 1.1
    },
    420: {
      perView: 1,
      gap: 12
    }
  }
}).mount()


let advantage = new Glide('.glide-advantage', {
  type: 'sliders',
  perView: 5,
  gap: 24,
  breakpoints: {

    1230: {
      gap: 8,
      perView: 4.5
    },
    1120: {
      gap: 8,
      perView: 4
    },
    1000: {
      perView: 3.5
    },
    878: {
      perView: 3.3
    },
    820: {
      perView: 3
    },
    768: {
      gap: 12,
      perView: 4
    },
    640: {
      gap: 8,
      perView: 3.5
    },
    570: {
      perView: 3
    },
    480: {
      perView: 2.5
    },
    375: {
      perView: 2
    }
  }
}).mount()

let catalog = new Glide('.catalog__glide', {
  type: 'sliders',
  startAt: 0,
  perView: 4,
  gap: 24,
  breakpoints: {
    1280: {
      gap: 12
    },
    1250: {
      perView: 3.5
    },
    1100: {
      gap: 8,
      perView: 3
    },
    992: {
      perView: 2.5
    },
    767: {
      perView: 3.5
    },
    666: {
      perView: 3
    },
    566: {
      perView: 2.5
    },
    480: {
      perView: 2
    },
    375: {
      perView: 1.5
    }
  }
}).mount()

let width = window.innerWidth

let button = document.getElementById("top-scroll");



window.onscroll = () => {
  if (width > 768 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
button.addEventListener("click", e => {
  e.stopPropagation();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".header__list-mobile")
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", () => {
  burger.classList.toggle("active")
  menu.classList.toggle("active")
})


