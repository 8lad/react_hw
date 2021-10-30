import { creatPersonalId, parseIntoTime } from ".";
export function createSingleParticipant(person) {
  return {
    id: creatPersonalId(),
    firstName: person.firstName,
    secondName: person.secondName,
    timeInMiliseconds: person.timeInMiliseconds,
    timeForReading: parseIntoTime(person.timeInMiliseconds, 10),
  };
}
