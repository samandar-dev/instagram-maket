const saveBtn = document.querySelectorAll('.bx-bookmark');
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


saveBtn.forEach((saveB) => {
  saveB.addEventListener('click', () => {
    if (saveCount == 1) {
      saveB.className = 'bx bxs-bookmark'
      saveCount++
      item.save = true

      if (saveB.id == item.id && item.save == true) {
        console.log(saveB.id);
        console.log('ddddddd');
        if (item.urls[0].at(-1) == '4') {
          let li = document.createElement('li');
          li.className = `insta__item col-4`;
          li.id = `${item.id}`
          li.innerHTML = `
                        <div class="insta__item-img-box">
                        <span class="icon-play"><i class='bx bx-play'></i></span>
                          <img class="insta-img" src="${item.videoImg}" alt="img">
                          <span class="insta__item-like d-none align-items-center"><i class='bx bxs-heart' style='color:#ffffff'></i>${item.like}</span>
                            <span class="insta__item-com d-none align-items-center"><i class='bx bxs-message-rounded-dots'></i>${item.comment}</span>
                        </div>`;

          saveList.appendChild(li);
        } else if (item.urls.length == 2) {
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
      }
      else {
        saveList.remove(li);
      }
    } else {
      saveB.className = 'bx bx-bookmark'
      saveCount--
      item.save = false
    }
  })
})