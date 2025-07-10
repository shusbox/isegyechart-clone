// 음악 바로가기
const music = [
  { root: '/resource/music/Melon.svg', name: '멜론', link: 'https://www.melon.com/song/detail.htm?songId=38958780' },
  { root: '/resource/music/Youtube.svg', name: '유튜브 뮤비', link: 'https://www.youtube.com/watch?v=nz2_gNQDiVM' },
  // 유튜브 배경 삭제해보기.....
  { root: '/resource/music/Youtube.svg', name: '유튜브 음원', link: 'https://www.youtube.com/watch?v=UJdkUFo4TNU' },
  { root: '/resource/music/Genie.svg', name: '지니', link: 'https://www.genie.co.kr/detail/songInfo?xgnm=110167497' },
  { root: '/resource/music/Bux.svg', name: '벅스', link: 'https://music.bugs.co.kr/track/33539943' },
  { root: '/resource/music/FLO.svg', name: '플로', link: 'https://www.music-flo.com/detail/track/540765081/details' },
  { root: '/resource/music/Spotify.svg', name: '스포티파이', link: 'https://open.spotify.com/track/5ddJtDFlVL9GwdWNdnEDGL' },
  { root: '/resource/music/AppleMusic.svg', name: '애플 뮤직', link: 'https://music.apple.com/kr/album/stargazers/1814743656?i=1814743658' }
];

function renderMusic(data) {
  const link = document.getElementById('music-link');

  data.forEach(item => {
    const music_goto = `
      <div class="music-goto" onclick="window.open('${item.link}')">
        <div style="display: flex; align-items: center;">
          <img src="${item.root}" width="20px">
          <p> ${item.name} </p>
        </div>
        <img src="/resource/mainPage/arrow.svg" width="12px">
      </div>
    `;
    link.insertAdjacentHTML('beforeend', music_goto);
  });
}
renderMusic(music);

// 이세계아이돌 숲 프로필
const isegyeidol = [
  { profile: '/resource/profile/ine.png', name: '아이네', status: '오프라인', link: 'https://ch.sooplive.co.kr/inehine' },
  { profile: '/resource/profile/jingburger.png', name: '징버거', status: '오프라인', link: 'https://ch.sooplive.co.kr/jingburger1' },
  { profile: '/resource/profile/lilpa.png', name: '릴파', status: '오프라인', link: 'https://ch.sooplive.co.kr/lilpa0309' },
  { profile: '/resource/profile/jururu.png', name: '주르르', status: '오프라인', link: 'https://ch.sooplive.co.kr/cotton1217' },
  { profile: '/resource/profile/gosegu.png', name: '고세구', status: '오프라인', link: 'https://ch.sooplive.co.kr/gosegu2' },
  { profile: '/resource/profile/viichan.png', name: '비챤', status: '오프라인', link: 'https://ch.sooplive.co.kr/viichan6' },
  { profile: '/resource/profile/wakgood.png', name: '우왁굳', status: '오프라인', link: 'https://ch.sooplive.co.kr/ecvhao'}
];

function renderProfile(data) {
  const profile = document.getElementById('isegye-profile');

  // 온클릭만드셈
  data.forEach(item => {
    const music_goto = `
      <div class="music-goto" style="padding: 8px;" onclick="window.open('${item.link}')">
        <div style="display: flex; align-items: center;">
          <div class="isegye-profile-pic">
            <img src="${item.profile}" width="28px" style="display: block; border-radius: 100px;">
          </div>
          <p style="color: #646464; font-weight: 500;"> ${item.name} </p>
        </div>
        <p style="color: #8d8d8d; font-size: 12px;"> ${item.status} </p>
      </div>
    `;
    profile.insertAdjacentHTML('beforeend', music_goto);
  });
}
renderProfile(isegyeidol);

// 바로가기
const quicklink = [
  // 인스타랑 트위터 아이콘 사진 줄이기
  { root: '/resource/icon/X.svg', name: '이세계차트 X', link: 'https://x.com/isegyechart' },
  { root: '/resource/icon/instagram.svg', name: '이세계차트 인스타', link: 'https://www.instagram.com/isegyechart' },
  { root: '/resource/icon/navercafe.png', name: '왁물원', link: 'https://cafe.naver.com/MyCafeIntro.nhn?clubid=27842958' },
  { root: '/resource/icon/Youtube.svg', name: '왁타버스 유튜브', link: 'https://www.youtube.com/@waktaverse' },
  { root: '/resource/icon/guysome.png', name: '가이섬', link: 'https://xn--o39an51b2re.com/' }
];

function renderQuicklink(data) {
  const link = document.getElementById('quick-link');

  data.forEach(item => {
    const music_goto = `
      <div class="music-goto" onclick="window.open('${item.link}')">
        <div style="display: flex; align-items: center;">
          <img src="${item.root}" width="20px">
          <p> ${item.name} </p>
        </div>
        <img src="/resource/mainPage/arrow.svg" width="12px">
      </div>
    `;
    link.insertAdjacentHTML('beforeend', music_goto);
  });
}
renderQuicklink(quicklink);