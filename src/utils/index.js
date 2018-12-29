const isBetween = val => (min, max) => {
  return val >= min && val < max;
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  isBetween,
  getRandom
};
