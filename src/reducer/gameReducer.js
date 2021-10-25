import { gameParams } from "../constants/gameParams";
import {
  ADD_TO_HISTORY,
  DELETE_FROM_HISTORY,
  START_NEW_GAME,
  SET_WINNER,
  SET_FIRST_SIGN,
  SET_CURRENT_SIGN,
  SET_WINNER_TO_STORE,
} from "../actions";

export const initialState = {
  isXTurn: true,
  history: [
    {
      squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
    },
  ],
  winner: null,
  currentSign: null,
  allWinners: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case DELETE_FROM_HISTORY:
      return {
        ...state,
        history: [...state.history.slice(0, action.payload.index)],
      };
    case START_NEW_GAME:
      return {
        ...state,
        history: [...state.history.slice(0, 1)],
        winner: null,
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload.winner,
      };
    case SET_FIRST_SIGN:
      return {
        ...state,
        isXTurn: action.payload.firstSign,
      };
    case SET_CURRENT_SIGN:
      return {
        ...state,
        currentSign: action.payload.currentSign,
      };
    case SET_WINNER_TO_STORE:
      return {
        ...state,
        allWinners: [
          ...state.allWinners,
          {
            winner: action.payload.winner,
            date: String(action.payload.date),
          },
        ],
      };
    default:
      return state;
  }
};
