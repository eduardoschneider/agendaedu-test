export function getRandomColor(key: string): string {
  let hash: number = 0;
  for (let i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const hue = Math.abs(hash) % 360;
  return `hsla(${hue}, 70%, 50%, 0.2)`;
}
