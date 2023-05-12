const getRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

export const randomColor = () => {
  return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )})`;
};
