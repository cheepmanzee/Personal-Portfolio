const $burger = document.querySelector('.navbar__burger')
const $menuDrop = document.querySelector('.menu-drop');
const $menuClose = document.querySelector('.menu-drop__close');
const $body = document.querySelector('body');
const $title = document.querySelector('h1');
const $text = document.querySelector('.hero__offer p');
const $btn = document.querySelector('.offer__btn');
const $subnavSocial = document.querySelector('.subnav__social');
const $subnavMail = document.querySelector('.subnav__mail');
const $heroImage = document.querySelector('.hero__image');
const $accItem = document.querySelectorAll('.acc__item');
const $eduBtn = document.querySelector('.edu-btn');
const $workBtn = document.querySelector('.work-btn');
const $education = document.querySelector('.education');
const $work = document.querySelector('.work');
const $expItem = document.querySelectorAll('.path__item');
const $emailPopup = document.querySelector('.email-popup');
const $frontPopup = document.querySelector('.frontend-popup');
const $designPopup = document.querySelector('.design-popup');
const $emailDev = document.querySelector('.email-dev');
const $frontDev = document.querySelector('.front-dev');
const $designDev = document.querySelector('.design-dev');
const $popupX = document.querySelectorAll('.popup-x');
const $emailBtn = document.querySelector('.email-btn');
const $landingBtn = document.querySelector('.landing-btn');
const $landing = document.querySelector('.landing');
const $email = document.querySelector('.email');
const $aboutBtn = document.querySelectorAll('.about-btn');
const $skillsBtn = document.querySelectorAll('.skills-btn');
const $expBtn = document.querySelectorAll('.exp-btn');
const $servicesBtn = document.querySelectorAll('.services-btn');
const $portfolioBtn = document.querySelectorAll('.portfolio-btn');
const $contactBtn = document.querySelectorAll('.contact-btn');
const $videoBtn = document.querySelector('.video-btn');
const $videoPopup = document.querySelector('.video-popup')
const $video = document.querySelector('.video')

$burger.addEventListener('click', () => {
      $menuDrop.classList.add('drop');
      $body.style.overflowY = 'hidden';
})

$videoBtn.addEventListener('click', () => {
   $videoPopup.classList.add('popup');
   $video.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/2QredobIRW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

})

$menuClose.addEventListener('click', () => {
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
})

window.addEventListener('load', () => {
   const preloader = document.querySelector('.preloader');
   preloader.classList.add('preload-fin');
   $title.classList.add('load-pop');
   $text.classList.add('load-pop');
   $btn.classList.add('load-pop');
   $subnavSocial.classList.add('load-pop');
   $subnavMail.classList.add('load-pop');
   $heroImage.classList.add('load-pop');
})

function scrollAboutPop() {
   var about = document.querySelector('.about');
   var position = about.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      about.classList.add('load-pop');
   }
}

function scrollSkillsPop() {
   var skills = document.querySelector('.skills');
   var position = skills.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      skills.classList.add('load-pop');
   }
}

function scrollExpPop() {
   var exp = document.querySelector('.exp');
   var position = exp.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      exp.classList.add('load-pop');
   }
}

function scrollExpPathPop() {
   var expHeight = document.querySelector('.exp');
   var position = expHeight.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      for (let item of $expItem) {
         item.classList.add('load-pop')
      }
   }
}

function scrollServicesPop() {
   var services = document.querySelector('.services');
   var position = services.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      services.classList.add('load-pop');
   }
}

function scrollPortfolioPop() {
   var portfolio = document.querySelector('.portfolio');
   const works = document.querySelectorAll('.works__item')
   var position = portfolio.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      portfolio.classList.add('load-pop');
      setTimeout(() => {
         for (let item of works) {
            item.classList.add('load-pop')
         }
      },600)
   }
}

function scrollContactPop() {
   var contact = document.querySelector('.contact');
   var position = contact.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.6;
   if (position < screenPosition) {
      contact.classList.add('load-pop');
   }
}

window.addEventListener('scroll', scrollAboutPop);
window.addEventListener('scroll', scrollSkillsPop);
window.addEventListener('scroll', scrollExpPop);
window.addEventListener('scroll', scrollExpPathPop);
window.addEventListener('scroll', scrollServicesPop);
window.addEventListener('scroll', scrollPortfolioPop);
window.addEventListener('scroll', scrollContactPop);

