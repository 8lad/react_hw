export const FIND_PARTICIPANT = "FIND_PARTICIPANT";
export const DELETE_PARTICIPANT = " DELETE_PARTICIPANT";
export const FIND_WINNER = "FIND_WINNER";
export const SHOW_TIMER = "SHOW_TIMER";
export const ADD_NEW_PARTICIPANT = "ADD_NEW_PARTICIPANT";
export const findParticipant = (input) => ({
  type: FIND_PARTICIPANT,
  payload: { input },
});

export const deleteParticipant = (id) => ({
  type: DELETE_PARTICIPANT,
  payload: { id },
});

export const findWinner = () => ({ type: FIND_WINNER });

export const showTimer = () => ({
  type: SHOW_TIMER,
});

export const addNewParticipant = (participant) => ({
  type: ADD_NEW_PARTICIPANT,
  payload: participant,
});
