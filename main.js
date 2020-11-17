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
console.log(trigger);

function handaleEnter() {
  activeOne.forEach((one) => {
    one.classList.add('active');
  });
}
function hundaleLeave() {
  activeOne.forEach((one) => {
    one.classList.remove('active');
  });
}

trigger.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handaleEnter)
);
trigger.forEach((trigger) =>
  trigger.addEventListener('mouseleave', hundaleLeave)
);

const triggerTwo = document.querySelectorAll('.img-two');
const activetwo = document.querySelectorAll('.discripson-two');

function handaleEnterTwo() {
  activetwo.forEach((one) => {
    one.classList.add('active');
  });
}
function hundaleLeaveTwo() {
  activetwo.forEach((one) => {
    one.classList.remove('active');
  });
}

triggerTwo.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handaleEnterTwo)
);
triggerTwo.forEach((trigger) =>
  trigger.addEventListener('mouseleave', hundaleLeaveTwo)
);
