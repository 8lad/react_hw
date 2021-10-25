export function getSignTurn(turn, firstStep) {
  if (firstStep) {
    return !(turn % 2) ? "O" : "X";
  }
  if (!firstStep) {
    return turn % 2 ? "O" : "X";
  }
}
