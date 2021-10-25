export const randomBoolean = () => {
  let random = Math.random() * 100;
  return parseInt(random) >= 50 ? true : false;
};
