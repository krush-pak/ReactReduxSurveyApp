import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if empty string --> changes to false
    default:
      return state;
  }
}
