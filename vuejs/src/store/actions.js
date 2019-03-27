import * as types from './types';

export default {
  [types.SHOW_ALERT]: (context, payload) => {
    context.commit(types.SHOW_ALERT, payload);
  },

  [types.HIDE_ALERT]: (context) => {
    context.commit(types.RESET_ALERT);
  },
};
