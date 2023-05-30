export function randomPlaceholderImage() {
  return `https://picsum.photos/100?grayscale&random=${Math.floor(
    Math.random() * 1000
  )}`;
}
