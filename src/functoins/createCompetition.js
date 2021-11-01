import { creatPersonalId } from ".";
export function createCompetition(competitionName) {
  return {
    competitionId: creatPersonalId(),
    competitionName: competitionName,
    competitionStatus: "active",
    competitionWinner: null,
    winner: null,
    isTimer: false,
    time: null,
    participants: [],
  };
}
