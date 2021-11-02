import { allCompetitions } from "../allCompetitions";
import { findTheWinner } from "../functoins";
import {
  FIND_WINNER,
  DELETE_PARTICIPANT,
  ADD_NEW_PARTICIPANT,
  SHOW_TIMER,
  CREATE_NEW_COMPETITION,
} from "../actions";

export const initialState = {
  competitions: allCompetitions.map((item) => item),
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PARTICIPANT:
      return {
        competitions: state.competitions.map((item) => {
          if (action.payload.competitionId === item.competitionId) {
            return {
              ...item,
              participants: item.participants.filter(
                (item) => !(item.id === action.payload.id)
              ),
            };
          }
          return item;
        }),
      };
    case ADD_NEW_PARTICIPANT:
      return {
        competitions: state.competitions.map((item) => {
          if (action.payload.competitionId === item.competitionId) {
            return {
              ...item,
              participants: [...item.participants, action.payload.participant],
            };
          }
          return item;
        }),
      };
    case FIND_WINNER:
      return {
        competitions: state.competitions.map((item) => {
          if (action.payload.competitionId === item.competitionId) {
            return {
              ...item,
              winner: findTheWinner(item.participants),
              competitionStatus: "Finished",
            };
          }
          return item;
        }),
      };
    case SHOW_TIMER:
      return {
        competitions: state.competitions.map((item) => {
          if (action.payload.competitionId === item.competitionId) {
            return {
              ...item,
              isTimer: !item.isTimer,
            };
          }
          return item;
        }),
      };

    case CREATE_NEW_COMPETITION:
      return {
        ...state,
        competitions: [...state.competitions, action.payload],
      };
    default:
      return { ...state };
  }
};
