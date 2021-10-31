export function parseIntoMiliseconds(time) {
  time = time / 10;
  return (
    ("0" + Math.floor((time / 6000) % 60)).slice(-2) +
    ":" +
    ("0" + Math.floor((time / 100) % 60)).slice(-2) +
    ":" +
    ("0" + time).slice(-2)
  );
}
