export function addWinnersToLocal(winners) {
  localStorage.setItem("winners", JSON.stringify(winners));
}
