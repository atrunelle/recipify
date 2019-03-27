import mutations from '../mutations';

describe('Store: app mutations', () => {
  let state;

  beforeEach(() => {
    state = {
      alert: {},
    };
  });

  it('should update state with passed alert', () => {
    const payload = {
      text: 'alert text',
      status: 'error',
    };

    mutations.showAlert(state, payload);
    expect(state.alert).toEqual({
      text: 'alert text',
      status: 'error',
    });
  });

  it('should reset alert to original state', () => {
    mutations.resetAlert(state);

    expect(state.alert).toEqual({
      text: '',
      type: 'error',
    });
  });
});
