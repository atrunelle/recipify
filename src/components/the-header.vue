<template>
  <header>
    <the-menu />
    <v-responsive
      height="360px"
      class="light-green"
    >
      <v-container fill-height>
        <v-layout
          column
          align-center
          justify-center
        >
          <img
            src="/logo.svg"
            class="the-header__logo"
            alt="logo"
          >
          <h1 class="display-3">
            Recipify
          </h1>
          <p class="the-header__text text-xs-center subheading">
            Create your own recipes by selecting ingredient and reviewing nutritional values before saving!
          </p>
        </v-layout>
      </v-container>
    </v-responsive>
  </header>
</template>

<script>
import TheMenu from '@/components/the-menu.vue';

export default {
  name: 'TheHeader',
  components: {
    TheMenu,
  },
};
</script>

<style lang="scss">
.the-header {
  &__logo {
    max-height: 80px;
  }

  &__text {
    margin-bottom: auto;
  }
}
</style>
