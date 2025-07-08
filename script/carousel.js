// 캐러셀 렌더링
const carousel_txt = [
  { root: '/resource/banner/banner_stargazers_desktop.png', description: '이세계아이돌 정규 5집', title: 'Stargazers 플레이리스트', style: 'color: white;' },
  { root: '/resource/banner/banner_event_2_desktop.png', description: '이세계아이돌 4집 응원하고 이벤트 굿즈 받아가자!', title: '4집 이벤트페이지 오픈', style: '' },
  { root: '/resource/banner/banner_streaming_pc.png', description: '스밍이 처음인 이파리들을 위한', title: '멜론 스트리밍 가이드', style: '' },
  { root: '/resource/banner/banner_1_desktop.png', description: '이세계아이돌을 처음 보는 <br> 새싹들을 위한 길라잡이', title: '이세돌 유입 가이드', style: '' }
];

const carousel_btn = [
  { root: '/resource/banner/banner_2_desktop.png', txt: '이세계차트팀 지원하기' }
];

function renderCarouselTxt(data) {
  const track = document.getElementById('carousel-track');

  data.forEach(item => {
    const carousel_img_container = `
      <div class="carousel-img-container">
        <div class="carousel-img-txt" style="${item.style}">
          <p> ${item.description} </p>
          <h1> ${item.title} </h1>
        </div>
        <img src="${item.root}" class="carousel-img">
      </div>
    `;
    track.insertAdjacentHTML('beforeend', carousel_img_container);
  });
}

function renderCarouselBtn(data) {
  const track = document.getElementById('carousel-track');

  data.forEach(item => {
    const carousel_img_container = `
      <div class="carousel-img-container">
        <button class="carousel-img-btn">
          <p style="margin: 0; margin-left: 4px;"> ${item.txt} </p>
          <svg xmlns="http://www.w3.org/2000/svg"
          width="24px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"
          class="w_var(--icon-size,_16px) h_var(--icon-size,_16px) w_6 h_6" color="currentColor">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <img src="${item.root}" class="carousel-img">
      </div>
    `;
    track.insertAdjacentHTML('beforeend', carousel_img_container);
  });
}

renderCarouselTxt(carousel_txt);
renderCarouselBtn(carousel_btn);

// 캐러셀 기능
const slide = document.getElementById('carousel-slide');
const track = document.getElementById('carousel-track');
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const nextIconPath = nextBtn.querySelector('svg path');
const backIconPath = backBtn.querySelector('svg path');
const firstPage = track.children[0];
const secondPage = track.children[1];
const thirdPage = track.children[2];
const lastlastPage = track.children[(track.children.length) - 2];
const lastPage = track.children[(track.children.length) - 1];

const clonefirstPage = firstPage.cloneNode(true);
const clonesecondPage = secondPage.cloneNode(true);
const clonethirdPage = thirdPage.cloneNode(true);
const clonelastlastPage = lastlastPage.cloneNode(true);
const clonelastPage = lastPage.cloneNode(true);

track.insertBefore(clonelastPage, track.firstChild);
track.insertBefore(clonelastlastPage, track.firstChild);
track.appendChild(clonefirstPage);
track.appendChild(clonesecondPage);
track.appendChild(clonethirdPage);

let pageCount = 2;
let isAnimating = false;
track.style.transform = `translateX(-${(626) * pageCount}px)`;

// 왜 캐러셀 움직일떄 슬라이드 밑쪽 라운드가 뾰족해지는가에대한고찰
function move() {
  track.style.transition = 'transform 0.45s';
  track.style.transform = `translateX(-${(626) * pageCount}px)`;
}

function moveBtn() {
  nextBtn.style.transition = '0s';
  backBtn.style.transition = '0s';
  nextBtn.style.cursor = 'default';
  backBtn.style.cursor = 'default';  
  if (nextIconPath) nextIconPath.setAttribute('fill', '#8f8f8f');
  if (backIconPath) backIconPath.setAttribute('fill', '#8f8f8f');
  nextBtn.style.backgroundColor = '#f9f9f9';
  backBtn.style.backgroundColor = '#f9f9f9';
}

function moveBtnOrigin() {
  nextBtn.style.transition = '0s';
  backBtn.style.transition = '0s';
  nextBtn.style.cursor = 'pointer';
  backBtn.style.cursor = 'pointer';  
  if (nextIconPath) nextIconPath.setAttribute('fill', '#202020');
  if (backIconPath) backIconPath.setAttribute('fill', '#202020');
  nextBtn.style.backgroundColor = '#f0f0f0';
  backBtn.style.backgroundColor = '#f0f0f0';
}

function transitionHandler(page) {
  if (pageCount === 7 || pageCount === 0) {
    track.style.transition = 'none';
    pageCount = page;
    track.style.transform = `translateX(-${626 * pageCount}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        track.style.transition = 'transform 0.45s';
      });
    });
  }
}

function makeTransitionHandler(Page) {
  const handler = () => {
    transitionHandler(Page);
    track.removeEventListener('transitionend', handler);
  };
  return handler;
}

nextBtn.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  pageCount++;
  moveBtn();
  move();
  
  track.addEventListener('transitionend', makeTransitionHandler(2));
  track.addEventListener('transitionend', () => {
    moveBtnOrigin();
    isAnimating = false;
  });
});

backBtn.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  pageCount--;
  moveBtn();
  move();

  track.addEventListener('transitionend', makeTransitionHandler(5));
  track.addEventListener('transitionend', () => {
    moveBtnOrigin();
    isAnimating = false;
  });
})