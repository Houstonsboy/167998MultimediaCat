const video = document.getElementById('wildlife-video');
const btn = document.getElementById('toggle-btn');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.style.display = 'block';
    video.play();
    btn.textContent = 'Hide Video';
  } else {
    video.pause();
    video.style.display = 'none';
    btn.textContent = 'Play Video';
  }
});
