window.addEventListener('scroll', function() {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }

    let titles = document.getElementsByClassName('title');
    let navTitles = document.getElementsByClassName('navTitle')

    for(var i = 0; i < titles.length; i++) {
      let title = titles[i];
      let navTitle = navTitles[i]

      if(title.getBoundingClientRect().top < screenSize-100) {
        console.log(navTitle)
        navTitle.classList.add('active');
        for(var j = 0; j < i; j++){
          navTitles[j].classList.remove('active');  
        }
      } else {
        navTitle.classList.remove('active');
      }
    }
});

let languageE = document.querySelector('.languageE')
let languageI = document.querySelector('.languageI')
let home = document.querySelector('.home')
let about = document.querySelectorAll('.about')
let contact = document.querySelector('.contact')
let proyects = document.querySelectorAll('.proyects')
let download = document.querySelector('.textDownload')
let language = document.querySelector('.marginLanguage')
let textMe = document.querySelector('.textMe')

languageI.addEventListener('click', function() {
  languageE.classList.remove('active')
  languageI.classList.add('active')

  home.textContent = 'Home'
  contact.textContent = 'Contact'
  download.textContent = 'Download CV'
  textMe.textContent = 'Front-End web developer. Freelance and team development experience using Agile Methodology. Self-taught person. Efficient self-management and problem-solving skills in independent projects. Good collaboration abilities in a productive teamwork.'

  for (var i = 0; i < 2; i++) {
    about[i].textContent = 'About me'
    proyects[i].textContent = 'Proyects'
  }

  var screenWidth = screen.width
  if (screenWidth > 700) language.style.marginLeft = '615px'
});

languageE.addEventListener('click', function() {
  languageE.classList.add('active')
  languageI.classList.remove('active')

  home.textContent = 'Inicio'
  contact.textContent = 'Contacto'
  download.textContent = 'Descargar CV'
  textMe.textContent = 'Desarrollador Web FrontEnd con experiencia tanto Freelance cómo en un equipo de desarrollo trabajando con Metodología Agile. Autodidacta. Capaz de autogestión eficaz y solución de problemas en proyectos independientes. Buenas habilidades de colaboración en un equipo productivo.'

  for (var i = 0; i < 2; i++) {
    about[i].textContent = 'Acerca de mi'
    proyects[i].textContent = 'Proyectos'
  }

  var screenWidth = screen.width
  if (screenWidth > 700) language.style.marginLeft = '580px'
});