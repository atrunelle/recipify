import * as types from './types';

export default {
  [types.SHOW_ALERT]: (state, payload) => {
    state.alert = payload;
  },

  [types.RESET_ALERT]: (state) => {
    state.alert = {
      text: '',
      type: 'error',
    };
  },
};
