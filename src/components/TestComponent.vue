<template>
  <v-container>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="primary"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Bad SSL
          <v-icon>mdi-police-badge</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          PII
          <v-icon>mdi-card-account-details-outline</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="tab-1">
           <v-img
                      src="https://qzonestyle.gtimg.cn/qz-proj/wy-pc-v3/static/img/web/slide-1.png"
                      class="ma-1"
                      contain
                      height="150"
                      max-height="150"
                    />
          <v-card flat>
            <v-card-text>
              <v-container fluid>
                <v-row dense>
                  <v-col
                    v-for="item in this.badSSL"
                    :key="item"
                    cols="12"
                    md="4"
                  >
                    <v-img
                      :src="`${item}/icons/icon-red.png`"
                      class="ma-0 mr-2"
                      contain
                      height="15"
                      :title="`${item}`"
                      max-height="15"
                      max-width="15"
                      style="display: inline-flex"
                    />
                    <a :href="item">{{ item }} </a>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item :key="2" value="tab-2">
          <v-card flat>
            <v-card-text>
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="100px"
                  :src="require('../assets/login.png')"
                >
                  <v-card-title>Example Form</v-card-title>
                </v-img>
                <v-card-subtitle>
                  This form is for checking for PII in the posted request. All
                  values are transmitted in plaintext or base64 encoded to a 3rd
                  party test server!<br />
                  <b style="color: red; font-family: 'source-sans-pro'"
                    >Make up the PII - Do not use your own - Do not submit
                    anything you wouldn't want emailed to your worst enemy.</b
                  >
                  <div v-if="buttonClicked">
                    <v-chip class="ma-2" color="blue" label text-color="white">
                      <v-icon left> mdi-shield-account </v-icon>
                      {{ email }}
                    </v-chip>
                    <v-chip class="ma-2" color="red" label text-color="white">
                      <v-icon left> mdi-form-textbox-password </v-icon>
                      {{ password }}
                    </v-chip>
                  </div>
                </v-card-subtitle>
                <v-card-text class="text--primary">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    clearable
                    solo
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    clearable
                    solo
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-textarea
                    solo
                    v-model="bodyText"
                    append-icon="mdi-account-plus"
                    auto-grow
                    name="bodyText"
                    label="Enter Some PII here"
                    @click:append="populateWithPii()"
                  ></v-textarea>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-btn color="orange" @click="postPii"> Login </v-btn>
                </v-card-actions>
              </v-card>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="80"
          max-height="80"
        />
      </v-col>

      <v-col class="mb-12">
        <div class="mb-5">
          <vue-core-video-player
            style="z-index: 0"
            :autoplay="false"
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.28539568221!2d-93.33151838074892!3d44.97079704367975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1617917373103!5m2!1sen!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          height="498"
          width="510"
          src="https://player.youku.com/embed/XNDk5MjM3ODQxMg=="
          frameborder="0"
          allowfullscreen
        ></iframe>

        <v-row class="text-left">
          <v-col cols="12">
            <h1>(Safe) Safe Browsing Testing Links</h1>

            <h2>Webpage Warnings</h2>
            <ol>
              <!-- Note: if changing HTML node IDs, please first see internal issue b/147323056 -->
              <li>
                [A/W/M/L/C] Should show a phishing warning:
                <a
                  id="phishing-webpage"
                  href="//testsafebrowsing.appspot.com/s/phishing.html"
                  >link</a
                >
              </li>
              <li>
                [A/W/M/L/C/D] Should show a malware warning:
                <a
                  id="malware-webpage"
                  href="//testsafebrowsing.appspot.com/s/malware.html"
                  >link</a
                >
              </li>
              <li>
                [A/W/M/L/C/D] Should show a malware warning due to a bad
                subresource:
                <a
                  id="malware-iframe-webpage"
                  href="//testsafebrowsing.appspot.com/s/malware_in_iframe.html"
                  >link</a
                >
              </li>
              <li>
                [W/M/L/C] Should show a unwanted software warning:
                <a
                  id="unwanted-software-webpage"
                  href="//testsafebrowsing.appspot.com/s/unwanted.html"
                  >link</a
                >
              </li>
              <li>
                [W/M/L/C/D] Should show a malware warning due to bad assets:
                <a
                  id="malware-asset-small-img"
                  href="//testsafebrowsing.appspot.com/s/image_small.html"
                  >small img</a
                >,
                <a
                  id="malware-asset-medium-img"
                  href="//testsafebrowsing.appspot.com/s/image_medium.html"
                  >medium img</a
                >,
                <a
                  id="malware-asset-large-img"
                  href="//testsafebrowsing.appspot.com/s/image_large.html"
                  >large img</a
                >,
                <a
                  id="malware-asset-dynamic-img"
                  href="//testsafebrowsing.appspot.com/s/image_dynamic.html"
                  >dynamically loaded img</a
                >,
                <a
                  id="malware-asset-css"
                  href="//testsafebrowsing.appspot.com/s/bad_css.html"
                  >css</a
                >,
                <a
                  id="malware-asset-js"
                  href="//testsafebrowsing.appspot.com/s/bad_javascript.html"
                  >js</a
                >]
              </li>
              <li>
                [A/W/M/L/C] Should show a billing warning:
                <a
                  id="billing-webpage"
                  href="https://testsafebrowsing.appspot.com/s/trick_to_bill.html"
                  >link</a
                >
              </li>
            </ol>

            <h2>Desktop Download Warnings</h2>
            <ol>
              <li>
                Should show a "malicious" warning, based on content:
                <a href="https://testsafebrowsing.appspot.com/s/content.exe"
                  >link</a
                >
                [W/M]
              </li>
              <li>
                Should show a "malicious" warning, based on content with https:
                <a href="https://testsafebrowsing.appspot.com/s/content.exe"
                  >link</a
                >
                [W/M]
              </li>
              <li>
                Should show a "dangerous host" warning:
                <a href="https://testsafebrowsing.appspot.com/s/badrep.exe"
                  >link</a
                >
                [W]
              </li>
              <li>
                Should show an "uncommon" warning, for .exe:
                <a href="https://testsafebrowsing.appspot.com/s/unknown.exe"
                  >link</a
                >
                [W]
              </li>
              <li>
                Should show an "uncommon" warning, for https .exe:
                <a href="https://testsafebrowsing.appspot.com/s/unknown.exe"
                  >link</a
                >
                [W]
              </li>
              <li>
                Should show an "potentially unwanted app" warning, for .exe:
                <a href="//testsafebrowsing.appspot.com/s/pua.exe">link</a>
                [W]
              </li>
            </ol>

            <h2>IOS/OSX Warnings</h2>
            <ol>
              <li>
                Should show malware warning (IOS):
                <a href="//testsafebrowsing.appspot.com/apiv4/IOS/MALWARE/URL/"
                  >link</a
                >
              </li>
              <li>
                Should show social engineering warning (IOS):
                <a
                  href="//testsafebrowsing.appspot.com/apiv4/IOS/SOCIAL_ENGINEERING/URL/"
                  >link</a
                >
              </li>
              <li>
                Should show malware warning (OSX):
                <a href="//testsafebrowsing.appspot.com/apiv4/OSX/MALWARE/URL/"
                  >link</a
                >
              </li>
              <li>
                Should show social engineering warning (OSX):
                <a
                  href="//testsafebrowsing.appspot.com/apiv4/OSX/SOCIAL_ENGINEERING/URL/"
                  >link</a
                >
              </li>
            </ol>

            <h2>Permissions Blacklisting</h2>
            <ol>
              <li>
                Should autoblock notification request made on page load:
                <a
                  href="https://testsafebrowsing.appspot.com/s/notif_pageload.html"
                  >link</a
                >
              </li>
              <li>
                Should autoblock geolocation request made on button click:
                <a
                  href="https://testsafebrowsing.appspot.com/s/geoloc_click.html"
                  >link</a
                >
              </li>
              <li>
                Should autoblock notification request made on page load, and
                geolocation request made after a delay:
                <a
                  href="https://testsafebrowsing.appspot.com/s/notif_geoloc_delay.html"
                  >link</a
                >
              </li>
              <li>
                Should autoblock all media requests made in a batch (10):
                <a
                  href="https://testsafebrowsing.appspot.com/s/media_batch.html"
                  >link</a
                >
              </li>
              <li>
                Should not be autoblocked:
                <a href="https://testsafebrowsing.appspot.com/s/midi_click.html"
                  >link</a
                >
              </li>
            </ol>

            <h2>Password Protection</h2>
            <ol>
              <li>
                Should trigger phishing warning on password reuse:
                <a href="https://testsafebrowsing.appspot.com/s/bad_login.html"
                  >link</a
                >
              </li>
            </ol>

            <h2>Low Reputation</h2>
            <ol>
              <li>
                Should trigger phishing warning on password reuse:
                <a
                  href="https://testsafebrowsing.appspot.com/s/low_rep_login.html"
                  >link</a
                >
              </li>
            </ol>

            <h2>Desktop DLP Warnings</h2>
            <ol>
              <li>
                Should trigger the 1 CC rule:
                <a
                  href="https://testsafebrowsing.appspot.com/s/file1.txt"
                  download
                  >link</a
                >
              </li>
              <li>
                Should trigger the 10 SSN rule:
                <a
                  href="https://testsafebrowsing.appspot.com/s/file2.txt"
                  download
                  >link</a
                >
              </li>
              <li>
                Should trigger the 1000 email addresses rule:
                <a
                  href="https://testsafebrowsing.appspot.com/s/export_report1.csv"
                  download
                  >link</a
                >
              </li>
            </ol>

            <h2>Malware deep scanning warnings</h2>
            <ol>
              <li>
                Should show a uncommon warning from Safebrowsing and then
                "malicious" warning after deep scanning:
                <a
                  href="https://testsafebrowsing.appspot.com/s/bad_app_file_on_scan.exe"
                  >link</a
                >
              </li>
            </ol>
          </v-col>
        </v-row>

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

                <v-card-title :style="getFont()"
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
        <blockquote class="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">
            I&#39;m noticing more and more JS injections that steal credentials
            from WordPress login forms. They resemble typical
            <a
              href="https://twitter.com/hashtag/Magecart?src=hash&amp;ref_src=twsrc%5Etfw"
              >#Magecart</a
            >
            scripts: e.g RegExp test for the page URL, use of WebSockets, domain
            names that mimic Google domains. H/t
            <a href="https://twitter.com/_jamsec?ref_src=twsrc%5Etfw"
              >@_jamsec</a
            >
            for this sample.
            <a href="https://t.co/8DXRiV97q3">pic.twitter.com/8DXRiV97q3</a>
          </p>
          &mdash; Denis (@unmaskparasites)
          <a
            href="https://twitter.com/unmaskparasites/status/1378065215565168641?ref_src=twsrc%5Etfw"
            >April 2, 2021</a
          >
        </blockquote>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline"> reCaptcha Token </v-card-title>
        <v-card-text>{{ token }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
const superagent = require("superagent");

let counter = 0;
export default {
  name: "TestComponent",

  data: () => ({
    contents: [],
    email: "",
    password: "",
    bodyText: "",
    tab: "",
    token: "",
    dialog: false,
    buttonClicked: false,
    show1: false,
    publicPath: process.env.BASE_URL,
    fonts: [
      "source-sans-pro",
      "postino-std",
      "zebrawood-std",
      "copal-std-outline",
    ],
    badSSL: [
      "http://http.badssl.com",
      "https://cbc.badssl.com",
      "https://expired.badssl.com",
      "https://incomplete-chain.badssl.com",
      "https://invalid-expected-sct.badssl.com",
      "https://mozilla-intermediate.badssl.com",
      "https://self-signed.badssl.com",
      "https://sha1-2016.badssl.com",
      "https://sha1-2017.badssl.com",
      "https://sha1-intermediate.badssl.com",
      "https://superfish.badssl.com",
      "https://tls-v1-1.badssl.com:1011",
    ],
  }),
  created() {
    var scripts = ["https://platform.twitter.com/widgets.js"];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  mounted() {
    // for (let index = 0; index < this.badSSL.length; index++) {
    //   const badSslUrl = this.badSSL[index];
    //   superagent
    //     .get(`${badSslUrl}/icons/icon-red.png`)
    //     .then(() => {
    //       console.log(
    //         `Successful Bad SSL Request: ${badSslUrl}/icons/icon-red.png`
    //       );
    //     })
    //     .catch((err) => {
    //       console.error(
    //         `Error Bad SSL Request: ${badSslUrl}/icons/icon-red.png`,
    //         err
    //       );
    //     });
    // }
    for (let index = 1; index < 10; index++) {
      superagent
        .get("https://jsonplaceholder.typicode.com/posts/" + index)
        .set("Accept", "application/json")
        .then((res) => {
          console.log(index + ": AJAX Request Response » ", res.body.body);
        });
    }
  },
  computed: {},
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");
      return token;
      // Do stuff with the received token.
    },
    populateWithPii() {
      this.bodyText = `"Please call me. My phone number is (555) 253-0000."

More examples:
    Email address: foo@example.com
    Credit card number: 4012-8888-8888-1881
    National Provider Identifier: 1245319599
    Driver's license: AC333991
    My SSN is: 078-05-1120
    David Adams @ https://mysite.com
    password: 1234567`;
    },
    async postPii() {
      this.dialog = true;
      this.buttonClicked = true;
      const postBody = {
        email: this.email,
        password: this.password,
        body: this.bodyText,
        emailBase64: btoa(this.email),
        passwordBase64: btoa(this.password),
        bodyBase64: btoa(this.bodyText),
      };
      superagent
        .post(
          `https://httpbin.org/anything?email=${encodeURIComponent(
            this.email
          )}&password=${encodeURIComponent(
            this.password
          )}&body=${encodeURIComponent(this.bodyText)}`
        )
        .set("Content-Type", "application/json")
        .set(
          "My-Secret-Header-Key",
          encodeURIComponent(
            `email: ${this.email} password: ${this.password} body: ${this.bodyText}`
          )
        )
        .set(
          "My-Secret-Header-Key-base64encoded",
          btoa(
            `email: ${this.email} password: ${this.password} body: ${this.bodyText}`
          )
        )
        .send(postBody)
        .then((res) => {
          console.log("Echoed Response:", res.body);
        });
      this.token = await this.recaptcha();
      this.dialog = true;
    },
    getFont() {
      if (counter < 4) {
        counter = counter + 1;
      } else {
        counter = 0;
      }
      return `font-family: '${this.fonts[counter]}', 'Roboto'`;
    },
    getPost(index) {
      // console.log(this.contents[index]);
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