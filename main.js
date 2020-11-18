// function view(e) {
//   console.log(e);
// }

// function addEventListenerByClass(className, event, fn) {
//   var list = document.querySelectorAll(className);
//   for (var i = 0, len = list.length; i < len; i++) {
//     list[i].addEventListener(event, fn, false);
//   }
// }
// addEventListenerByClass('.img-one', 'mousemove', view);

const trigger = document.querySelectorAll('.img-one,.img-two');
const activeOne = document.querySelectorAll('.discripson-one');
const activetwo = document.querySelectorAll('.discripson-two');

function handaleEnter() {
  if (this.classList[0] === 'img-one') {
    activeOne.forEach((one) => {
      one.classList.add('active');
    });
  } else {
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

trigger.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handaleEnter)
);
trigger.forEach((trigger) =>
  trigger.addEventListener('mouseleave', hundaleLeave)
);
//page animation;
const portfolio = document.querySelector('.Portfolioa');
const contact = document.querySelector('.Contact');
const home = document.querySelector('.home');
const portfolioSection = document.querySelector('.Portfolio');
portfolio.addEventListener('click', goDown);
function goDown() {
  let distance = portfolioSection.offsetTop;
  scrollBy({top: distance, behavior: 'smooth'});
}
//gsap animation:
const timeline = gsap.timeline({defaults: {duration: 2}});
timeline
  .from('.logo', {x: 300, ease: 'circ', delay: 0.5, opacity: 0})
  .from('.tex', {x: -300, ease: 'circ', delay: 0.5, opacity: 0}, 1)
  .from('.home-svg', {x: 300, ease: 'circ', opacity: 0}, 1)
  .from('.circle-one', {y: -700, duration: 1, ease: 'bounce', opacity: 0})
  .from(
    '.circle-two',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<.3'
  )
  .from(
    '.circle-three',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<.3'
  )
  .from(
    '.circle-four',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<.4'
  )
  .from(
    '.circle-five',
    {y: -700, duration: 1, ease: 'bounce', opacity: 0},
    '<.3'
  )
  .from('.icon-pack', {x: -300, ease: 'circ', delay: 0.5, opacity: 0}, 1);
