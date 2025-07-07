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