import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import TheAlert from '../the-alert';

describe('Component: app', () => {
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

  const store = new Vuex.Store({
    state,
    mutations,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should hide alert if no value is passed', () => {
    const wrapper = mount(TheAlert, {
      localVue,
      store,
    });
    wrapper.vm.onAlertInput();
    expect(mutations.hideAlert).toHaveBeenCalled();
  });

  it('should not hide alert if value is passed', () => {
    const wrapper = mount(TheAlert, {
      localVue,
      store,
    });
    wrapper.vm.onAlertInput({});
    expect(mutations.hideAlert).not.toHaveBeenCalled();
  });

  it('should hide success alert automatically', () => {
    mount(TheAlert, {
      localVue,
      store,
    });
    global.setTimeout = (callback, delay) => callback();
    state.alert = {
      type: 'success',
      text: 'alert',
    };

    expect(mutations.hideAlert).toHaveBeenCalled();
  });

  it('should not hide alert automatically', () => {
    mount(TheAlert, {
      localVue,
      store,
    });
    global.setTimeout = (callback, delay) => callback();
    state.alert = {
      type: 'error',
      text: 'alert',
    };

    expect(mutations.hideAlert).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const wrapper = mount(TheAlert, {
      localVue,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
