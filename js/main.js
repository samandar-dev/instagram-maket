const pubList = document.querySelector('.insta__list');
let saveCount = 1

objArr.forEach((item) => {

  // console.log(item.urls[0].at(-1));

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

    pubList.appendChild(li);
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


  const listItems = document.querySelectorAll('.insta__item');
  const modalBox = document.querySelector('.modal__box');
  const modalCloseBtn = document.querySelector('.modal__close-btn');
  const video = document.querySelectorAll('.in-con__vidyo');

  const iconUrlsLength = document.querySelector('.icon-merge');

  listItems.forEach((items) => {
    if (items.id == item.id)
      items.addEventListener('click', () => {
        let modalItems = document.querySelector('.insta__content-box');
        modalItems.className = "insta__content-box in-con d-flex";
        modalItems.innerHTML = `
                        <div class="in-con__mediya">
                          <button class="in-con__left-btn"><i class='bx bx-chevron-left'></i></button>
                          <img class="in-con__img" src="${item.urls[0]}" alt="img">
                          <video controls autoplay class="in-con__vidyo" src="${item.urls[0]}"></video>
                          <button class="in-con__right-btn"><i class='bx bx-chevron-right'></i></button>
                        </div>
      
                        <div class="in-con__desc__btns-box">
                          <div class="in-con__desc-title d-flex align-items-center justify-content-between">
                            <div class="in-con__tit-box d-flex align-items-center">
                              <div class="in-con__logo-box">
                                <button class="hero__title-btn">
                                  <img class="in-con__logo" src="images/disney-logo.jpg" alt="logo">
                                </button>
                              </div>
                              <div class="in-con__title-tit">
                                <h3 class="in-con__title">disney <i class='bx bxs-badge-check' style='color:#3897f0'></i>
                                </h3>
                                <p class="in-con__title fw-light">Оригинальная аудиодорожка</p>
                              </div>
                            </div>
                            <button class="in-con__menu-btn">...</button>
                          </div>
      
                          <div class="in-con__desc-box">
                            <div class="in-con__text-box d-flex align-items-center  mb-2">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/disney-logo.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">disney <i class='bx bxs-badge-check' style='color:#3897f0'></i>
                                  </h3>
                                  <p class="in-con__title fw-light">
                                    ${item.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center mb-2">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/act2.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">Tom</h3>
                                  <p class="in-con__title fw-light">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aspernatur dolorem, alias
                                    omnis at cupiditate officiis. Similique molestias perferendis
                                    deleniti ducimus velit.
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/act1.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">John</h3>
                                  <p class="in-con__title fw-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque quibusdam praesentium
                                    qui eum at!
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/disney-logo.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">disney <i class='bx bxs-badge-check' style='color:#3897f0'></i>
                                  </h3>
                                  <p class="in-con__title fw-light">
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nihil
                                    illo tempore voluptas quo officia eligendi deleniti sit reprehenderit cum consequuntur!
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/act2.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">Lusi</h3>
                                  <p class="in-con__title fw-light">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo delectus laboriosam
                                    exercitationem! Iure accusamus illo aliquam odit natus. Voluptate inventore accusamus
                                    labore
                                    suscipit exercitationem magni doloribus esse nesciunt in odio?
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/act3.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">Tom</h3>
                                  <p class="in-con__title fw-light">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo delectus laboriosam
                                    exercitationem! Iure accusamus illo aliquam odit natus. Voluptate inventore
                                  </p>
                                </div>
                              </div>
                            </div>
      
                            <div class="in-con__text-box d-flex align-items-center">
                              <div class="in-con__tit-box d-flex">
                                <div class="in-con__logo-box">
                                  <button class="hero__title-btn">
                                    <img class="in-con__logo" src="images/act2.jpg" alt="logo">
                                  </button>
                                </div>
      
                                <div class="in-con__title-tit">
                                  <h3 class="in-con__title">John</h3>
                                  <p class="in-con__title fw-light">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo delectus laboriosam
                                    exercitationem! Iure accusamus illo aliquam odit natus. Voluptate inventore
                                    exercitationem! Iure accusamus illo aliquam odit natus. Voluptate inventore
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="butns-box btns d-flex align-items-center justify-content-between">
                            <div class="butns__left d-flex align-items-center">
                              <button class="btns__like"><i class='bx bx-heart'></i></button>
                              <button class="btns__com"><i class='bx bxs-message-rounded-dots'></i></button>
                              <button class="btns__per"><i class='bx bxl-telegram'></i></button>
                            </div>
      
                            <button class="btns__save"><i class='bx bx-bookmark'  id="${item.id}"></i></button>
                          </div>
                          <p class="btns__like-tit">${item.like} отметок "Нравится"</p>
                          <p class="btns__tit">20 ЧАСОВ НАЗАД</p>
                        </div>`;

        modalBox.appendChild(modalItems)
        console.log(item.id);
        modalBox.classList.remove('d-none');

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
        modalCloseBtn.addEventListener('click', () => {
          modalBox.classList.add('d-none');
        })
      })
  })
})

// MODAL PART 




