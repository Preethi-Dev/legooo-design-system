export const generateStarByCount = (count) => {
  const RateStars = [];
  for (let i = 1; i <= count; i++) {
    RateStars.push(i);
  }
  return RateStars;
};

export const generateStarArray = (count, activeStar) => {
  let filled = [];
  [...new Array(count)].forEach((star, index) => {
    index + 1 < activeStar && filled.push(1);
  });

  let half = activeStar - filled.length;

  let empty = [];
  [...new Array(count)].forEach((star, index) => {
    index + 1 > Math.ceil(activeStar) && empty.push(0);
  });

  return activeStar === 0 ? [...new Array(count)] : [...filled, half, ...empty];
};
