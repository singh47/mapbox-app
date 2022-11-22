import { createStore } from 'redux';

function addLong(state = [], action) {
  return action.long;
}

const store = createStore(addLong, [-67])

store.dispatch({type: 'long', long: [[-67.13734, 45.13745],
[-66.96466, 44.8097],
[-68.03252, 44.3252],
[-69.06, 43.98],
[-70.11617, 43.68405]]});

export default store;