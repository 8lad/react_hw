import { allParticipants } from "../allParticipants";
import { createSingleParticipant, findTheWinner } from "../functoins";
import {
  FIND_WINNER,
  DELETE_PARTICIPANT,
  ADD_NEW_PARTICIPANT,
  SHOW_TIMER,
} from "../actions";

export const initialState = {
  participants: allParticipants.map((item) => createSingleParticipant(item)),
  winner: null,
  isTimer: false,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(
          (item) => !(item.id === action.payload.id)
        ),
      };
    case FIND_WINNER:
      return {
        ...state,
        winner: findTheWinner(state.participants),
      };
    case SHOW_TIMER:
      return {
        ...state,
        isTimer: !state.isTimer,
      };
    case ADD_NEW_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload],
      };
    default:
      return { ...state };
  }
};