for (let acc of $accItem) {
   acc.addEventListener('click', function() {
      if (this.classList.contains('active-acc')) {
         this.classList.remove('active-acc');
      } else {
         for (item of $accItem) {
            item.classList.remove('active-acc');
         }
         this.classList.add('active-acc')
      }
   })
}

$workBtn.addEventListener('click', () => {
   if ($education.classList.contains('active')) {
      $education.classList.remove('active')
      $eduBtn.style.color = '#BCB8C0';
      $eduBtn.style.borderColor = '#BCB8C0';
      for (let item of $expItem) {
         item.classList.remove('load-pop')
      }
   }
   $workBtn.style.color = '#222222'
   $workBtn.style.borderColor = '#222222'
   $work.classList.add('active')
   setTimeout(() => {
      for (let item of $expItem) {
         item.classList.add('load-pop')
      }
   },100) 
})

$eduBtn.addEventListener('click', () => {
   if ($work.classList.contains('active')) {
      $work.classList.remove('active')
      $workBtn.style.color = '#BCB8C0';
      $workBtn.style.borderColor = '#BCB8C0';
      for (let item of $expItem) {
         item.classList.remove('load-pop')
      }
   }
   $eduBtn.style.color = '#222222'
   $eduBtn.style.borderColor = '#222222'
   $education.classList.add('active')
   setTimeout(() => {
      for (let item of $expItem) {
         item.classList.add('load-pop')
      }
   },100)
})

$emailDev.addEventListener('click', () => {
   $emailPopup.classList.add('popup')
})
$frontDev.addEventListener('click', () => {
   $frontPopup.classList.add('popup')
})

$designDev.addEventListener('click', () => {
   $designPopup.classList.add('popup')
})

for (let x of $popupX) {
   x.addEventListener('click', () => {
      $emailPopup.classList.remove('popup')
      $frontPopup.classList.remove('popup')
      $designPopup.classList.remove('popup')
      $videoPopup.classList.remove('popup')
      $video.innerHTML = '';
   })
}

$emailBtn.addEventListener('click', () => {
   const $workItem = document.querySelectorAll('.works__item');
   if ($landing.classList.contains('active')) {
      $landing.classList.remove('active')
      $landingBtn.style.color = '#BCB8C0';
      $landingBtn.style.borderColor = '#BCB8C0';
      for (let item of $workItem) {
         item.classList.remove('load-pop')
      }
   }
   $emailBtn.style.color = '#222222'
   $emailBtn.style.borderColor = '#222222'
   $email.classList.add('active')
   setTimeout(() => {
      for (let item of $workItem) {
         item.classList.add('load-pop')
      }
   },100) 
})

$landingBtn.addEventListener('click', () => {
   const $workItem = document.querySelectorAll('.works__item');
   if ($email.classList.contains('active')) {
      $email.classList.remove('active')
      $emailBtn.style.color = '#BCB8C0';
      $emailBtn.style.borderColor = '#BCB8C0';
      for (let item of $workItem) {
         item.classList.remove('load-pop')
      }
   }
   $landingBtn.style.color = '#222222'
   $landingBtn.style.borderColor = '#222222'
   $landing.classList.add('active')
   setTimeout(() => {
      for (let item of $workItem) {
         item.classList.add('load-pop')
      }
   },100) 
})

function smoothScroll(target, duration) {
   var target =  document.querySelector(target);
   var targetPosition = target.getBoundingClientRect().top;
   var startingPosition = window.pageYOffset;
   var distance = targetPosition - startingPosition;
   var startTime = null;
   function animationScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed,startingPosition,distance,duration);
      window.scrollTo(0,run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
   }
   function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t --;
      return - c / 2 * (t * (t - 2) - 1) + b;
   };
   requestAnimationFrame(animationScroll);
}

for (let item of $aboutBtn) {
   item.addEventListener('click', function(){
      smoothScroll('.about', 1000)
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
   })
}
for (let item of $skillsBtn) {
   item.addEventListener('click', function(){
      smoothScroll('.skills', 1000)
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
   })
}
for (let item of $servicesBtn) {
   item.addEventListener('click', function(){
      smoothScroll('.services', 1000)
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
   })
}
for (let item of $expBtn) {
   item.addEventListener('click', function(){
      smoothScroll('.exp', 1000)
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
   })
}
for (let item of $portfolioBtn) {
   item.addEventListener('click', function(){
      smoothScroll('.portfolio', 1000)
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
   })
}

$btn.addEventListener('click', () => {
   smoothScroll('.contact', 1000)
})

