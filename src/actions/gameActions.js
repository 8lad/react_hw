export const ADD_TO_HISTORY = "add to history";
export const DELETE_FROM_HISTORY = "DELETE_FROM_HISTORY";
export const START_NEW_GAME = "START_NEW_GAME";
export const SET_WINNER = "SET_WINNER";
export const SET_FIRST_SIGN = "SET_FIRST_SIGN";
export const SET_CURRENT_SIGN = "SET_CURRENT_SIGN";
export const SET_WINNER_TO_STORE = "SET_WINNER_TO_STORE";

export const addToHistory = (squares) => ({
  type: ADD_TO_HISTORY,
  payload: { squares },
});

export const deleteFromHistory = (index) => ({
  type: DELETE_FROM_HISTORY,
  payload: { index },
});

export const startNewGame = () => ({
  type: START_NEW_GAME,
});

export const setWinner = (winner) => ({
  type: SET_WINNER,
  payload: { winner },
});

export const setFirstSign = (firstSign) => ({
  type: SET_FIRST_SIGN,
  payload: { firstSign },
});

export const setCurrentSign = (currentSign) => ({
  type: SET_CURRENT_SIGN,
  payload: { currentSign },
});

export const setWinnerToStore = (winner, date) => ({
  type: SET_WINNER_TO_STORE,
  payload: { winner, date },
});
