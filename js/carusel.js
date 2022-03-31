let carBtnleft = document.querySelector('.act__carusel-btn-left');
let carBtnright = document.querySelector('.act__carusel-btn-righ');
let count1 = 0;
let count2 = 0;
let count3 = 0;

// carBtnright.forEach((el, index) => {
// let n = index
// if (n == 0) {

carBtnright.addEventListener('click', () => {
  console.log('aaa');
  count1++;
  if (count1 == 1) {
    act__list.style.transform = 'translateX(-25%)';
  } else if (count1 == 2) {
    act__list.style.transform = 'translateX(-50%)';
  } else if (count1 == 3) {
    act__list.style.transform = 'translateX(-75%)';
  } else if (count1 == 4) {
    act__list.style.transform = 'translateX(-100%)';
  }
  else {
    act__list.style.transform = 'translateX(0)';
    count1 = 0
  }
})
// }
// })

// carBtnleft.forEach((el, index) => {
// let n = index
// if (n == 0) {
carBtnleft.addEventListener('click', () => {
  if (count1 == 1) {
    act__list.style.transform = 'translateX(0)';
  } else if (count1 == 2) {
    act__list.style.transform = 'translateX(-25%)';
  } else if (count1 == 3) {
    act__list.style.transform = 'translateX(-50%)';
  } else if (count1 == 4) {
    act__list.style.transform = 'translateX(-75%)';
  }
  else {
    act__list.style.transform = 'translateX(0)';
    count1 = 0
  }
  count1--;
})
// }
// })
