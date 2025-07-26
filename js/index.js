window.addEventListener('load', () => {
    window.scrollTo(0, 1);
  });


const smoke = document.querySelector('#smoke');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 800; 
  const progress = Math.min(scrollY / maxScroll, 1); 

  const deslocamento = -15 + (progress * 15); 
  smoke.style.transform = `translateX(${deslocamento}%)`;
});

const headerContents = document.querySelectorAll('.header--wrapper_content');

const logo = document.querySelector('.header--logo');

const heroHeight = document.querySelector('#hero').offsetHeight;

window.addEventListener('scroll', () => {
  
  if (window.scrollY > heroHeight - 50) {

    logo.style.transform = 'scale(0.5)';
    
    headerContents.forEach(el => {
      el.style.opacity = '1';
    });

  } else {

    logo.style.transform = 'scale(1)';
    
    headerContents.forEach(el => {
      if (el.contains(logo)) {
        el.style.opacity = '1'; 
      } else {
        el.style.opacity = '0'; 
      }
    });
  }
});

const videos = document.querySelectorAll('.main--content video');

videos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.currentTime = 0; 
          video.play();
        } else {
          video.pause(); 
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(video);
});


  var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: -4,
    stretch: -3,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
});
