import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import TheAlert from '../the-alert';

describe('Component: app', () => {
  let component;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  const state = {
    alert: {
      text: '',
      type: 'error',
    },
  };

  const mutations = {
    hideAlert: jest.fn(),
  };

  beforeEach(() => {
    const store = new Vuex.Store({
      state,
      mutations,
    });

    component = mount(TheAlert, {
      localVue,
      store,
    });
    jest.clearAllMocks();
  });

  it('should hide alert if no value is passed', () => {
    component.vm.onAlertInput();
    expect(mutations.hideAlert).toHaveBeenCalled();
  });

  it('should not hide alert if value is passed', () => {
    component.vm.onAlertInput({});
    expect(mutations.hideAlert).not.toHaveBeenCalled();
  });

  it('should hide success alert automatically', () => {
    global.setTimeout = (callback, delay) => callback();
    state.alert = {
      type: 'success',
      text: 'alert',
    };

    expect(mutations.hideAlert).toHaveBeenCalled();
  });

  it('should not hide alert automatically', () => {
    global.setTimeout = (callback, delay) => callback();
    state.alert = {
      type: 'error',
      text: 'alert',
    };

    expect(mutations.hideAlert).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
