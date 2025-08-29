export default function decorate(block) {
  const videoUrl = block.textContent.trim();
  block.textContent = '';

  const video = document.createElement('video');
  video.src = videoUrl;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  video.className = 'herovideo-video';
  block.classList.add('herovideo');
  block.appendChild(video);
}
