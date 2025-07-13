// 곡 선택하기
const selectmusic = [
  // cover title singer select
  { cover: '/resource/cover/5th_Stargazers.png', title: 'Stargazers', singer: '이세계아이돌', select: 'SSLB-select' },
  { cover: '/resource/cover/5th_Stargazers.png', title: 'MEMORY', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/5th_Stargazers.png', title: 'ELEVATE', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/4th_MistyRainbow.png', title: 'Misty Rainbow', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/ost_SYZYGY.png', title: 'SYZYGY', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/TOKYO.png', title: 'TOKYO (Feat. BIG Naughty, 고세구)', singer: 'Fleeky Bang', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/etc_isegyeFestival.png', title: 'Superhero', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/etc_isegyeFestival.png', title: 'OVER', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/3rd_KIDDING.png', title: 'KIDDING', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/ost_AnotherWorld.png', title: 'Another World', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/Highway_Romanse.png', title: '고속도로 로망스', singer: '이세계록스타 (숲튽훈), 주르르', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/ost_LOCKDOWN.png', title: 'LOCKDOWN', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/CanYouFeelMyLove.png', title: '잠깐나올래', singer: 'RUSUK', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/Hollow_Season.png', title: '없는계절 (Feat. 아이네, C JAMM, YUNHWAY)', singer: '그냥노창', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/2nd_WinterSpring.png', title: '겨울봄', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
  { cover: '/resource/cover/1st_REWIND.png', title: 'RE : WIND', singer: '이세계아이돌', select: 'SSLB-noneSelect' },
];

function runderSelectMusic(data) {
  const container = document.getElementById('song-search-list-container');

  data.forEach(item => {
    const searchMusic = `
      <div class="song-search-list">
        <div class="song-search-list-music">
          <div style="display: flex; align-items: center;">
            <img src="${item.cover}">
            <div class="song-search-list-txt">
              <h2> ${item.title} </h2>
              <p> ${item.singer} </p>
            </div>
          </div>
          <div class="song-search-list-btn-container">
            <div class="song-search-list-btn ${item.select}"></div>
          </div>
        </div>
        <hr class="song-search-line">
      </div>
    `
    container.insertAdjacentHTML('beforeend', searchMusic);
  });
}
runderSelectMusic(selectmusic);

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

// 오늘의 추천 영상
const video = [
  { img: '/resource/thumbnail/test1.png', title: '[Original song] 청개구리 - 데스해머쵸로키', channel: '왁타버스 WAKTAVERSE', link: 'https://youtu.be/7Q61ZtM2qyM?si=TRD31ELebjKk6CCl' },
  { img: '/resource/thumbnail/test2.png', title: '이세계아이돌 (ISEGYE IDOL) \'Misty Rainbow\' Official MV', channel: '왁타버스 WAKTAVERSE', link: 'https://youtu.be/DJLa8QYUtmQ?si=sjuTwLkpgpc4YtA1' },
  { img: '/resource/thumbnail/test3.png', title: '이세계아이돌 (ISEGYE IDOL) \'MEMORY\' 이세계페스티벌 2025 실황', channel: '왁타버스 WAKTAVERSE', link: 'https://youtu.be/nsVbRO_k9b8?si=-eZ3RrpMOclQgPyc' },
  { img: '/resource/thumbnail/test4.png', title: '이세계아이돌 (ISEGYE IDOL) \'STARGAZERS\' Official MV', channel: '왁타버스 WAKTAVERSE', link: 'https://youtu.be/nz2_gNQDiVM?si=QLONtS4GXf-SmVgB' },
  { img: '/resource/thumbnail/test5.png', title: '[Original Song] 티파니 - Q&A', channel: '왁타버스 WAKTAVERSE', link: 'https://youtu.be/4f5Db-xScu4?si=JcMObSKgZxkq4Zmv' }
]

function renderSuggestionVideo(data) {
  const suggestion_video = document.getElementById('suggestion-video-container')

  data.forEach(item => {
    const video = `
      <div class="suggestion-video" onclick="window.open('${item.link}')">
        <img src="${item.img}">
        <div class="suggestion-video-description">
          <h2> ${item.title} </h2>
          <p> ${item.channel} </p>
        </div>
      </div>
    `;
    suggestion_video.insertAdjacentHTML('beforeend', video);
  });
}
renderSuggestionVideo(video);