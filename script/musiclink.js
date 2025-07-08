// 음악 바로가기 렌더링
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
]

function renderMusic(data) {
  const link = document.getElementById('music-link');

  data.forEach(item => {
    const music_link_click = `
      <div class="music-link-click" onclick="window.open('${item.link}')">
        <div style="display: flex; align-items: center;">
          <img src="${item.root}" width="20px">
          <p> ${item.name} </p>
        </div>
        <img src="/resource/arrow.svg" width="12px">
      </div>
    `;
    link.insertAdjacentHTML('beforeend', music_link_click);
  });
}
renderMusic(music);
