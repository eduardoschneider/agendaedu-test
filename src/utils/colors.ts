export function getRandomColor(key: string): string {
  // Gera um hash simples a partir da string
  let hash: number = 0;
  for (let i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // mantém como inteiro 32-bit
  }
  // Converte hash em hue [0–359]
  const hue = Math.abs(hash) % 360;
  // Retorna cor em HSL (saturação e luminosidade fixas)
  return `hsla(${hue}, 70%, 50%, 0.2)`;
}