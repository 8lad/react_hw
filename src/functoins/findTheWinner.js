export function findTheWinner(array) {
  array.sort((a, b) => a.timeInMiliseconds - b.timeInMiliseconds);
  let result = array[0];
  return result;
}
