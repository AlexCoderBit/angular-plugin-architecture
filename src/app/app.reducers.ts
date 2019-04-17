import { combineReducers } from 'redux';
import pluginsRootReducer from '../../projects/plugins/src/plugins.reducer';

const initialState = {
  reduxInUse: true,
  coreMessage: ''
};

function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'CORE_ACTION_TEST': {
      return {
        ...state,
        coreMessage: payload.message
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  testReducer,
  ...pluginsRootReducer
});
