'use strict';

// WE USE THE NAME OF THE FUNCTION NOT THE FUNCTION FORM LIKE handleClick(), BECAUSE WE WANT TO HAPPEN FUNCTION WHEN THE CLICK EVENT HAPPENS OTHERWISE IT WILL HAPPEN WHENEVER THE PAGE LOADS
// IT JUST ASSIGN THE EVENT TO THE BUTTONS
// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//   alert('I got clicked!');
// }



// ANONYMOUS FUNCTION
// document.querySelector('button').addEventListener('click', function () { alert('I got clicked!') });

// ANONYMOUS ARROW FUNCTION
// document.querySelector('button').addEventListener('click', () => alert('I got clicked!')); 


// FOREACH()
// btn.forEach((item) => item.addEventListener('click', function hancleClick() { alert('I got clicked!') }));
// btn.forEach((item, index, array) => item.addEventListener('click', function () {
//   console.log(this.innerHTML);
//   item.style.color = '#da0463';
//   this.style.color = 'blueviolet';
// }));

// this here means items which one is clicked
// 'this' creates problem if we use it via arrow function () => {}

// USE keydown instead of keyprerss


// DETECTING BUTTON PRESS
const btn = document.querySelectorAll('.drum');
console.log([...btn]);

btn.forEach((item, index, array) => item.addEventListener('click', function () {
  const btninnerHTML = this.innerHTML;
  makeSound(btninnerHTML);
  buttonAnimation(btninnerHTML);
}));

// DETECTING KEYBOARD PRESS
document.addEventListener('keydown', function (x) {
  makeSound(x.key);
  buttonAnimation(x.key);

  console.log(`I'm event.key on detecting press ${x.key}`);
})

function makeSound(key) {
  // console.log(`I'm event on makeSound() ${key}`);
  switch (key) {
    case 'w':
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      const kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default: console.log(btninnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  btn.forEach((item) => item.classList.remove('pressed')); // it will remove classes from all the buttons 

  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(() => activeButton.classList.remove('pressed'), 2000);
  // setTimeout(function(), milliseconds); function will be executed after how many milliseconds you declared 

}

// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

// switch case is like if else
// switch is a expression case is if default is else
// here is above if btninnerHTML = 'w' do statements stop when arrive break;


// btn.forEach((item) => item.addEventListener('click', () => {
//   console.log(this);
//   this.style.color = 'blueviolet';
// }));

// let song = new Audio('sounds/tom-1.mp3');
// song.play();

// console.log(`${btn.length}`);

// let variable = new Audio([URL string]);
// call it  variable.play();

// MAP()
// [...btn].map((item) => item.addEventListener('click', function (){ alert('I got clicked')}));
// [...btn].map((item) => item.addEventListener('click', () => alert('I got clicked')));

// FOR
// for (let index = 0; index < btn.length; index++) { btn[index].addEventListener('click', function () { alert('I got clicked') }) }
// for (let index = 0; index < btn.length; index++) { btn[index].addEventListener('click', () => alert('I got clicked')) }


// WHILE
// let i = 0;
// while (i < btn.length) {
//   btn[i].addEventListener('click', function () { alert('I got clicked!') });
//   btn[i].addEventListener('click', () => alert('I got clicked!'));
// }
