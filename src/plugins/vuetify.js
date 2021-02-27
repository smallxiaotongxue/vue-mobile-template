import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import zhHans from "vuetify/lib/locale/zh-Hans";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#666666",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { zhHans },
    current: "zhHans"
  }
});
