<template>
  <v-alert
    class="the-alert"
    :type="alert.type"
    :value="alert.text"
    @input="onAlertInput"
    dismissible
  >
    {{ alert.text }}
  </v-alert>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import * as appTypes from '@/store/types';

export default {
  name: 'TheAlert',

  computed: {
    ...mapState(['alert']),
  },

  methods: {
    ...mapMutations([
      appTypes.HIDE_ALERT,
    ]),

    onAlertInput (value) {
      if (!value) {
        this.hideAlert();
      }
    },
  },

  watch: {
    alert () {
      if (this.alert.type === 'success') {
        setTimeout(() => {
          this.hideAlert();
        }, 3000);
      }
    },
  },

};
</script>

<style lang="scss">
.the-alert {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
