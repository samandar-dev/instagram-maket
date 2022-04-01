
function modalFunc() {
  const listItems = document.querySelectorAll('.insta__item');
  const modalBox = document.querySelector('.modal__box');
  const modalCloseBtn = document.querySelector('.modal__close-btn');

  objArr.forEach((item) => {
    listItems.forEach((items) => {
      if (items.id == item.id) {
        items.addEventListener('click', () => {
          let modalItems = document.querySelector('.insta__content-box');
          modalItems.className = "insta__content-box in-con d-flex";
          modalItems.innerHTML = `
                          <div class="in-con__mediya">
                            <button class="in-con__left-btn"><i class='bx bx-chevron-left'></i></button>
                              <img class="in-con__img" src="${item.urls[0]}" alt="img">
                              <video class="in-con__vidyo" autoplay controls src="${item.urls[0]}"></video>
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
                                <button class="btns__like" onclick="likeFunc(${item.id})"><i class='bx bx-heart' id="${item.id}"></i></button>
                                <button class="btns__com"><i class='bx bxs-message-rounded-dots'></i></button>
                                <button class="btns__per"><i class='bx bxl-telegram'></i></button>
                              </div>
        
                              <button class="btns__save" onclick="saveFunc(${item.id})"><i class='bx bx-bookmark' id="${item.id}"></i></button>
                            </div>
                            <p class="btns__like-tit"><span class="like_num">${item.like}</span> отметок "Нравится"</p>
                            <p class="btns__tit">20 ЧАСОВ НАЗАД</p>
                          </div>`;

          savebtnCount++;
          modalBox.appendChild(modalItems);
          modalBox.classList.remove('d-none');
        })

        modalCloseBtn.addEventListener('click', () => {
          const video = document.querySelector('.in-con__vidyo');
          modalBox.classList.add('d-none');
          video.pause();
        })
      }

      // const boxSlider = document.querySelector('.in-con__mediya');
      // let sliderBox = document.querySelector('.in-con__slider-box');
      // sliderBox.className = "in-con__slider-box";

      // if (vidUrl == true) {
      //   console.log('vid');
      //   sliderBox.innerHTML = `
      //       <div class="img-video">
      //         <video class="in-con__vidyo" controls src="${item.urls[0]}"></video>
      //       </div>
      //       <div class="img-box">
      //         <img class="in-con__img" src="${item.urls[1]}" alt="img">
      //       </div>`;

      //   boxSlider.appendChild(sliderBox);
      // } else if (imgUrl == true) {
      //   // const boxSlider = document.querySelector('.in-con__mediya');
      //   // let sliderBox = document.querySelector('.in-con__slider-box');
      //   // sliderBox.className = "in-con__slider-box";

      //   console.log('img');
      //   sliderBox.innerHTML = `
      //       <div class="img-box">
      //         <img class="in-con__img" src="${item.urls[0]}" alt="img">
      //       </div>
      //       <div class="img-video">
      //         <video class="in-con__vidyo" controls src="${item.urls[1]}"></video>
      //       </div>`;

      //   boxSlider.appendChild(sliderBox);
      // }
    })
  })


  // const modalSliderBtnLeft = document.querySelector('.in-con__left-btn');
  // const modalSliderBtnRight = document.querySelector('.in-con__right-btn');
  // const modalSliderBox = document.querySelector('.in-con__slider-box');

  // modalSliderBtnRight.addEventListener('click', () => {
  //   console.log('aaaa');
  //   modalSliderBox.style.transform = 'translateX(-100%)'
  // })

  // modalSliderBtnLeft.addEventListener('click', () => {
  //   console.log('aaaa');
  //   modalSliderBox.style.transform = 'translateX(0%)'
  // })
}

modalFunc();



