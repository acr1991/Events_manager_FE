const initialState = null;
export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return action.payload;
    }

    default:
      return state;
  }
}
