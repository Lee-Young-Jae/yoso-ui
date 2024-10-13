export function getRGBA(color: string, alpha: number) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hexToRgb(hex: string) {
  let sanitizedHex = hex.replace("#", "");
  if (sanitizedHex.length === 3) {
    sanitizedHex = sanitizedHex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const num = parseInt(sanitizedHex, 16); // RRGGBB
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

export function darken(color: string, amount: number) {
  const { r, g, b } = hexToRgb(color);
  const newR = Math.max(0, Math.min(255, r * (1 - amount)));
  const newG = Math.max(0, Math.min(255, g * (1 - amount)));
  const newB = Math.max(0, Math.min(255, b * (1 - amount)));
  return rgbToHex(newR, newG, newB);
}

export function lighten(color: string, amount: number) {
  return darken(color, -amount);
}
