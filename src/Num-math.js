const RandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const RandomIndex = (data) => Math.floor(Math.random() * data.length);

export { RandomNumber, RandomIndex };
