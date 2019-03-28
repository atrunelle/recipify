<template>
  <v-app>
    <v-layout
      column
      justify-space-between
    >
      <the-header />
      <v-container grid-list-lg>
        <main>
          <router-view />
        </main>
      </v-container>
      <the-alert />
      <the-footer />
    </v-layout>
  </v-app>
</template>

<script>
import TheHeader from '@/components/the-header';
import TheFooter from '@/components/the-footer';
import TheAlert from '@/components/the-alert';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheAlert,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

h1 {
  font-size: 3.0em;
  font-weight: bold;
}

#app {
  min-height: 100vh;
}

main {
  margin-top: -100px;
}
</style>
