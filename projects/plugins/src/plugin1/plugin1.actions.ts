export const PLUGIN_1_ACTION_TEST = 'PLUGIN_1_ACTION_TEST';

interface pluginOneAction {
  type: typeof PLUGIN_1_ACTION_TEST;
  payload: {
    message: string;
  };
}

export type pluginOneActions = pluginOneAction;

interface pluginPayload {
  message: string;
}

export const pluginActionTest = (payload: pluginPayload) => ({
  type: PLUGIN_1_ACTION_TEST,
  payload
});
