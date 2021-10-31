import { findParticipant } from "../actions";

export default function handleFilterParticipants(e, value) {
  e.preventDefault();
  if (value) {
    findParticipant(String(value));
  }
}
