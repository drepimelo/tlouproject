const smoke = document.querySelector('#smoke');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 800; // Ajuste conforme necessário
  const progress = Math.min(scrollY / maxScroll, 1); // valor de 0 a 1

  const deslocamento = -15 + (progress * 15); // vai de -100% até 0%
  smoke.style.transform = `translateX(${deslocamento}%)`;
});


// Pega todos os elementos do menu (inclusive o da logo)
const headerContents = document.querySelectorAll('.header--wrapper_content');

// Pega especificamente a logo
const logo = document.querySelector('.header--logo');

// Define a altura da hero para usar como limite do scroll
const heroHeight = document.querySelector('#hero').offsetHeight;

window.addEventListener('scroll', () => {
  
  if (window.scrollY > heroHeight - 50) {
    // Quando sair da hero, diminui a logo e mostra os outros links
    logo.style.transform = 'scale(0.7)';
    
    headerContents.forEach(el => {
      el.style.opacity = '1'; // Todos os itens da navbar aparecem
    });

  } else {
    // Quando estiver na hero, logo grande e links invisíveis
    logo.style.transform = 'scale(1)';
    
    headerContents.forEach(el => {
      if (el.contains(logo)) {
        el.style.opacity = '1'; // Deixa a logo visível sempre
      } else {
        el.style.opacity = '0'; // Esconde os outros links
      }
    });
  }
});

// No index.js

// Selecione todos os elementos de vídeo que você deseja observar
const videos = document.querySelectorAll('.main--content video');

videos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.currentTime = 0; // Reinicia o vídeo
          video.play();
        } else {
          video.pause(); // Opcional: pausar o vídeo quando não estiver visível
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(video);
});

const carrossel = document.getElementById('carrossel');
const cards = document.querySelectorAll('.card');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');
const container = document.getElementById('carrossel-container');

let index = 0;
let intervalo;

// Move o carrossel para o slide atual
function atualizar() {
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Botões
anterior.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  atualizar();
  resetarAutoPlay();
});

proximo.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  atualizar();
  resetarAutoPlay();
});

// Autoplay
function iniciarAutoPlay() {
  intervalo = setInterval(() => {
    index = (index + 1) % cards.length;
    atualizar();
  }, 3000); // Espera 3 segundos
}

function resetarAutoPlay() {
  clearInterval(intervalo);
  iniciarAutoPlay();
}

// Pausar autoplay ao passar mouse por cima
container.addEventListener('mouseenter', () => clearInterval(intervalo));
container.addEventListener('mouseleave', iniciarAutoPlay);

// Iniciar ao carregar
iniciarAutoPlay();
    