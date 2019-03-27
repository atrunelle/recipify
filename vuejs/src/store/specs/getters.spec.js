import getters from '../getters';

describe('Store: app getters', () => {
  it('should retun alert state', () => {
    const state = {
      alert: {
        text: 'This is my alert',
        type: 'success',
      },
    };

    expect(getters.getAlert(state)).toEqual({
      text: 'This is my alert',
      type: 'success',
    });
  });
});
