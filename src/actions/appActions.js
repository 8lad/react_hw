export const FIND_PARTICIPANT = "FIND_PARTICIPANT";
export const DELETE_PARTICIPANT = " DELETE_PARTICIPANT";
export const FIND_WINNER = "FIND_WINNER";
export const SHOW_TIMER = "SHOW_TIMER";
export const ADD_NEW_PARTICIPANT = "ADD_NEW_PARTICIPANT";
export const CREATE_NEW_COMPETITION = "CREATE_NEW_COMPETITION";

export const findParticipant = (input) => ({
  type: FIND_PARTICIPANT,
  payload: { input },
});

export const deleteParticipant = (competitionId, id) => ({
  type: DELETE_PARTICIPANT,
  payload: { competitionId, id },
});

export const findWinner = (competitionId) => ({
  type: FIND_WINNER,
  payload: { competitionId },
});

export const showTimer = (competitionId) => ({
  type: SHOW_TIMER,
  payload: { competitionId },
});

export const addNewParticipant = (participant, competitionId) => ({
  type: ADD_NEW_PARTICIPANT,
  payload: { participant, competitionId },
});

export const addNewCompetition = (competition) => ({
  type: CREATE_NEW_COMPETITION,
  payload: competition,
});
