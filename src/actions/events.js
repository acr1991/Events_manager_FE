export const EVENTS_FETCHED = "EVENTS_FETCHED";
import request from "superagent";
const baseUrl = "http://localhost:4000";
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});
export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;
  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

// Create a reducer in reducers/events.js that responds to the EVENTS_FETCHED action by replacing the state with action.events.
