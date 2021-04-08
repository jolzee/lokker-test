<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-12">
        <h1 class="display-2 font-weight-bold mb-3">Performance Test Page</h1>
        <div class="mb-5">
          <vue-core-video-player
            style="z-index: 0"
            src="https://cdn.jsdelivr.net/npm/video-media-samples@1.0.0/big-buck-bunny-480p-30sec.mp4"
            :cover="`${publicPath}/bbb.jpg`"
          ></vue-core-video-player>
        </div>
        <iframe
          src="https://player.vimeo.com/video/516791730"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          class="mr-1"
        ></iframe>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/zp-mlmwhA40"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/516791730">Lokker Explained</a> from
          <a href="https://vimeo.com/lokker">Lokker</a> on
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="(n, index) in 100" :key="index" cols="12" md="4">
              <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="250"
                  :src="`https://via.placeholder.com/500x500.png?text=${
                    index + 1
                  }`"
                ></v-img>

                <v-card-title :style="getFont(index)"
                  >{{ index + 1 }}. Test Title</v-card-title
                >

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                  </v-row>

                  <div class="my-4 subtitle-1">
                    <a href="http://www.lokker.com">Lokker</a>
                  </div>

                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const superagent = require("superagent");

let counter = 0;
export default {
  name: "HelloWorld",

  data: () => ({
    contents: [],
    publicPath: process.env.BASE_URL,
    fonts: [
      "source-sans-pro",
      "postino-std",
      "zebrawood-std",
      "copal-std-outline",
    ],
  }),

  mounted() {
    for (let index = 1; index < 10; index++) {
      superagent
        .get("https://jsonplaceholder.typicode.com/posts/" + index)
        .set("Accept", "application/json")
        .then((res) => {
          console.log(res.body.body);
        });
    }
  },
  computed: {},
  methods: {
    getFont(index) {
      console.log(index);
      if (counter < 4) {
        counter = counter + 1;
      } else {
        counter = 0;
      }
      return `font-family: '${this.fonts[counter]}', 'Roboto'`;
    },
    getPost(index) {
      console.log(this.contents[index]);
      return this.contents[index];
    },
  },
};
</script>
<style>
.vcp-container,
.vcp-container video {
  width: 350px;
  max-width: 640px;
}
</style>