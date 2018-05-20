<template>
  <header>
    <the-menu/>
    <v-jumbotron color="light-green">
      <v-container fill-height>
        <v-layout
          column
          align-center
          justify-center>
          <img
            src="/static/logo.svg"
            class="the-header__logo"
            alt="logo">
          <h1>Recipify</h1>
        </v-layout>
      </v-container>
    </v-jumbotron>
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
}

</style>
