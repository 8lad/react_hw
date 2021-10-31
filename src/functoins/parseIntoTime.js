export function parseIntoTime(time, devider) {
  if (devider) {
    time = parseInt(time / devider);
  }
  return (
    ("0" + Math.floor((time / 6000) % 60)).slice(-2) +
    ":" +
    ("0" + Math.floor((time / 100) % 60)).slice(-2) +
    ":" +
    ("0" + time).slice(-2)
  );
}
