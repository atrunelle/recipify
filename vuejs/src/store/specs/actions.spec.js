import actions from '../actions';

const context = {
  commit: jest.fn(),
};

describe('Store: app', () => {
  it('should trigger show alert mutations', () => {
    const payload = {
      text: 'alert text',
      type: 'error',
    };

    actions.showAlert(context, payload);
    expect(context.commit).toHaveBeenCalledWith('showAlert', payload);
  });

  it('should trigger reset alert mutations', () => {
    actions.hideAlert(context);
    expect(context.commit).toHaveBeenCalledWith('resetAlert');
  });
});
