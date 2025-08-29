export default function decorate(block) {
  const videoUrl = block.textContent.trim();
  block.textContent = '';

  // Validate that the input is a proper URL
  try {
    const url = new URL(videoUrl);
    if (!['http:', 'https:'].includes(url.protocol)) {
      console.warn('Unsupported URL protocol:', url.protocol);
      return;
    }

    const video = document.createElement('video');
    video.src = url.href;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    video.className = 'herovideo-video';
    block.classList.add('herovideo');
    block.appendChild(video);
  } catch (e) {
    console.warn('Invalid video URL:', videoUrl);
  }
}
