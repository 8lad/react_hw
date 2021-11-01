import { creatPersonalId, createSingleParticipant } from "./functoins/";

const allParticipants = [
  {
    firstName: "Ivan",
    secondName: "Urgant",
    timeInMiliseconds: 101101,
  },
  {
    firstName: "Andrey",
    secondName: "Shevchenko",
    timeInMiliseconds: 100050,
  },
  {
    firstName: "Nicolay",
    secondName: "Baskov",
    timeInMiliseconds: 100200,
  },
  {
    firstName: "Leonid",
    secondName: "Yakybovich",
    timeInMiliseconds: 80963,
  },
  {
    firstName: "Usain",
    secondName: "Bolt",
    timeInMiliseconds: 50555,
  },
  {
    firstName: "Lionel",
    secondName: "Messi",
    timeInMiliseconds: 125333,
  },
  {
    firstName: "Michele",
    secondName: "Obama",
    timeInMiliseconds: 99235,
  },
  {
    firstName: "Romelu",
    secondName: "Lukaku",
    timeInMiliseconds: 100623,
  },
  {
    firstName: "Cristiano",
    secondName: "Ronaldo",
    timeInMiliseconds: 105520,
  },
];

export const allCompetitions = [
  {
    competitionId: creatPersonalId(),
    competitionName: "Running 100 meters",
    competitionStatus: "Active",
    isTimer: false,
    winner: null,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
  {
    competitionId: creatPersonalId(),
    competitionName: "Eating old potatoes",
    competitionStatus: "Active",
    isTimer: false,
    winner: null,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
  {
    competitionId: creatPersonalId(),
    competitionName: "Sleeping as long as you can",
    competitionStatus: "Active",
    winner: null,
    isTimer: false,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
  {
    competitionId: creatPersonalId(),
    competitionName: "Holding big bucket with shoes",
    competitionStatus: "Active",
    winner: null,
    isTimer: false,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
  {
    competitionId: creatPersonalId(),
    competitionName: "Cleaning dishes",
    competitionStatus: "Active",
    isTimer: false,
    winner: null,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
  {
    competitionId: creatPersonalId(),
    competitionName: "Making snow Mikkey Mouse",
    competitionStatus: "Active",
    winner: null,
    isTimer: false,
    participants: allParticipants.map((item) => createSingleParticipant(item)),
  },
];
