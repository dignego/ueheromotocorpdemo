export default function decorate(block) {
  const videoUrl = block.dataset.videoUrl || '';
  const altText = block.dataset.videoAlt || 'Hero Video';

  const video = document.createElement('video');
  video.src = videoUrl;
  video.alt = altText;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  block.classList.add('herovideo');
  block.prepend(video);

  const heading = document.createElement('h1');
  heading.textContent = 'BOOKINGS OPEN';
  block.appendChild(heading);

  const button = document.createElement('button');
  button.className = 'cta-button';
  button.textContent = 'BOOK NOW';
  block.appendChild(button);

  const thumbnails = document.createElement('div');
  thumbnails.className = 'herovideo-thumbnails';

  const thumbUrls = [
    'thumb1.jpg',
    'thumb2.jpg',
    'thumb3.jpg',
    'thumb4.jpg'
  ];

  thumbUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Thumbnail ${index + 1}`;
    img.addEventListener('click', () => {
      video.src = url.replace('thumb', 'video'); // Assuming naming convention
      document.querySelectorAll('.herovideo-thumbnails img').forEach(i => i.classList.remove('active'));
      img.classList.add('active');
    });
    thumbnails.appendChild(img);
  });

  block.appendChild(thumbnails);
}
