export const getRandomString = (length: number = 8): string => {
  return Math.random().toString(16).substring(2, length);
};
