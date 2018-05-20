import layoutMixin from '../layout.mixin';

describe('Mixin: layout', () => {
  it('should be column layout by default', () => {
    const expected = {
      row: false,
      column: true,
    };

    layoutMixin.computed.$vuetify = {
      breakpoint: {
        mdAndUp: false,
      },
    };

    expect(layoutMixin.computed.rowMdLayout()).toEqual(expected);
  });

  it('should be row layout above md brekapoint', () => {
    const expected = {
      row: true,
      column: false,
    };

    layoutMixin.computed.$vuetify = {
      breakpoint: {
        mdAndUp: true,
      },
    };
    expect(layoutMixin.computed.rowMdLayout()).toEqual(expected);
  });
});
