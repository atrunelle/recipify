<template>
  <v-alert
    class="the-alert"
    :type="alert.type"
    :value="alert.text"
    @input="onAlertInput"
    dismissible>
    {{ alert.text }}
  </v-alert>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import * as appTypes from '@/store/app/types';

export default {
  name: 'TheAlert',

  computed: {
    ...mapGetters('app', {
      alert: appTypes.GET_ALERT,
    }),
  },

  methods: {
    ...mapActions('app', [
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
