export const findTabKeyByLabel = (items, label) => {
  return items.find((item) => item.label === label);
};

export const findTabContentByKey = (items, key) => {
  return items.find((item) => item.key === key);
};

export const isExceededContent = (items) => {
  return items.length > 5;
};
