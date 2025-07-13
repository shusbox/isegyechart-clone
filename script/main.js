const song_select_btn = document.getElementById('song-selector-btn');
const song_search_close_btn = document.getElementById('song-search-close-btn');
const song_select_modal = document.getElementById('modal-background');
const modal = document.getElementById("modal-background");
const songSearch = document.getElementById("song-search");

function modalOpen() {
  songSearch.classList.remove("close");

  modal.style.display = "block";
  document.documentElement.style.overflow = 'hidden';

  songSearch.style.animation = "none";
  songSearch.offsetHeight;
  songSearch.style.animation = "slideUp 0.3s ease-out forwards";
}

function modalClose() {
  songSearch.classList.add("close");
  document.documentElement.style.overflow = 'auto';

  songSearch.style.animation = "none";
  songSearch.offsetHeight;
  songSearch.style.animation = "slideDown 0.3s ease-out forwards";

  songSearch.addEventListener('animationend', () => {
    modal.style.display = "none";
    songSearch.classList.remove("close");
  });
}

song_select_btn.addEventListener('click', () => {
  modalOpen();
});
song_search_close_btn.addEventListener('click', () => {
  modalClose();
});
song_select_modal.addEventListener('click', (event) => {
  if (event.target === song_select_modal) {
    modalClose();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalClose();
  }
});