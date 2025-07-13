// 키 가리는게좋긴해~~
const key = 'AIzaSyDmXIRUFlgllGyXwFNiEOlqLJV_GQFtUR0';
const videoId = 'nz2_gNQDiVM';
const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`;

function formatViewCount_view(count) {
  const num = Number(count);
  return (num / 1_0000).toFixed(0).replace(/\.0$/, '');
}

function formatViewCount_like(count) {
  const num = Number(count);
  return (num / 1_0000).toFixed(1).replace(/\.0$/, '');
}

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const stats = data.items[0].statistics;
    document.getElementById('view-count').textContent = `${formatViewCount_view(stats.viewCount)}만`;
    document.getElementById('like-count').textContent = `${formatViewCount_like(stats.likeCount)}만`;
    document.getElementById('comment-count').textContent = `${Number(stats.commentCount)}`;
  })
  .catch(error => console.error('YouTube API 에러:', error));