const pubList = document.querySelector('.insta__list');
let savebtnCount = 1;

let vidUrl = false
let imgUrl = false

objArr.forEach((item) => {
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

    pubList.appendChild(li);
  } else if (item.urls.length == 2 && item.urls[0].at(-1) == '4') {
    vidUrl = true
    let li = document.createElement('li');
    li.className = `insta__item col-4`;
    li.id = `${item.id}`
    li.innerHTML = `
            <div class="insta__item-img-box">
            <span class="icon-merge"><i class='bx bx-merge'></i></span>
              <img class="insta-img" src="${item.videoImg}" alt="img">
              <span class="insta__item-like d-none align-items-center"><i class='bx bxs-heart' style='color:#ffffff'></i>${item.like}</span>
                <span class="insta__item-com d-none align-items-center"><i class='bx bxs-message-rounded-dots'></i>${item.comment}</span>
            </div>`;

    pubList.appendChild(li);
  } else if (item.urls.length == 2 && item.urls[0].at(-1) == 'g') {
    imgUrl = true
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

    pubList.appendChild(li);
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

    pubList.appendChild(li);
  }
})



// MODAL PART 



