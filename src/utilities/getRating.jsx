export const getRating = (likes, maxStars = 5) => {
  return likes > maxStars ? maxStars : likes;
};
