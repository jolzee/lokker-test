<template>
  <v-app>
    <v-app-bar app color="primary" style="z-index: 3" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1"
          contain
          min-width="200"
          :src="require('./assets/logo.svg')"
          width="350"
        />
      </div>
    </v-app-bar>

    <v-main>
      <TestComponent />
    </v-main>
  </v-app>
</template>

<script>
import TestComponent from "./components/TestComponent";

export default {
  name: "App",

  components: {
    TestComponent,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.v-toolbar__content {
  z-index: 4;
}
</style>
