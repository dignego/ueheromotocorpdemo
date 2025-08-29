export default function decorate(block) {
  block.classList.add('herofeatures');

  const features = [
    { icon: '🔄', label: 'Exchange your Bike' },
    { icon: '📍', label: 'Find Dealers' },
    { icon: '🗣️', label: 'Help & Support' },
    { icon: '🏢', label: 'Corporate Offers' },
  ];

  features.forEach((feature) => {
    const item = document.createElement('div');
    item.className = 'feature-item';

    const icon = document.createElement('div');
    icon.className = 'feature-icon';
    icon.textContent = feature.icon;

    const text = document.createElement('p');
    text.className = 'feature-label';
    text.textContent = feature.label;

    item.appendChild(icon);
    item.appendChild(text);
    block.appendChild(item);
  });
}
