// 음악 바로가기 렌더링
const music = [
  { root: '/resource/music/Melon.svg', name: '멜론' },
  { root: '/resource/music/Youtube.svg', name: '유튜브 뮤비' },
  { root: '/resource/music/Youtube.svg', name: '유튜브 음원' },
  { root: '/resource/music/Genie.svg', name: '지니' },
  { root: '/resource/music/Bux.svg', name: '벅스' },
  { root: '/resource/music/FLO.svg', name: '플로' },
  { root: '/resource/music/Spotify.svg', name: '스포티파이' },
  { root: '/resource/music/AppleMusic.svg', name: '애플 뮤직' }
]

function renderMusic(data) {
  const link = document.getElementById('music-link');

  data.forEach(item => {
    const music_link_click = `
      <div class="music-link-click">
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
