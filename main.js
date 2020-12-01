const trigger = document.querySelectorAll('.img-one,.img-two');
const activeOne = document.querySelectorAll('.discripson-one');
const activetwo = document.querySelectorAll('.discripson-two');
const mainContent = document.querySelector('.displayContent');
const loodAnimay = document.querySelector('.lodedive');
const year = document.querySelector('.year');
const footer = document.querySelector('.footrmain');
const iconPack = document.querySelector('.icon-pack');
const myAge = document.querySelector('.myAge');

let animation = false;
window.addEventListener('load', () => {
  mainContent.classList.remove('onlode');
  loodAnimay.classList.add('onlode');
  let currentYear = new Date().getFullYear();
  let myDobYear = 2001;
  year.innerHTML = currentYear;

  myAge.innerHTML = currentYear - myDobYear;
});
// debounce function
const debounce = (fn, dely) => {
  let setTimeoutId;
  return function (...arg) {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      return fn(...arg);
    }, dely);
  };
};
// footer icon pack display: none
function checkSlide() {
  let scrollY = Math.floor(window.scrollY);
  let offSetTop = footer.offsetTop;
  if (scrollY === offSetTop) {
    iconPack.classList.add('remove');
  } else {
    iconPack.classList.remove('remove');
  }
}

function handaleEnter() {
  if (this.classList[0] === 'img-one' && animation == true) {
    activeOne.forEach((one) => {
      one.classList.add('active');
    });
  } else if (this.classList[0] === 'img-two' && animation == true) {
    activetwo.forEach((one) => {
      one.classList.add('active');
    });
  }
}
function hundaleLeave() {
  if (this.classList[0] === 'img-one') {
    activeOne.forEach((one) => {
      one.classList.remove('active');
    });
  } else {
    activetwo.forEach((one) => {
      one.classList.remove('active');
    });
  }
}

//page animation;
const portfolio = document.querySelector('.Portfolioa');
const contact = document.querySelector('.Contact');
const home = document.querySelector('.home');
const portfolioSection = document.querySelector('.Portfolio');
const footerMain = document.querySelector('.footrmain');
const goTop = document.querySelector('.goTop');

function goDownfooter() {
  let distance = footerMain.offsetTop;
  scrollBy({top: distance, behavior: 'smooth'});
}

function goDown() {
  let distance = portfolioSection.offsetTop;
  scrollBy({top: distance, behavior: 'smooth'});
}

function goHome() {
  // let distance = home.offSetTop;

  // window.scrollBy({top: distance, behavior: 'smooth'});

  window.scrollTo(0, 0);
}

//gsap animation:

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger: {
    trigger: '.home',
    //markers: true,
    //start: 'top 0%',
    end: 'bottom 80%',
    //eveant:onEnter-onLeave-onEnterBack-onLiveBack
    toggleActions: 'restart reverse restart reverse',
    //options:play-pause-resume-reset-restart-complete-reverse-none
  },
});

gsap.from(
  '.icon-pack',
  {x: -300, ease: 'circ', duration: '2', delay: 0.5, opacity: 0},
  1
);
timeline
  .from('.logo', {x: 300, ease: 'circ', delay: 0.5, opacity: 0})
  .from('.nav-itom', {x: 300, ease: 'circ', opacity: 0}, 0)
  .from('.tex', {x: -300, ease: 'circ', delay: 0.5, opacity: 0}, 1)
  .from('.home-svg', {x: 300, ease: 'circ', opacity: 0}, 1)
  .from('.circle-one', {y: -700, duration: 1, ease: 'bounce', opacity: 0}, 2)
  .from(
    '.circle-two',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<0.5'
  )
  .from(
    '.circle-three',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<0.3'
  )
  .from(
    '.circle-four',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<0.3'
  )
  .from(
    '.circle-five',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<0.2'
  );

//gsap portfolio animation:

