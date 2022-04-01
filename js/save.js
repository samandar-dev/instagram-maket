
const saveList = document.querySelector('#save-list');
const saveBtnList = document.querySelector('#saveBtnList');
const pubBtnList = document.querySelector('#pubBtnList');

saveBtnList.addEventListener('click', () => {
  saveList.className = "insta__list row m-0 d-flex"
  pubList.className = "d-none"
})

pubBtnList.addEventListener('click', () => {
  pubList.className = "insta__list row m-0 d-flex"
  saveList.className = "d-none"
})

let likeCout = false
function saveFunc(id) {
  console.log('ww');

  const saveBtnBox = document.querySelector('.butns-box');
  let saveBtn = document.createElement('button');

  const saveIconBtn = document.querySelector('.bx-bookmark');
  saveIconBtn.className = "bx bxs-bookmark";

  let saveArr = []
  let saveCountt = true

  objArr.forEach((item) => {
    if (saveCountt == true && id == item.id) {
      item.save = true
      if (item.save == true) {
        console.log('save true');
        if (item.urls[0].at(-1) == '4') {
          let li = document.createElement('li');
          li.className = `insta__item col-4`;
          li.id = `${item.id}`
          li.innerHTML = `
          <div class="insta__item-img-box">
          <span class="icon-play"><i class='bx bx-play'></i></span>
          <img class="insta-img" src="${item.videoImg}" alt="img">
          <span class="insta__item-like d-none align-items-center"><i class='bx bx-play' style='color:#ffffff'></i>${item.like}</span>
          <span class="insta__item-com d-none align-items-center"><i class='bx bxs-message-rounded-dots'></i>${item.comment}</span>
              </div>`;

          saveList.appendChild(li);
        } else if (item.urls.length == 2 && item.urls[0].at(-1) != '4') {
          let li = document.createElement('li');
          li.className = `insta__item col-4`;
          li.id = `${item.id}`
          li.innerHTML = `
          <div class="insta__item-img-box">
          <span class="icon-merge"><i class='bx bx-merge'></i></span>
                <img class="insta-img" src="${item.urls[0]}" alt="img">
                <span class="insta__item-like d-none align-items-center"><i class='bx bxs-heart' style='color:#ffffff'></i>${item.like}</span>
                  <span class="insta__item-com d-none align-items-center"><i class='bx bxs-message-rounded-dots'></i>${item.comment}</span>
                  </div>`;

          saveList.appendChild(li);
        } else {
          let li = document.createElement('li');
          li.className = `insta__item col-4`;
          li.id = `${item.id}`
          li.innerHTML = `
          <div class="insta__item-img-box">
          <img class="insta-img" src="${item.urls[0]}" alt="img">
          <span class="insta__item-like d-none align-items-center"><i class='bx bxs-heart' style='color:#ffffff'></i>${item.like}</span>
          <span class="insta__item-com d-none align-items-center"><i class='bx bxs-message-rounded-dots'></i>${item.comment}</span>
          </div>`;

          saveList.appendChild(li);
        }
        saveArr[saveArr.length] = item;
      }
    }
    // else if (saveCountt == false) {
    //   saveArr.forEach((remItem) => {
    //     if (remItem.save == false) {
    //       remItem.className = 'd-none'
    //       item.save = false
    //       saveCountt = 1
    //       // saveList.remove(item);
    //       console.log('remove true');
    //     }
    //   })
    // }
    // saveCountt = false
    console.log(saveArr);
  })

  modalFunc();
}


function likeFunc(id) {

  const likeTit = document.querySelector('.like_num');
  const likeBtn = document.querySelector('.btns__like');
  const likeIcon = document.querySelector('.bx-heart');

  let n = likeTit.textContent.at(-1)
  let end = 1
  let tot = eval(n) + eval(end)

  if (likeCout == false) {
    likeCout = true
    likeTit.textContent += tot
    likeIcon.className = 'bx bxs-heart';
  } else {
    likeTit.textContent -= eval(n) - eval(end)
    likeIcon.className = 'bx bx-heart';
  }

}