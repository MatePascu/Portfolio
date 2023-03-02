window.addEventListener('scroll', function()  {
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
