import Store from '@/core/store';

describe('Store', () => {
  interface IState {
    data: string;
  }

  class TestStore extends Store<IState> {

    constructor() {
      super({
        data: 'original value',
      });
    }
  }

  const store = new TestStore();

  it('should get value', () => {
    let result = '';

    store.get<string>('data').subscribe((newData) => {
      result = newData;
    });

    expect(result).toBe('original value');
  });

  it('should set state', () => {
    store.setState({
      data: 'next value',
    });

    expect(store.state.data).toBe('next value');
  });
});