const protfolioTimeline = gsap.timeline({
  defaults: {duration: '2', opacity: 0},
  scrollTrigger: {
    trigger: '.Portfolio',
    //markers: true,
    start: 'top 30%',
    end: 'bottom 50%',
    //eveant:onEnter-onLeave-onEnterBack-onLiveBack
    toggleActions: 'restart reverse restart reverse',
    //options:play-pause-resume-reset-restart-complete-reverse-none
  },
});
protfolioTimeline
  .from('.header-img', {y: -200, ease: 'bounce'})
  .from('.header-name', {x: 300, ease: 'circ'}, '<0.3')
  .from('.header-para', {x: -300, ease: 'circ'}, '<0.3')
  .from('.footer1', {x: -300, ease: 'circ'})
  .from('.footer2', {x: 300, ease: 'circ'}, '<0')
  .from('.bar', {height: 0, width: 0, duration: 3, ease: 'circ'})
  //bobble
  .from('.pthree', {y: -300, ease: 'bounce'}, 0)
  .from('.pnine', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.pfive', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.peleven', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.psix', {y: -300, ease: 'bounce'}, 0)
  .from('.ptwo', {y: 300, ease: 'bounce'}, '<0.3')
  .from('.pfour', {y: -300, ease: 'bounce'}, '<0.2')
  .from('.pten', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.pseven', {y: -300, ease: 'bounce'}, 0)
  .from('.peight', {y: 300, ease: 'bounce'}, '<0.3')
  .from('.pone', {y: -300, ease: 'bounce'}, '<0.2')
  .from('.ptwelve', {y: -300, ease: 'bounce'}, '0.1');

//gsap section animation: WONE

const woneTimeline = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 0,
    onComplete: onComplete,
    onStart: onStart,
  },
  scrollTrigger: {
    trigger: '.wone',
    start: 'top 30%',
    end: 'bottom 50%',
    toggleActions: 'restart reverse restart reverse',
    //markers: true,
  },
});

woneTimeline
  .from('.wone .img-one', {x: -700, scale: 2})
  .from('.wone .img-two', {x: 700, scale: 2}, 0)
  .from('.wone .one', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wone .two', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.wone .three', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wone .four', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wone .five', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wone .six', {y: -300, ease: 'bounce'}, '<0.3');

//gsap section animation: WTWO

const wtwoTimeline = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 0,
    onComplete: onComplete,
    onStart: onStart,
  },
  scrollTrigger: {
    trigger: '.wtwo',
    start: 'top 30%',
    end: 'bottom 50%',
    toggleActions: 'restart reverse restart reverse',
    //markers: true,
  },
});
wtwoTimeline
  .from('.wtwo .img-one', {x: -700, scale: 2})
  .from('.wtwo .img-two', {x: 700, scale: 2}, 0)
  .from('.wtwo .one', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wtwo .two', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.wtwo .three', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wtwo .four', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wtwo .five', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wtwo .six', {y: -300, ease: 'bounce'}, '<0.3');

//gsap section animation: WTHREE

const wthreeTimeline = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 0,
    onComplete: onComplete,
    onStart: onStart,
  },
  scrollTrigger: {
    trigger: '.wthree',
    start: 'top 30%',
    end: 'bottom 50%',
    toggleActions: 'restart reverse restart reverse',
    //markers: true,
  },
});
wthreeTimeline
  .from('.wthree .img-one', {x: -700, scale: 2})
  .from('.wthree .img-two', {x: 700, scale: 2}, 0)
  .from('.wthree .one', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wthree .two', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.wthree .three', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wthree .four', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wthree .five', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wthree .six', {y: -300, ease: 'bounce'}, '<0.3');

//gsap section animation: WFOUR

const wfourTimeline = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 0,
    onComplete: onComplete,
    onStart: onStart,
  },
  scrollTrigger: {
    trigger: '.wfour',
    start: 'top 30%',
    end: 'bottom 50%',
    toggleActions: 'restart reverse restart reverse',
    //markers: true,
  },
});
wfourTimeline
  .from('.wfour .img-one', {x: -700, scale: 2})
  .from('.wfour .img-two', {x: 700, scale: 2}, 0)
  .from('.wfour .one', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wfour .two', {y: -300, ease: 'bounce'}, '<0.1')
  .from('.wfour .three', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wfour .four', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wfour .five', {y: -300, ease: 'bounce'}, '<0.3')
  .from('.wfour .six', {y: -300, ease: 'bounce'}, '<0.3');

// gsap animation for footr

const footerTimeLine = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 0,
  },
  scrollTrigger: {
    trigger: '.footrmain',
    start: 'top 30%',
    end: 'bottom 50%',
    toggleActions: 'restart reverse restart reverse',
    //markers: true,
  },
});
footerTimeLine
  .from('.footrmain .one', {y: -200, scale: 1.1, ease: 'bounce'})
  .from('.footrmain .two', {y: -200, scale: 1.1, ease: 'bounce'}, '<0.2')
  .from('.footrmain .three', {y: -200, scale: 1.5, ease: 'bounce'}, '<0.2');

//call back function
function onComplete() {
  animation = true;
}
function onStart() {
  animation = false;
}
contact.addEventListener('click', goDownfooter);

portfolio.addEventListener('click', goDown);
goTop.addEventListener('click', goHome);

trigger.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handaleEnter)
);
trigger.forEach((trigger) =>
  trigger.addEventListener('mouseleave', hundaleLeave)
);
window.addEventListener('scroll', debounce(checkSlide, 200));
