import { PLUGIN_1_ACTION_TEST, pluginOneActions } from './plugin1.actions';

const initialState = {
  pluginOneReducerInScope: true,
  message: ''
};

function pluginOneReducer(state = initialState, action: pluginOneActions) {
  switch (action.type) {
    case PLUGIN_1_ACTION_TEST:
      return {
        ...state,
        messages: action.payload
      };

    default:
      return state;
  }
}

export default pluginOneReducer;
