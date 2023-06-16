// helper HEX generator
const generateHex = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
};
const randomDeg = (deg = 101) => {
  const random = Math.random() * deg;
  return ~~random;
};

// generate random colors
export const hexGenerator = (setMediaBg: any) => {
  const color = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
  setMediaBg(color);
};

// generate random gradiant
export const gradiantGenerator = (setMediaBg: any) => {
  const color = `linear-gradient(${randomDeg(
    360
  )}deg, ${generateHex()}, ${generateHex()})`;

  setMediaBg(color);
};

//generate mesh gradiant
export const meshGenerator = (setMediaBg: any) => {
  const color = `
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%),
    radial-gradient(at ${randomDeg()}% ${randomDeg()}%, ${generateHex()} 0px, transparent 50%)`;
  setMediaBg(color);
};
