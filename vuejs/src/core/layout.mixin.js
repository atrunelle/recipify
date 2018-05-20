export default {
  computed: {
    rowMdLayout () {
      const binding = {
        row: false,
        column: true,
      };

      if (this.$vuetify.breakpoint.mdAndUp) {
        binding.row = true;
        binding.column = false;
      }

      return binding;
    },
  },
};
