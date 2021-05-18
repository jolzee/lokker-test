import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCoreVideoPlayer from "vue-core-video-player";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import { VueReCaptcha } from "vue-recaptcha-v3";

// For more options see below
Vue.use(VueReCaptcha, { siteKey: "6LcqXqcaAAAAAHGXD0GCQ9Bw3nnxPqHzHOruFAwH" });

Sentry.init({
  Vue,
  dsn:
    "https://6bbd8679fedb4053bd485b510f6e557a@o567556.ingest.sentry.io/5711635",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
Vue.config.productionTip = false;

Vue.use(VueCoreVideoPlayer);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
